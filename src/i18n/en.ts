// English copy. All text here is placeholder copy written for Logitrade;
// replace it with approved company copy before launch.
const en = {
  meta: {
    title: 'Logitrade | Distribution and logistics in Moldova',
    description:
      'Logitrade delivers, stores and promotes goods for producers and retailers across the Republic of Moldova.',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    careers: 'Careers',
    contact: 'Contact',
    cta: 'Get a quote',
    menu: 'Menu',
    language: 'Language',
  },
  home: {
    eyebrow: 'Distribution & logistics',
    title: 'Your goods on every shelf, on time.',
    lead: 'Logitrade brings producers’ goods to neighbourhood grocery shops and traditional markets across Moldova, with our own fleet, warehouses and field team.',
    primaryCta: 'Our services',
    secondaryCta: 'Talk to us',
    sceneLabel: 'A Logitrade delivery van pulling up in front of a village grocery shop.',
    servicesTitle: 'What we do',
    servicesLead: 'Three services that work together, or on their own.',
    statsTitle: 'Why Logitrade',
    // TODO: confirm real figures with Logitrade.
    statsLead: 'The network behind every delivery.',
    channelsTitle: 'Where we deliver',
    channelsLead: 'We specialise in traditional trade: the local shops and markets where people buy every day.',
    channels: [
      { name: 'Neighbourhood grocery shops', text: 'The local “alimentară” in every town and village, restocked by our agents every week.' },
      { name: 'Traditional markets', text: 'Stalls and shops in city and regional markets, supplied reliably and on schedule.' },
      { name: 'Small independent shops', text: 'Family-run stores that need small, frequent deliveries rather than pallets.' },
    ],
    ctaTitle: 'Ready to reach more points of sale?',
    ctaLead: 'Tell us about your products and we will propose a distribution plan.',
    ctaButton: 'Become a partner',
  },
  services: {
    title: 'Services',
    lead: 'From the warehouse to the shelf, we take care of every step.',
    items: [
      {
        id: 'distribution',
        name: 'Distribution',
        short: 'Next-day delivery to points of sale across the country.',
        body: 'Our own fleet delivers orders to neighbourhood grocery shops, traditional markets and small independent stores, usually the day after the order is placed.',
        points: ['Nationwide coverage', 'Next-day delivery', 'Route planning and tracking'],
      },
      {
        id: 'storage',
        name: 'Storage',
        short: 'Secure warehousing in regional hubs.',
        body: 'Regional warehouses keep your stock safe and close to your customers, with inventory control and fast order picking.',
        points: ['Regional warehouses', 'Inventory reporting', 'Pick, pack and dispatch'],
      },
      {
        id: 'merchandising',
        name: 'Merchandising',
        short: 'Your products visible and well placed in store.',
        body: 'Our field team visits stores to place, restock and promote your products, and reports back on shelf presence and promotions.',
        points: ['Shelf placement', 'In-store promotion', 'Visit reports'],
      },
    ],
    more: 'Learn more',
  },
  stats: [
    { value: '3', label: 'Regional hubs', text: 'Warehouses in the North, Centre and South keep delivery times short.' },
    { value: '25+', label: 'Sales agents', text: 'Our agents visit customers every week to take orders and support sales.' },
    { value: '50+', label: 'Vehicles', text: 'An in-house fleet delivers the day after an order is placed.' },
    { value: '5,000+', label: 'Points of sale', text: 'Neighbourhood grocery shops, market stalls and small independent stores.' },
  ],
  coverage: {
    title: 'Across the whole of Moldova',
    lead: 'Three regional hubs put every town and village within next-day reach.',
    hubs: [
      { city: 'Bălți', region: 'North hub' },
      { city: 'Chișinău', region: 'Central hub and head office' },
      { city: 'Cahul', region: 'South hub' },
    ],
    legendHub: 'Regional hub',
    legendTown: 'Delivery point',
    /** Delivery-point town names on the map, keyed by Romanian name. */
    towns: { 'Soroca': 'Soroca', 'Edineț': 'Edineț', 'Florești': 'Florești', 'Briceni': 'Briceni', 'Drochia': 'Drochia', 'Rîșcani': 'Rîșcani', 'Fălești': 'Fălești', 'Sîngerei': 'Sîngerei', 'Orhei': 'Orhei', 'Ungheni': 'Ungheni', 'Hîncești': 'Hîncești', 'Strășeni': 'Strășeni', 'Călărași': 'Călărași', 'Ialoveni': 'Ialoveni', 'Criuleni': 'Criuleni', 'Rezina': 'Rezina', 'Anenii Noi': 'Anenii Noi', 'Nisporeni': 'Nisporeni', 'Comrat': 'Comrat', 'Căușeni': 'Căușeni', 'Ștefan Vodă': 'Ștefan Vodă', 'Cimișlia': 'Cimișlia', 'Leova': 'Leova', 'Taraclia': 'Taraclia', 'Ceadîr-Lunga': 'Ceadîr-Lunga', 'Basarabeasca': 'Basarabeasca', 'Cantemir': 'Cantemir' } as Record<string, string>,
    regions: { north: 'North', centre: 'Centre', south: 'South' },
    hint: 'Hover over a hub to see where it delivers.',
  },
  about: {
    title: 'About Logitrade',
    lead: 'A distribution partner built around people, reliability and modern logistics.',
    story:
      'Logitrade helps local and international producers reach customers across the Republic of Moldova. We combine regional warehouses, our own delivery fleet and a field sales team so partners can focus on making great products.',
    missionTitle: 'Our mission',
    mission: 'To make it simple for every producer to reach every shelf in the country.',
    visionTitle: 'Our vision',
    vision: 'To be the most dependable distribution partner in the region.',
    valuesTitle: 'Our values',
    values: [
      { name: 'People first', text: 'Employees, customers and partners are at the centre of what we do.' },
      { name: 'Integrity', text: 'We work legally, ethically and transparently.' },
      { name: 'Quality', text: 'We hold ourselves to high standards and keep raising them.' },
      { name: 'Reliability', text: 'We keep our promises to customers and partners.' },
      { name: 'Innovation', text: 'We use modern tools to deliver more value with less waste.' },
    ],
  },
  careers: {
    title: 'Careers',
    lead: 'Join a growing team that keeps the country supplied.',
    // TODO: replace with real openings.
    intro: 'Send your CV with the position name in the subject line.',
    apply: 'Apply by email',
    jobs: [
      { title: 'Sales agent', place: 'Chișinău', text: 'Visit customers, take orders and grow sales in your area. Company car provided.' },
      { title: 'Accountant', place: 'Chișinău', text: 'Handle invoices, cash records and daily accounting checks.' },
      { title: 'Promoter', place: 'Regions', text: 'Present our partners’ products to stores and customers.' },
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Questions, partnerships or quotes, we are happy to help.',
    officeTitle: 'Office',
    emailTitle: 'Email',
    hours: 'Monday to Friday, 8:30 to 17:30',
    formTitle: 'Send us a message',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'Your message',
    send: 'Send message',
    formNote: 'We reply within one business day.',
    formErrors: {
      captcha: 'We could not confirm you are not a robot. Please try again.',
      invalid: 'Please fill in your name, a valid email address and your message.',
      error: 'Your message could not be sent. Please try again or write to office@logitrade.md.',
    },
    legalTitle: 'Company details',
    legalName: 'Legal name',
    idno: 'IDNO (fiscal code)',
    registered: 'Registered',
    registeredDate: '18 August 2026',
    licences: 'Licensed activities',
    licenceList: ['Wholesale of tobacco products', 'Customs brokerage'],
  },
  thanks: {
    title: 'Thank you!',
    lead: 'Your message has been received. We will get back to you within one business day.',
    back: 'Back to home',
  },
  privacy: {
    title: 'Privacy and cookies',
    // TODO: replace with text approved by Logitrade’s legal advisor.
    lead: 'How we handle your personal data on this website.',
    sections: [
      { heading: 'What we collect', text: 'When you use our contact form we receive your name, email address and message. We use this only to reply to you.' },
      { heading: 'How long we keep it', text: 'We keep messages only as long as needed to handle your request, and then delete them.' },
      { heading: 'Cookies', text: 'This site does not set tracking cookies. If analytics are added later, this page and a cookie banner will be updated.' },
      { heading: 'Your rights', text: 'You can ask us to see, correct or delete your data by writing to our office email.' },
    ],
  },
  footer: {
    tagline: 'Distribution, storage and merchandising across Moldova.',
    rights: 'All rights reserved.',
    privacy: 'Privacy and cookies',
  },
};

export default en;
export type Dictionary = typeof en;
