// Form handler for logitrade.md.
// The site's forms (contact page and producers page) post here as normal HTML forms.
// We verify the Turnstile token, drop honeypot hits, email the message to the office,
// send the visitor a short confirmation in their language and redirect back to the site.

const LOCALES = { ro: '', en: '/en', ru: '/ru' };
const LIMITS = {
  firstName: 80,
  lastName: 80,
  email: 200,
  company: 160,
  phone: 40,
  products: 300,
  message: 5000,
};
/** Which page each form lives on, for error redirects. */
const PAGES = { contact: 'contact', partner: 'partners' };

/** Confirmation email sent to the visitor. It never repeats what they typed,
 *  so the form can't be used to send someone else arbitrary text. */
const CONFIRM = {
  ro: {
    subject: 'Am primit mesajul dumneavoastră | Logitrade Group',
    hello: (name) => `Bună ziua, ${name},`,
    body: [
      'Vă mulțumim că ne-ați scris. Am primit mesajul dumneavoastră și vă vom răspunde în cel mult o zi lucrătoare.',
      'Dacă doriți să adăugați ceva, răspundeți direct la acest email.',
    ],
    sign: 'Cu stimă,\nEchipa Logitrade Group',
  },
  en: {
    subject: 'We received your message | Logitrade Group',
    hello: (name) => `Hello ${name},`,
    body: [
      'Thank you for writing to us. We have received your message and will reply within one business day.',
      'If you would like to add anything, just reply to this email.',
    ],
    sign: 'Kind regards,\nThe Logitrade Group team',
  },
  ru: {
    subject: 'Мы получили ваше сообщение | Logitrade Group',
    hello: (name) => `Здравствуйте, ${name}!`,
    body: [
      'Спасибо, что написали нам. Мы получили ваше сообщение и ответим в течение одного рабочего дня.',
      'Если хотите что-то добавить, просто ответьте на это письмо.',
    ],
    sign: 'С уважением,\nкоманда Logitrade Group',
  },
};

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function confirmation(lang, firstName, site) {
  const c = CONFIRM[lang] ?? CONFIRM.ro;
  const paragraphs = [c.hello(firstName), ...c.body, c.sign];
  const text = `${paragraphs.join('\n\n')}\n\n${site}`;
  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f4f6fa;font-family:Arial,Helvetica,sans-serif;color:#17264d">
<div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e3e7ef">
<div style="background:#17264d;border-bottom:4px solid #80141b;padding:18px 24px;color:#fff;font-size:20px;font-weight:bold;letter-spacing:.5px">Logitrade Group</div>
<div style="padding:24px;font-size:15px;line-height:1.55">
${paragraphs.map((p) => `<p style="margin:0 0 14px">${escapeHtml(p).replace(/\n/g, '<br>')}</p>`).join('\n')}
</div>
<div style="padding:14px 24px;border-top:1px solid #e3e7ef;font-size:13px;color:#5b6474"><a href="${site}" style="color:#80141b">${site.replace(/^https:\/\//, '')}</a></div>
</div></body></html>`;
  return { subject: c.subject, text, html };
}

async function sendEmail(env, payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.FROM_EMAIL, ...payload }),
  }).catch(() => null);
  return Boolean(res && res.ok);
}

export default {
  async fetch(request, env, ctx) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
    }

    let form;
    try {
      form = await request.formData();
    } catch {
      return new Response('Bad request', { status: 400 });
    }

    const lang = String(form.get('lang') ?? 'ro');
    const prefix = LOCALES[lang] ?? '';
    const topic = form.get('topic') === 'partner' ? 'partner' : 'contact';
    const to = (page, query = '') => Response.redirect(`${env.SITE_URL}${prefix}/${page}/${query}`, 303);
    const fail = (reason) => to(PAGES[topic], `?form=${reason}#form`);

    // Honeypot: real people never see or fill this field. Pretend it worked.
    if (form.get('website')) return to('thanks');

    const verify = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: String(form.get('cf-turnstile-response') ?? ''),
        remoteip: request.headers.get('CF-Connecting-IP') ?? '',
      }),
    }).then((r) => r.json()).catch(() => ({ success: false }));
    if (!verify.success) return fail('captcha');

    const f = {};
    for (const [key, max] of Object.entries(LIMITS)) {
      f[key] = String(form.get(key) ?? '').trim().slice(0, max);
    }
    const oneLine = (s) => s.replace(/[\r\n]+/g, ' ');
    if (
      !f.firstName ||
      !f.lastName ||
      !f.message ||
      (topic === 'partner' && !f.company) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)
    ) {
      return fail('invalid');
    }

    const text = [
      topic === 'partner' ? 'Cerere de parteneriat (pagina „Pentru producători”)' : 'Mesaj din formularul de contact',
      '',
      `Nume: ${f.firstName} ${f.lastName}`,
      `Email: ${f.email}`,
      `Telefon: ${f.phone || '-'}`,
      `Companie: ${f.company || '-'}`,
      ...(topic === 'partner' ? [`Produse: ${f.products || '-'}`] : []),
      `Limba site-ului: ${LOCALES[lang] === undefined ? 'ro' : lang}`,
      '',
      f.message,
    ].join('\n');

    const subject =
      topic === 'partner'
        ? `Cerere de parteneriat: ${f.company} (${f.firstName} ${f.lastName})`
        : `Mesaj nou de pe site: ${f.firstName} ${f.lastName}`;

    const ok = await sendEmail(env, { to: [env.TO_EMAIL], reply_to: f.email, subject: oneLine(subject), text });
    if (!ok) return fail('error');

    // Confirmation to the visitor; a failure here must not lose the message above.
    const c = confirmation(lang, oneLine(f.firstName), env.SITE_URL + prefix + '/');
    const confirm = sendEmail(env, { to: [f.email], reply_to: env.TO_EMAIL, ...c });
    if (ctx && ctx.waitUntil) ctx.waitUntil(confirm);
    else await confirm;

    return to('thanks');
  },
};
