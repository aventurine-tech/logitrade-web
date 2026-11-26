// Contact form handler for logitrade.md.
// The site's form posts here as a normal HTML form. We verify the Turnstile token,
// drop honeypot hits, email the message to the office and redirect back to the site.

const LOCALES = { ro: '', en: '/en', ru: '/ru' };
const LIMITS = { firstName: 80, lastName: 80, email: 200, company: 160, message: 5000 };

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
    }

    let form;
    try {
      form = await request.formData();
    } catch {
      return new Response('Bad request', { status: 400 });
    }

    const prefix = LOCALES[form.get('lang')] ?? '';
    const to = (page, query = '') => Response.redirect(`${env.SITE_URL}${prefix}/${page}/${query}`, 303);
    const fail = (reason) => to('contact', `?form=${reason}#form`);

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
    if (!f.firstName || !f.lastName || !f.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
      return fail('invalid');
    }

    const text = [
      `Nume: ${f.firstName} ${f.lastName}`,
      `Email: ${f.email}`,
      `Companie: ${f.company || '-'}`,
      `Limba site-ului: ${form.get('lang') || 'ro'}`,
      '',
      f.message,
    ].join('\n');

    const sent = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.TO_EMAIL],
        reply_to: f.email,
        subject: `Mesaj nou de pe site: ${f.firstName} ${f.lastName}`.replace(/[\r\n]+/g, ' '),
        text,
      }),
    }).catch(() => null);
    if (!sent || !sent.ok) return fail('error');

    return to('thanks');
  },
};
