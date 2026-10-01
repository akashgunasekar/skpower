export interface Application {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "Utensils" | "ChefHat" | "Building2" | "Factory" | "Hotel";
  mixingUseCases: string[];
  image: string;
}

export const APPLICATIONS: Application[] = [
  {
    id: "commercial-kitchens",
    title: "Commercial Kitchens",
    shortDescription:
      "High-output restaurants and professional culinary facilities requiring consistent food preparation mixing.",
    fullDescription:
      "In commercial restaurant kitchens, dependable mixing machinery ensures uniform food texture, consistent recipe reproduction, and significant reduction in manual labor during high-volume prep shifts.",
    iconName: "Utensils",
    mixingUseCases: [
      "Gravy, sauce, and curry paste preparation",
      "Semi-solid food blending and recipe agitation",
      "Consistent batch mixing for high-turnover dining",
    ],
    image: "/images/ind_hotel_restaurant.jpg",
  },
  {
    id: "food-preparation-units",
    title: "Food Preparation Units",
    shortDescription:
      "Centralized food preparation facilities and commissary kitchens preparing daily batch production.",
    fullDescription:
      "Central food preparation facilities rely on robust commercial mixing equipment to standardize daily outputs across multiple distribution outlets while maintaining strict food hygiene protocols.",
    iconName: "ChefHat",
    mixingUseCases: [
      "High-volume commissary ingredient blending",
      "Centralized batch seasoning and mixing",
      "Standardized multi-outlet recipe consistency",
    ],
    image: "/images/ind_industrial_central.jpg",
  },
  {
    id: "catering-operations",
    title: "Catering Operations",
    shortDescription:
      "Large-scale catering establishments, banquet commissaries, and event culinary facilities.",
    fullDescription:
      "Event and banquet caterers handle large volumes on tight turnaround times. Commercial mixers provide the necessary mechanical endurance to prepare large culinary batches reliably and without delays.",
    iconName: "Building2",
    mixingUseCases: [
      "Large-scale banquet batter and paste mixing",
      "Continuous preparation for bulk dining events",
      "High-capacity commercial recipe blending",
    ],
    image: "/images/ind_catering_banquet.jpg",
  },
  {
    id: "professional-food-production",
    title: "Professional Food Production",
    shortDescription:
      "Specialized food production units preparing culinary products and confectionery batches.",
    fullDescription:
      "For commercial culinary production requiring thorough mechanical blending—such as traditional sweets, confectionery bases, or savory food formulations—our mixers deliver reliable performance.",
    iconName: "Factory",
    mixingUseCases: [
      "Heated planetary mixing for confectionery bases",
      "Homogeneous emulsion of culinary mixtures",
      "Reliable mechanical agitation for food manufacturing",
    ],
    image: "/images/sk_power_cook_machinery.jpg",
  },
  {
    id: "hospitality-food-operations",
    title: "Hospitality Food Operations",
    shortDescription:
      "Hotels, resorts, clubs, and institutional food service facilities requiring dependable kitchen infrastructure.",
    fullDescription:
      "Hospitality kitchens operate around the clock with exacting culinary standards. Heavy-duty mixing equipment supports smooth daily back-of-house operations across multiple meal services.",
    iconName: "Hotel",
    mixingUseCases: [
      "Multi-meal kitchen batch preparation",
      "Breakfast and buffet bakery/batter agitation",
      "Quiet, reliable commercial kitchen operation",
    ],
    image: "/images/ind_institutions_hospitals.jpg",
  },
];
