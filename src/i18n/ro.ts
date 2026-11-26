import type { Dictionary } from './en';

// Romanian placeholder copy. Have a native speaker review before launch.
const ro: Dictionary = {
  meta: {
    title: 'Logitrade | Distribuție și logistică în Moldova',
    description:
      'Logitrade livrează, depozitează și promovează mărfuri pentru producători și comercianți din toată Republica Moldova.',
  },
  nav: {
    home: 'Acasă',
    services: 'Servicii',
    about: 'Despre noi',
    careers: 'Cariere',
    contact: 'Contacte',
    cta: 'Cere o ofertă',
    menu: 'Meniu',
    language: 'Limba',
  },
  home: {
    eyebrow: 'Distribuție și logistică',
    title: 'Produsele tale pe fiecare raft, la timp.',
    lead: 'Logitrade aduce produsele producătorilor în alimentarele de cartier și piețele tradiționale din toată Moldova, cu flotă, depozite și echipă proprie.',
    primaryCta: 'Serviciile noastre',
    secondaryCta: 'Contactează-ne',
    sceneLabel: 'O dubă Logitrade oprește în fața unei alimentare.',
    servicesTitle: 'Ce facem',
    servicesLead: 'Trei servicii care funcționează împreună sau separat.',
    statsTitle: 'De ce Logitrade',
    statsLead: 'Rețeaua din spatele fiecărei livrări.',
    channelsTitle: 'Unde livrăm',
    channelsLead: 'Suntem specializați în comerțul tradițional: magazinele și piețele locale unde oamenii cumpără zilnic.',
    channels: [
      { name: 'Alimentare de cartier', text: 'Alimentara din fiecare oraș și sat, aprovizionată săptămânal de agenții noștri.' },
      { name: 'Piețe tradiționale', text: 'Tarabe și magazine din piețele orășenești și raionale, aprovizionate la timp.' },
      { name: 'Magazine mici independente', text: 'Magazine de familie care au nevoie de livrări mici și dese, nu de paleți.' },
    ],
    ctaTitle: 'Vrei să ajungi în mai multe puncte de vânzare?',
    ctaLead: 'Spune-ne despre produsele tale și îți propunem un plan de distribuție.',
    ctaButton: 'Devino partener',
  },
  services: {
    title: 'Servicii',
    lead: 'De la depozit până la raft, ne ocupăm de fiecare pas.',
    items: [
      {
        id: 'distribution',
        name: 'Distribuție',
        short: 'Livrare a doua zi în punctele de vânzare din toată țara.',
        body: 'Flota proprie livrează comenzile în alimentare de cartier, piețe tradiționale și magazine mici independente, de obicei a doua zi după comandă.',
        points: ['Acoperire națională', 'Livrare a doua zi', 'Planificarea și urmărirea rutelor'],
      },
      {
        id: 'storage',
        name: 'Depozitare',
        short: 'Depozitare sigură în centre regionale.',
        body: 'Depozitele regionale păstrează stocul în siguranță și aproape de clienți, cu control al inventarului și pregătire rapidă a comenzilor.',
        points: ['Depozite regionale', 'Rapoarte de inventar', 'Pregătire și expediere'],
      },
      {
        id: 'merchandising',
        name: 'Merchandising',
        short: 'Produsele tale vizibile și bine plasate în magazin.',
        body: 'Echipa de teren vizitează magazinele pentru a plasa, completa și promova produsele și raportează despre prezența la raft.',
        points: ['Plasare la raft', 'Promovare în magazin', 'Rapoarte de vizită'],
      },
    ],
    more: 'Află mai mult',
  },
  stats: [
    { value: '3', label: 'Centre regionale', text: 'Depozite în Nord, Centru și Sud pentru livrări rapide.' },
    { value: '25+', label: 'Agenți de vânzări', text: 'Agenții noștri vizitează clienții săptămânal.' },
    { value: '50+', label: 'Unități de transport', text: 'Flota proprie livrează a doua zi după comandă.' },
    { value: '5.000+', label: 'Puncte de vânzare', text: 'Alimentare de cartier, tarabe din piețe și magazine mici independente.' },
  ],
  coverage: {
    title: 'În toată Republica Moldova',
    lead: 'Trei centre regionale aduc fiecare oraș și sat la o zi distanță.',
    hubs: [
      { city: 'Bălți', region: 'Centrul de Nord' },
      { city: 'Chișinău', region: 'Centrul din Centru și oficiul central' },
      { city: 'Cahul', region: 'Centrul de Sud' },
    ],
    legendHub: 'Centru regional',
    legendTown: 'Punct de livrare',
    /** Delivery-point town names on the map, keyed by Romanian name. */
    towns: { 'Soroca': 'Soroca', 'Edineț': 'Edineț', 'Florești': 'Florești', 'Briceni': 'Briceni', 'Drochia': 'Drochia', 'Rîșcani': 'Rîșcani', 'Fălești': 'Fălești', 'Sîngerei': 'Sîngerei', 'Orhei': 'Orhei', 'Ungheni': 'Ungheni', 'Hîncești': 'Hîncești', 'Strășeni': 'Strășeni', 'Călărași': 'Călărași', 'Ialoveni': 'Ialoveni', 'Criuleni': 'Criuleni', 'Rezina': 'Rezina', 'Anenii Noi': 'Anenii Noi', 'Nisporeni': 'Nisporeni', 'Comrat': 'Comrat', 'Căușeni': 'Căușeni', 'Ștefan Vodă': 'Ștefan Vodă', 'Cimișlia': 'Cimișlia', 'Leova': 'Leova', 'Taraclia': 'Taraclia', 'Ceadîr-Lunga': 'Ceadîr-Lunga', 'Basarabeasca': 'Basarabeasca', 'Cantemir': 'Cantemir' } as Record<string, string>,
    regions: { north: 'Nord', centre: 'Centru', south: 'Sud' },
    hint: 'Treci cu mouse-ul peste un centru ca să vezi unde livrează.',
  },
  about: {
    title: 'Despre Logitrade',
    lead: 'Un partener de distribuție construit pe oameni, încredere și logistică modernă.',
    story:
      'Logitrade ajută producătorii locali și internaționali să ajungă la clienți din toată Republica Moldova. Combinăm depozite regionale, flotă proprie și o echipă de vânzări pe teren, ca partenerii să se poată concentra pe produse.',
    missionTitle: 'Misiunea noastră',
    mission: 'Să facem simplu pentru orice producător să ajungă pe orice raft din țară.',
    visionTitle: 'Viziunea noastră',
    vision: 'Să fim cel mai de încredere partener de distribuție din regiune.',
    valuesTitle: 'Valorile noastre',
    values: [
      { name: 'Oamenii pe primul loc', text: 'Angajații, clienții și partenerii sunt în centrul activității noastre.' },
      { name: 'Integritate', text: 'Lucrăm legal, etic și transparent.' },
      { name: 'Calitate', text: 'Ne stabilim standarde înalte și le ridicăm constant.' },
      { name: 'Seriozitate', text: 'Ne respectăm angajamentele față de clienți și parteneri.' },
      { name: 'Inovație', text: 'Folosim instrumente moderne pentru a oferi mai multă valoare.' },
    ],
  },
  careers: {
    title: 'Cariere',
    lead: 'Alătură-te unei echipe în creștere.',
    intro: 'Trimite CV-ul cu numele postului în subiect.',
    apply: 'Aplică prin email',
    jobs: [
      { title: 'Agent de vânzări', place: 'Chișinău', text: 'Vizitezi clienții, preiei comenzi și crești vânzările în zona ta. Automobil de serviciu.' },
      { title: 'Contabil', place: 'Chișinău', text: 'Evidența facturilor, a casei și verificări contabile zilnice.' },
      { title: 'Promotor', place: 'Raioane', text: 'Prezinți produsele partenerilor în magazine.' },
    ],
  },
  contact: {
    title: 'Contacte',
    lead: 'Întrebări, parteneriate sau oferte, te ajutăm cu plăcere.',
    officeTitle: 'Oficiu',
    phoneTitle: 'Telefon',
    emailTitle: 'Email',
    hours: 'Luni – Vineri, 8:30 – 17:30',
    formTitle: 'Trimite-ne un mesaj',
    firstName: 'Prenume',
    lastName: 'Nume',
    email: 'Email',
    company: 'Companie (opțional)',
    message: 'Mesajul tău',
    send: 'Trimite',
    formNote: 'Răspundem în cel mult o zi lucrătoare.',
  },
  thanks: {
    title: 'Mulțumim!',
    lead: 'Mesajul tău a fost primit. Revenim cu un răspuns în cel mult o zi lucrătoare.',
    back: 'Înapoi la pagina principală',
  },
  privacy: {
    title: 'Confidențialitate și cookie-uri',
    lead: 'Cum tratăm datele tale personale pe acest site.',
    sections: [
      { heading: 'Ce date colectăm', text: 'Când folosești formularul de contact primim numele, adresa de email și mesajul tău. Le folosim doar pentru a-ți răspunde.' },
      { heading: 'Cât timp le păstrăm', text: 'Păstrăm mesajele doar cât este necesar pentru a soluționa solicitarea, apoi le ștergem.' },
      { heading: 'Cookie-uri', text: 'Acest site nu folosește cookie-uri de urmărire. Dacă vom adăuga analiză, vom actualiza această pagină și vom afișa un banner.' },
      { heading: 'Drepturile tale', text: 'Poți cere accesul, corectarea sau ștergerea datelor scriind la adresa de email a oficiului.' },
    ],
  },
  footer: {
    tagline: 'Distribuție, depozitare și merchandising în toată Moldova.',
    rights: 'Toate drepturile rezervate.',
    privacy: 'Confidențialitate și cookie-uri',
  },
};

export default ro;
