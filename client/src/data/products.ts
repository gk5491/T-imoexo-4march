// Vactech images
import vactechSuction from "@/assets/products/vactech-suction-apparatus.jpg";
import vactechAutoclave from "@/assets/products/vactech-autoclave.jpg";
import vactechAnaesthesia from "@/assets/products/vactech-anaesthesia.jpg";
import vactechFogger from "@/assets/products/vactech-fogger.jpg";
import vactechLedLight from "@/assets/products/vactech-led-ot-light.jpg";

// Aastha Meditec images
import aasthaOT from "@/assets/products/aastha-operation-theatre.jpg";
import aasthaICU from "@/assets/products/aastha-icu-solutions.jpg";
import aasthaIVF from "@/assets/products/aastha-ivf-lab.jpg";
import aasthaNICU from "@/assets/products/aastha-nicu.jpg";
import aasthaCathLab from "@/assets/products/aastha-cath-lab.jpg";
import aasthaInterior from "@/assets/products/aastha-interior.jpg";
import aasthaSterileDoors from "@/assets/products/aastha-sterile-doors.jpg";
import aasthaBedHead from "@/assets/products/aastha-bed-head-panel.jpg";

// G-Aim images
import gaimInstantCoffee from "@/assets/products/gaim-instant-coffee.jpg";
import gaimFilterCoffee from "@/assets/products/gaim-filter-coffee.jpg";

// Farm Growers images
import farmGranola from "@/assets/products/farm-granola-bar.jpg";
import farmCrackers from "@/assets/products/farm-millet-crackers.jpg";
import farmJowarPuff from "@/assets/products/farm-jowar-puff.jpg";
import farmCookies from "@/assets/products/farm-millet-cookies.jpg";

// Success Plus images
import successMachine150 from "@/assets/products/success-machine-150ton.jpg";
import successMachineHaitan from "@/assets/products/success-machine-haitan.jpg";
import successProducts from "@/assets/products/success-plastic-products.jpg";

// HOTSHOT images
import hotshotProducts from "@/assets/products/hotshot-products.jpg";

// Logos
import vactechLogo from "@/assets/logos/vactech-logo.jpg";
import aasthaLogo from "@/assets/logos/aastha-logo.jpg";
import gaimLogo from "@/assets/logos/gaim-logo.jpg";
import farmGrowersLogo from "@/assets/logos/farm-growers-logo.jpg";
import successPlusLogo from "@/assets/logos/success-plus-logo.jpg";
import hotshotLogo from "@/assets/logos/hotshot-logo.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  variants?: string[];
}

export interface Company {
  id: string;
  name: string;
  tagline: string;
  started: string;
  overview: string;
  sector: string;
  color: string;
  logo: string;
  products: Product[];
}

