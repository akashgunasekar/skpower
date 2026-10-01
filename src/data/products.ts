export interface ProductSpecification {
  label: string;
  value: string;
  isConfirmed: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  keyHighlights: string[];
  applications: string[];
  operationalBenefits: {
    title: string;
    description: string;
  }[];
  specifications: ProductSpecification[];
  seoTitle: string;
  seoDescription: string;
  heroBadge: string;
  schematicType: "planetary" | "colino";
}

export const PRODUCTS: Product[] = [
  {
    id: "planetary-mixer-machine-gas",
    slug: "planetary-mixer-machine-gas",
    name: "Planetary Mixer Machine – Gas",
    tagline: "Commercial Mixing Machinery with Integrated Thermal Capabilities",
    shortDescription:
      "A professional mixing machine designed for commercial food preparation applications requiring thorough planetary mixing motion and integrated heating capability.",
    fullDescription: [
      "The Planetary Mixer Machine – Gas is engineered for commercial food preparation environments requiring both mechanical mixing action and thermal processing. Its planetary mixing mechanism utilizes an offset rotating tool that orbits within the vessel, ensuring comprehensive boundary coverage and uniform ingredient blending.",
      "Designed for professional culinary kitchens, central catering production, and commercial food preparation units, this machine supports demanding batch preparations where consistent texture, efficient thermal transfer, and dependable mechanical operation are critical.",
      "Built with commercial-grade engineering principles, the unit provides commercial kitchens with a reliable, heavy-duty alternative to manual mixing and heating procedures, streamlining preparation time while maintaining repeatable recipe standards.",
    ],
    keyHighlights: [
      "Planetary mixing motion delivering thorough boundary-to-center ingredient agitation",
      "Integrated gas heating framework suited for thermal cooking and mixing processes",
      "Heavy-gauge commercial construction built for continuous food preparation workflows",
      "Ergonomically planned vessel handling and stable base architecture for professional kitchen safety",
      "Tailored for high-demand commercial kitchens, catering hubs, and centralized commissaries",
      "Supplied on an enquiry-driven basis with dedicated technical guidance from Maxwell Group",
    ],
    applications: [
      "Commercial Kitchens & Restaurants",
      "Centralized Food Preparation Units",
      "Industrial & Institutional Catering",
      "Large-Scale Banquet Production",
      "Traditional Confectionery & Sweet Preparation",
    ],
    operationalBenefits: [
      {
        title: "Uniform Homogeneous Blending",
        description:
          "Planetary orbit ensures the mixing arm reaches every section of the mixing bowl, eliminating unmixed pockets.",
      },
      {
        title: "Thermal Mixing Integration",
        description:
          "Gas-fired thermal system enables concurrent heating and continuous agitation for recipes requiring active temperature management.",
      },
      {
        title: "Commercial Operational Durability",
        description:
          "Heavy-duty mechanical drive and robust frame engineered to endure continuous daily commercial preparation shifts.",
      },
      {
        title: "Enquiry-Driven Sizing Guidance",
        description:
          "Our engineering team coordinates with your production volume to recommend the appropriate model configuration.",
      },
    ],
    specifications: [
      { label: "Machine Category", value: "Commercial Planetary Mixer", isConfirmed: true },
      { label: "Heating Mechanism", value: "Gas Heated / Integrated Burner System", isConfirmed: true },
      { label: "Operation Type", value: "Motorized Planetary Agitation", isConfirmed: true },
      { label: "Application Profile", value: "Commercial Food Preparation & Culinary Mixing", isConfirmed: true },
      { label: "Operating Environment", value: "Professional Commercial Kitchens & Central Production", isConfirmed: true },
      { label: "Supply Model", value: "Commercial B2B Enquiry & Technical Consultation", isConfirmed: true },
      { label: "Batch Capacity", value: "Available on direct technical consultation", isConfirmed: false },
      { label: "Motor & Power Rating", value: "Provided upon application specification", isConfirmed: false },
      { label: "Dimensions & Footprint", value: "Supplied with project layout drawing", isConfirmed: false },
    ],
    seoTitle: "Planetary Mixer Machine Gas | SK Power Cook Machinery",
    seoDescription:
      "Planetary Mixer Machine – Gas by SK Power Cook Machinery. Commercial mixing equipment with integrated heating for professional food preparation environments.",
    heroBadge: "Thermal Mixing Equipment",
    schematicType: "planetary",
  },
  {
    id: "colino-mixer-machine",
    slug: "colino-mixer-machine",
    name: "Colino Mixer Machine",
    tagline: "Commercial Mixing Machinery for Professional Food Operations",
    shortDescription:
      "A commercial mixing machine designed for professional food preparation environments, offering reliable mechanical agitation for commercial culinary operations.",
    fullDescription: [
      "The Colino Mixer Machine is a dedicated commercial food preparation machine developed for professional culinary facilities, catering commissaries, and commercial food production operations. It provides reliable, consistent mechanical agitation designed to simplify high-volume preparation tasks.",
      "Engineered with a focus on practical durability and straightforward operation, the Colino Mixer delivers steady performance across various commercial food preparation routines, helping kitchen teams maintain uniform recipe standards and reduce labor-intensive manual work.",
      "As part of the SK Power Cook machinery lineup under Maxwell Group, each unit is manufactured to robust commercial benchmarks and supported by knowledgeable technical specialists who understand commercial kitchen demands.",
    ],
    keyHighlights: [
      "Robust commercial mixing system engineered for steady food preparation routines",
      "Designed for reliable day-to-day commercial kitchen and catering operation",
      "Practical, hygienic design facilitating easy access, operation, and sanitation",
      "Stable mechanical foundation engineered to withstand high-volume batch processing",
      "Direct technical consultation to align machine configuration with kitchen requirements",
      "Backed by the trusted engineering network and after-sales support of Maxwell Group",
    ],
    applications: [
      "Commercial Kitchens & Food Service",
      "Food Preparation & Processing Units",
      "Catering Commissaries & Bulk Kitchens",
      "Hospitality & Institutional Food Service",
      "Bakery & Semi-Solid Food Operations",
    ],
    operationalBenefits: [
      {
        title: "Consistent Batch Quality",
        description:
          "Eliminates variations common in manual mixing, ensuring uniform density and consistency across every production batch.",
      },
      {
        title: "Labor Efficiency",
        description:
          "Significantly reduces manual labor and cycle times, allowing staff to focus on high-value culinary tasks.",
      },
      {
        title: "Sanitary & Practical Build",
        description:
          "Constructed with food-contact surfaces and accessible mechanical areas designed for straightforward sanitization.",
      },
      {
        title: "Dedicated B2B Support",
        description:
          "Comprehensive consultation on electrical requirements, facility placement, and ongoing maintenance guidance.",
      },
    ],
    specifications: [
      { label: "Machine Category", value: "Commercial Food Mixer", isConfirmed: true },
      { label: "Agitation Mechanism", value: "Motorized Commercial Mixing Assembly", isConfirmed: true },
      { label: "Application Profile", value: "Professional Food Preparation & Culinary Mixing", isConfirmed: true },
      { label: "Operating Environment", value: "Commercial Kitchens & Catering Units", isConfirmed: true },
      { label: "Supply Model", value: "Commercial B2B Enquiry & Technical Consultation", isConfirmed: true },
      { label: "Batch Capacity", value: "Available on direct technical consultation", isConfirmed: false },
      { label: "Electrical Specifications", value: "Provided upon application specification", isConfirmed: false },
      { label: "Overall Dimensions", value: "Supplied with project layout drawing", isConfirmed: false },
    ],
    seoTitle: "Colino Mixer Machine | SK Power Cook Machinery",
    seoDescription:
      "Colino Mixer Machine by SK Power Cook Machinery. Commercial mixing machine designed for professional food preparation environments and commercial kitchens.",
    heroBadge: "Commercial Mixing Machinery",
    schematicType: "colino",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
