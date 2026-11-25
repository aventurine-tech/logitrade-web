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
    lead: 'Logitrade connects producers with shops, fuel stations and retail chains across Moldova, with our own fleet, warehouses and field team.',
    primaryCta: 'Our services',
    secondaryCta: 'Talk to us',
    servicesTitle: 'What we do',
    servicesLead: 'Three services that work together, or on their own.',
    statsTitle: 'Why Logitrade',
    statsLead: 'Placeholder figures. Replace with Logitrade’s real numbers.',
    partnersTitle: 'Trusted by producers and retailers',
    partnersLead: 'Partner logos will appear here.',
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
        body: 'Our own fleet delivers orders to shops, kiosks, fuel stations, wholesale bases and retail chains, usually the day after the order is placed.',
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
    { value: '5,000+', label: 'Points of sale', text: 'Shops, kiosks, fuel stations, wholesale bases and retail chains.' },
  ],
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
    intro: 'Placeholder openings. Send your CV with the position name in the subject line.',
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
    phoneTitle: 'Phone',
    emailTitle: 'Email',
    hours: 'Monday to Friday, 8:30 to 17:30',
    formTitle: 'Send us a message',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'Your message',
    send: 'Send message',
    formNote: 'The form is not connected yet. It will be wired to email before launch.',
  },
  thanks: {
    title: 'Thank you!',
    lead: 'Your message has been received. We will get back to you within one business day.',
    back: 'Back to home',
  },
  privacy: {
    title: 'Privacy and cookies',
    lead: 'Placeholder policy. Replace with the text approved by Logitrade’s legal advisor.',
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