export const companies: Company[] = [
  {
    id: "vactech",
    name: "Vactech",
    tagline: "Advanced Medical & Industrial Equipment Solutions",
    started: "1999",
    overview:
      "Vactech Surgical Equipment describes itself as an Indian manufacturer and exporter focused on hospital equipment. The company says it began in 1999 with a core objective of building noiseless suction apparatus systems. Its current range covers suction units, OT lights, anesthesia apparatus, autoclaves, and aerosol disinfection products for clinical use.",
    sector: "Medical Equipment",
    color: "hsl(217 71% 45%)",
    logo: vactechLogo,
    products: [
      {
        id: "vt-001",
        name: "Suction Apparatus",
        description: "High-performance medical suction apparatus for hospitals and clinics. Designed for reliable continuous and intermittent suction with adjustable vacuum pressure.",
        image: vactechSuction,
        category: "Medical",
      },
      {
        id: "vt-002",
        name: "Autoclave",
        description: "Hospital-grade steam sterilizer autoclave for surgical instruments and medical supplies. Stainless steel chamber with digital controls and safety interlocks.",
        image: vactechAutoclave,
        category: "Sterilization",
      },
      {
        id: "vt-003",
        name: "Anaesthesia Apparatus",
        description: "Advanced anaesthesia workstation with integrated ventilator, multi-parameter monitoring, and precision vaporizer for safe patient sedation.",
        image: vactechAnaesthesia,
        category: "Medical",
      },
      {
        id: "vt-004",
        name: "Fogger",
        description: "Industrial-grade disinfection fogger machine for large area sanitization. Suitable for hospitals, factories, and public spaces with adjustable mist output.",
        image: vactechFogger,
        category: "Sanitization",
      },
      {
        id: "vt-005",
        name: "LED Operation Room Light",
        description: "High-intensity LED surgical ceiling light with shadow-free illumination, adjustable color temperature, and long operational life for modern operating theatres.",
        image: vactechLedLight,
        category: "OT Equipment",
      },
    ],
  },
  // {
  //   id: "aastha-meditec",
  //   name: "Aastha Meditec",
  //   tagline: "Complete Healthcare Infrastructure & Solutions",
  //   started: "1988 (facility roots)",
  //   overview:
  //     "Aastha Meditec positions itself as a turnkey healthcare infrastructure partner for modular operating theatres and critical care spaces. On its timeline, the company traces operations back to a facility started in 1988, followed by successive manufacturing expansions. It highlights cleanroom engineering, contamination control, and end-to-end delivery aligned to modern hospital standards.",
  //   sector: "Healthcare Infrastructure",
  //   color: "hsl(180 55% 38%)",
  //   logo: aasthaLogo,
  //   products: [
  //     {
  //       id: "am-001",
  //       name: "Operation Theatre",
  //       description: "Turnkey operation theatre setup with modular OT panels, laminar airflow systems, surgical lights, and pendant systems for world-class surgical environments.",
  //       image: aasthaOT,
  //       category: "OT Solutions",
  //     },
  //     {
  //       id: "am-002",
  //       name: "ICU Solutions",
  //       description: "Complete ICU setup with patient monitoring systems, ICU beds, ventilators, infusion pumps, and centralized monitoring for critical care units.",
  //       image: aasthaICU,
  //       category: "Critical Care",
  //     },
  //     {
  //       id: "am-003",
  //       name: "IVF Lab Setup",
  //       description: "State-of-the-art IVF laboratory design and equipment including incubators, microscopes, laminar flow hoods, and controlled environment systems.",
  //       image: aasthaIVF,
  //       category: "Lab Solutions",
  //     },
  //     {
  //       id: "am-004",
  //       name: "NICU Solutions",
  //       description: "Neonatal Intensive Care Unit setup with infant warmers, phototherapy units, neonatal ventilators, and monitoring systems for newborn care.",
  //       image: aasthaNICU,
  //       category: "Neonatal Care",
  //     },
  //     {
  //       id: "am-005",
  //       name: "Cath Labs Solutions",
  //       description: "Cardiac catheterization laboratory design and equipment for interventional cardiology procedures with advanced imaging and hemodynamic monitoring.",
  //       image: aasthaCathLab,
  //       category: "Cardiology",
  //     },
  //     {
  //       id: "am-006",
  //       name: "Interior Architecture",
  //       description: "Specialized hospital interior architecture and design services creating functional, hygienic, and aesthetically pleasing healthcare environments.",
  //       image: aasthaInterior,
  //       category: "Architecture",
  //     },
  //     {
  //       id: "am-007",
  //       name: "Sterile Doors",
  //       description: "Hermetically sealed sterile doors for operation theatres, clean rooms, and controlled environments with automatic and manual configurations.",
  //       image: aasthaSterileDoors,
  //       category: "Infrastructure",
  //     },
  //     {
  //       id: "am-008",
  //       name: "Bed Head Panel",
  //       description: "Wall-mounted bed head panel units with integrated medical gas outlets, electrical sockets, nurse call systems, and reading lights for patient rooms and ICUs.",
  //       image: aasthaBedHead,
  //       category: "Infrastructure",
  //     },
  //   ],
  // },
  {
    id: "g-aim",
    name: "Premium Coffee",
    tagline: "Premium Coffee - From Bean to Cup",
    started: "2024",
    overview:
      "G-Aim Internationals presents itself as an export-focused coffee company based in Pune with sourcing links to Indian coffee-growing regions. Its profile emphasizes direct farmer relationships, quality checks from grading to packaging, and traceable supply. Public business listings for the same brand report establishment in 2024 with a focus on global coffee buyers.",
    sector: "Coffee & Beverages",
    color: "hsl(30 60% 30%)",
    logo: gaimLogo,
    products: [
      {
        id: "ga-001",
        name: "Premium Instant Coffee",
        description: "Rich, aromatic instant coffee made from carefully selected Arabica and Robusta beans. Freeze-dried for maximum flavor retention and quick dissolving convenience.",
        image: gaimInstantCoffee,
        category: "Instant Coffee",
      },
      {
        id: "ga-002",
        name: "Filter Coffee",
        description: "Authentic South Indian filter coffee powder crafted from premium plantation beans. Perfectly roasted and ground for a bold, smooth decoction with traditional flavor.",
        image: gaimFilterCoffee,
        category: "Filter Coffee",
      },
    ],
  },
  {
    id: "farm-growers",
    name: "Farm Growers",
    tagline: "Healthy Millet-Based Snacks & Foods",
    started: "2020 (Pasmo Global Trade LLP)",
    overview:
      "Farm Growers is presented as a seed-to-snack initiative by Pasmo Global Trade LLP and associated with Booster Plant Genetics. The brand narrative focuses on millet-first nutrition, baked-not-fried snacks, and ingredient quality from the seed stage onward. Its model emphasizes direct farmer collaboration, cleaner processing practices, and healthier everyday snacking.",
    sector: "Health Foods",
    color: "hsl(120 50% 35%)",
    logo: farmGrowersLogo,
    products: [
      {
        id: "fg-001",
        name: "Millet Granola Bar",
        description: "Nutritious millet-based granola bars packed with wholesome goodness. Made with natural ingredients for a healthy on-the-go snack.",
        image: farmGranola,
        category: "Granola Bars",
        variants: ["Cranberry", "Orange", "Fruit n Nut"],
      },
      {
        id: "fg-002",
        name: "Millet Crackers",
        description: "Crunchy millet crackers baked to perfection. A guilt-free savory snack with bold flavors and the nutritional benefits of millets.",
        image: farmCrackers,
        category: "Crackers",
        variants: ["Peri Peri", "Cheese", "Swadesh Masala"],
      },
      {
        id: "fg-003",
        name: "Jowar Puff",
        description: "Light and crispy jowar (sorghum) puffs that are naturally gluten-free. A healthy alternative to regular chips with exciting flavors.",
        image: farmJowarPuff,
        category: "Puffs",
        variants: ["Peri Peri", "Cheese", "Swadesh Masala"],
      },
      {
        id: "fg-004",
        name: "Millet Cookies",
        description: "Wholesome cookies made with ragi and other millet flours. Deliciously baked with natural ingredients for a healthier treat.",
        image: farmCookies,
        category: "Cookies",
        variants: ["Ragi Choco", "Orange"],
      },
    ],
  },
  {
    id: "success-plus",
    name: "Success Plus",
    tagline: "Precision Plastic Injection Molding & Manufacturing",
    started: "Not publicly listed",
    overview:
      "Success Plus is positioned as a precision plastic injection molding partner serving industrial and commercial product requirements. The portfolio highlights production capability across multiple machine tonnage classes and custom molded output. Its offering is aimed at repeatable, quality-focused manufacturing for scaled component supply.",
    sector: "Manufacturing",
    color: "hsl(0 70% 45%)",
    logo: successPlusLogo,
    products: [
    
      {
        id: "sp-005",
        name: "Injection Molded Products",
        description: "Wide range of custom injection molded plastic products including industrial components, consumer goods, automotive parts, and precision-engineered plastic solutions.",
        image: successProducts,
        category: "Our Products",
      },
    ],
  },
  {
    id: "hotshot",
    name: "HOTSHOT",
    tagline: "Sports Equipment & Accessories",
    started: "Not publicly listed",
    overview:
      "HOTSHOT is presented as a cricket-focused sports equipment brand covering bats, protection gear, gloves, footwear, and accessories. The catalog is structured around match-day performance, player safety, and practical kit completeness across training and competition. Its product mix targets both amateur and professional cricket users.",
    sector: "Sports & Fitness",
    color: "hsl(0 80% 48%)",
    logo: hotshotLogo,
    products: [
      {
        id: "hs-001",
        name: "English Willow Cricket Bat",
        description: "Premium Grade 1 English Willow cricket bat, hand-crafted for optimal balance and powerful stroke play. Features a large sweet spot and professional-grade handle.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-002",
        name: "Professional Batting Pads",
        description: "Ultra-lightweight professional batting pads with high-density foam for maximum protection and comfort during long innings.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-003",
        name: "Leather Cricket Ball",
        description: "Four-piece premium alum-tanned leather cricket ball. Hand-stitched for superior shape retention and pronounced seam.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-004",
        name: "Batting Gloves",
        description: "Professional level batting gloves with multi-flex finger points and high-quality leather palms for excellent grip and flexibility.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-005",
        name: "Cricket Helmet",
        description: "Advanced safety cricket helmet with high-impact resistant shell and adjustable steel grille for maximum face protection.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-006",
        name: "Thigh Guard Set",
        description: "Dual-layer protection thigh guard set with ergonomic design for unrestricted movement and superior impact absorption.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-007",
        name: "Duffle Cricket Bag",
        description: "Spacious duffle-style cricket bag with multiple compartments for all your gear, including dedicated bat pockets and shoe compartment.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-008",
        name: "Wicket Keeping Gloves",
        description: "Premium leather wicket keeping gloves with large catching area and high-grip rubber palms for superior performance.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-009",
        name: "Cricket Stumps Set",
        description: "Full-size wooden cricket stumps set with bails, made from high-quality treated wood for durability.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-010",
        name: "Abdominal Guard",
        description: "High-impact resistant abdominal guard with padded edges for maximum protection and comfort.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-011",
        name: "Cricket Shoes",
        description: "Professional cricket shoes with metal spikes for excellent traction on turf and cushioned midsole for all-day comfort.",
        image: hotshotProducts,
        category: "Cricket",
      },
      {
        id: "hs-012",
        name: "Arm Guard",
        description: "Lightweight and protective arm guard with adjustable straps for a secure fit and reliable protection against fast bowling.",
        image: hotshotProducts,
        category: "Cricket",
      },
    ],
  },
];

