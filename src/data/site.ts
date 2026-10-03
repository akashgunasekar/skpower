export const SITE_CONFIG = {
  name: "SK POWER COOK MACHINERY",
  shortName: "SK Power Cook",
  tagline: "Commercial Food Processing Machinery & Solutions",
  supportingLine: "Engineered Food Processing Machinery & Solutions for Professional Operations",
  description:
    "SK Power Cook Machinery provides commercial food processing solution machinery including Planetary Mixer Machine – Gas / Induction and Colino Mixer Machine – Gas / Induction for professional food preparation environments.",
  parentGroup: "Maxwell Group",
  parentGroupNote: "A Maxwell Group Enterprise",
  domain: "https://skpcm.com",

  contact: {
    address: "PKM Industrial Complex, Mel Ayanambakkam, Chennai – 600 095, Tamil Nadu, India",
    phone: "+91 75500 16607",
    phoneHref: "tel:+917550016607",
    email: "info@skpcm.com",
    whatsapp: "+91 75500 16607",
    whatsappHref:
      "https://wa.me/917550016607?text=Hello%20SK%20Power%20Cook%20Machinery%2C%20I%20would%20like%20to%20enquire%20about%20commercial%20food%20processing%20solution%20machinery.",
    businessHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
    responseTime: "Enquiry-driven response within 1 business day",
  },

  logos: {
    primary: "/brands/sk-powercook-original.png",
    vector: "/brands/sk-powercook-logo.svg",
    fallbackPng: "/brands/sk-powercook-logo.png",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Applications", href: "/applications" },
    { label: "Why SK Power Cook", href: "/why-us" },
    { label: "Contact", href: "/contact" },
  ],
};

export const GROUP_BRANDS = [
  {
    id: "vector-food-equipments",
    name: "VECTOR FOOD EQUIPMENTS",
    tagline: "Complete Commercial Kitchen Solutions",
    description:
      "Comprehensive commercial kitchen planning, custom SS 304 fabrication, frontline cooking equipment, cold storage, and technical maintenance.",
    logo: "/brands/vector-official-logo.png",
    isCurrentBrand: false,
    ctaText: "Visit Vector",
    url: "https://vectorfoodequipments.com",
    isExternal: true,
    badgeText: "Kitchen Solutions",
    badgeStyle: "bg-red-50 text-red-700 border-red-200",
    buttonStyle: "bg-slate-900 hover:bg-red-600 text-white border-slate-900 hover:border-red-600",
    accentHover: "hover:border-red-500 hover:shadow-red-500/10",
  },
  {
    id: "maxwell-induction",
    name: "MAXWELL INDUCTION",
    tagline: "Commercial Induction Technology",
    description:
      "High-efficiency commercial induction ranges, boiling kettles, wok ranges, and flameless commercial kitchen technology.",
    logo: "/brands/maxwell-induction-original.png",
    isCurrentBrand: false,
    ctaText: "Visit Maxwell Induction",
    url: "https://www.maxwellinduction.com/",
    isExternal: true,
    badgeText: "Induction Technology",
    badgeStyle: "bg-sky-50 text-sky-700 border-sky-200",
    buttonStyle: "bg-slate-900 hover:bg-sky-600 text-white border-slate-900 hover:border-sky-600",
    accentHover: "hover:border-sky-500 hover:shadow-sky-500/10",
  },
  {
    id: "sk-powercook",
    name: "SK POWER COOK MACHINERY",
    tagline: "Commercial Food Processing Machinery & Solutions",
    description:
      "Engineered commercial food processing solution machinery including Planetary Mixer Machine – Gas / Induction and Colino Mixer Machine – Gas / Induction for professional food operations.",
    logo: "/brands/sk-powercook-original.png",
    isCurrentBrand: true,
    ctaText: "Explore Machinery",
    url: "/products",
    isExternal: false,
    badgeText: "Food Processing Solutions",
    badgeStyle: "bg-orange-50 text-orange-700 border-orange-200",
    buttonStyle: "bg-slate-900 hover:bg-orange-600 text-white border-slate-900 hover:border-orange-600",
    accentHover: "hover:border-orange-500 hover:shadow-orange-500/10",
  },
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Commercial Focus",
    description: "Equipment developed specifically around professional food preparation and commercial kitchen workflow demands.",
  },
  {
    number: "02",
    title: "Practical Engineering",
    description: "Built with practical, robust mechanical principles suited for daily commercial operational environments.",
  },
  {
    number: "03",
    title: "Professional Support",
    description: "Enquiry-driven direct consultation to help clients identify the appropriate machine for their specific volume and recipe requirements.",
  },
  {
    number: "04",
    title: "Focused Product Range",
    description: "A deliberate, focused machinery catalog allows thorough quality discipline and dedicated component reliability.",
  },
  {
    number: "05",
    title: "Maxwell Group Ecosystem",
    description: "Backed by the technical heritage, shared engineering insights, and trusted commercial presence of Maxwell Group.",
  },
];

export const HOW_WE_WORK = [
  {
    step: "01",
    title: "Tell Us Your Requirement",
    description: "Share your facility profile, food preparation category, batch size goals, and operational workflow requirements.",
  },
  {
    step: "02",
    title: "Discuss the Right Machine",
    description: "Our technical specialists consult with your culinary or engineering team to recommend the appropriate mixer configuration.",
  },
  {
    step: "03",
    title: "Receive Product & Commercial Details",
    description: "Receive tailored commercial quotation, equipment dimensional data, utility line specs, and lead-time schedules.",
  },
  {
    step: "04",
    title: "Proceed with Your Requirement",
    description: "Finalize equipment procurement with transparent guidance, dispatch coordination, and dedicated group support.",
  },
];
