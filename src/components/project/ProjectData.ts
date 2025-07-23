
export interface Project {
  title: string;
  description: string;
  image: string;
  skills: string[];
}

export interface Website {
  title: string;
  url: string;
  description: string;
  image: string;
  category: string;
}

export interface Analytics {
  title: string;
  url: string;
  description: string;
  image: string;
}

export interface WebDesign {
  title: string;
  url: string;
  description: string;
  image: string;
}

// Fisher-Yates shuffle algorithm for randomizing arrays
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const projectsData: Project[] = [
  {
    title: "Inventory System",
    description: "An inventory management system developed for the Provincial Government of Bataan to manage supplies and materials efficiently.",
    image: "/lovable-uploads/bb3a1a7e-9162-419c-86ae-6d2211d0db57.png",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "jQuery", "AJAX", "MVC"]
  },
  {
    title: "Procurement Management System",
    description: "A comprehensive system developed for the Provincial Government of Bataan to streamline their procurement processes, featuring real-time tracking and automated workflows.",
    image: "/lovable-uploads/93dcf755-fd38-456b-8bbd-5d453eee44b8.png",
    skills: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML5", "CSS", "REST APIs", "MVC"]
  },
  {
    title: "Human Resource Information System",
    description: "An enterprise-level HRIS with automated payroll, employee self-service portal, and comprehensive analytics for data-driven HR management.",
    image: "/lovable-uploads/bfbdb601-b731-46e9-b2ea-2424b419de0e.png",
    skills: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS", "Analytics Dashboard"]
  },
  {
    title: "Optical Clinic Management System",
    description: "A complete clinic management solution for Ideal Optical Clinic in Guam, featuring patient management, inventory, POS, and prescription tracking.",
    image: "/lovable-uploads/ac5575a5-9cc3-4d02-9ef9-d7963894019f.png",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "XAMPP"]
  },
  {
    title: "Document Tracking System",
    description: "A document management system for Southern Luzon State University to track and monitor document flow across departments.",
    image: "/lovable-uploads/d28b4119-b8d4-4abe-9324-2270e4853717.png",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML5", "CSS", "XAMPP"]
  }
];

const websitesData: Website[] = [
  {
    title: "SkySoles US",
    url: "https://skysoles.com",
    description: "Aviation footwear with focus on innovation",
    image: "/lovable-uploads/a92960e6-e5db-408d-b6f3-e1242ae12d5a.png",
    category: "E-commerce"
  },
  {
    title: "Stage4Tuning",
    url: "https://stage4tuning.com/",
    description: "Automotive tuning software and services platform",
    image: "/lovable-uploads/36a51783-661c-44db-811e-10c7ebdf5bac.png",
    category: "Automotive"
  },
  {
    title: "Exhali",
    url: "https://exhali.us/",
    description: "Premium athletic wear and lifestyle brand",
    image: "/lovable-uploads/b8e17588-aa73-495c-ac11-aef6c6c753b2.png",
    category: "E-commerce"
  },
  {
    title: "Precision Motorsports",
    url: "https://jkkg54w5fr.wpdns.site/",
    description: "European and exotic automotive specialists",
    image: "/lovable-uploads/18e3305f-224e-45bd-afee-fa5584928475.png",
    category: "Automotive"
  },
  {
    title: "ShopTake15",
    url: "https://shoptake15.com/",
    description: "E-commerce platform for wellness products",
    image: "/lovable-uploads/b75fedc5-e723-4ecd-a0af-b358b9afeee0.png",
    category: "E-commerce"
  },
  {
    title: "EASTWOODS Balanga",
    url: "https://epcst.edu.ph",
    description: "Official website of EASTWOODS Professional College of Science and Technology",
    image: "/lovable-uploads/18e3305f-224e-45bd-afee-fa5584928471.jpg",
    category: "Education"
  },
  {
    title: "Greenside Property Care",
    url: "https://www.greensidepropertycare.com/",
    description: "Professional lawn care and property maintenance services",
    image: "/lovable-uploads/ba4fc123-a300-4914-be3b-937cfa015d35.png",
    category: "Professional Services"
  },
  {
    title: "Meylor Chiropractic",
    url: "https://www.meylorchiro.com/",
    description: "Trusted chiropractic and acupuncture care in Lenexa, Kansas",
    image: "/lovable-uploads/937a7636-24b1-4046-934c-c3d8883e1da8.png",
    category: "Healthcare"
  },
  {
    title: "Birch Chiropractic & Rehab",
    url: "https://www.birchchirokc.com/",
    description: "Top chiropractor in North Kansas City offering comprehensive chiropractic and rehabilitation services",
    image: "/lovable-uploads/950e9487-409e-4e7d-98a4-db618559c6e0.png",
    category: "Healthcare"
  },
  {
    title: "On With Life Chiropractic",
    url: "https://www.onwithlifechiro.com/",
    description: "Top Lenexa chiropractor focused on helping you feel better and live better",
    image: "/lovable-uploads/230985ad-d7f9-405d-8b68-6f4a42b6fc7a.png",
    category: "Healthcare"
  },
  {
    title: "Stinson Chiropractic",
    url: "https://www.stinsonchiro.com/",
    description: "Your go-to chiropractor in Springdale for integrative health and comprehensive chiropractic services",
    image: "/lovable-uploads/57ca868b-4739-42b6-aca3-a8f854047a46.png",
    category: "Healthcare"
  },
  {
    title: "Healing STL Chiropractic",
    url: "https://www.healingstlchiropractic.com/",
    description: "Your partner in family health and wellness, delivering holistic wellness for every family member",
    image: "/lovable-uploads/a3024f84-25f8-4474-b2e1-6494fe0bf183.png",
    category: "Healthcare"
  },
  {
    title: "The Kingdom Chiropractic",
    url: "https://www.thekingdomchiro.com/",
    description: "Chiropractor in Fishers empowering families and community with specific chiropractic care that goes beyond the symptom",
    image: "/lovable-uploads/4290d841-def8-4618-96cc-77e7a491b8ee.png",
    category: "Healthcare"
  },
  {
    title: "Frazier Family Chiropractic",
    url: "https://www.frazierchiro.com/",
    description: "Experience neurologically focused chiropractic care and holistic family care at Frazier Chiropractic in Omaha",
    image: "/lovable-uploads/b5d91b4a-d044-4af9-89a2-b522d995ad0b.png",
    category: "Healthcare"
  },
  {
    title: "Laser Chiropractic",
    url: "https://www.laserchiro.com/",
    description: "Expert chiropractic care from a female chiropractor in Overland Park to help you reclaim your active, vibrant life naturally",
    image: "/lovable-uploads/4d9dac25-6016-4874-b6dd-cc7da4fe64ef.png",
    category: "Healthcare"
  },
  {
    title: "Infinite Healing Center",
    url: "https://www.infinitehealingcenter.org/",
    description: "Holistic healing in Northeast Wisconsin and beyond, offering complete wellness for mind, body, and soul in Green Bay",
    image: "/lovable-uploads/4a146e3b-8d67-434f-8059-eed7fdcc0193.png",
    category: "Healthcare"
  },
  {
    title: "Zamora Chiropractic",
    url: "https://www.zamorachiro.com/",
    description: "Altamonte Springs' trusted chiropractor focused on your health and wellness needs offering gentle, effective chiropractic care",
    image: "/lovable-uploads/197ca088-3e29-424b-b928-0186e600f48c.png",
    category: "Healthcare"
  }
];

const webDesignsData: WebDesign[] = [
  {
    title: "Studer Education",
    url: "https://www.figma.com/design/RnWUjyWBpMfux8KkodmtjB/StuderEducation?node-id=0-1&t=6jDbAn15nMFNdKzC-1",
    description: "Educational platform design empowering education leaders",
    image: "/lovable-uploads/31e6444e-29ad-4614-9c2a-82fc16be94b3.png"
  },
  {
    title: "Sophfeet Product",
    url: "https://www.figma.com/design/pmcuHZuhuznvX58lcAUR6W/Sophfeet-Product-Page?node-id=0-1&t=Oo3lbcneLxYFtZDt-1",
    description: "E-commerce product page design for faith-based grip socks",
    image: "/lovable-uploads/eb96b9ad-e874-4055-8e1f-5de8adbb84ee.png"
  },
  {
    title: "Birdcage Agency Website",
    url: "https://www.figma.com/proto/6zEHWTQUvGfee6D17Ebiqz/Agency-Website?node-id=20-2&p=f&t=EGdrPFk3CQvtWJNk-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    description: "Modern agency website design with professional layout and compelling visual elements",
    image: "/lovable-uploads/5515dc09-d118-4918-b93f-e1dd2b610d7b.png"
  }
];

const analyticsData: Analytics[] = [
  {
    title: "Industroquip Analytics Dashboard",
    url: "https://lookerstudio.google.com/reporting/35cb89af-8c32-4134-b852-821a9fcc09af",
    description: "Comprehensive sales and performance analytics dashboard",
    image: "/lovable-uploads/35efdf35-6565-4ec5-9c05-dc96a20a6693.png"
  }
];

// Export randomized arrays
export const projects = shuffleArray(projectsData);
export const websites = shuffleArray(websitesData);
export const webDesigns = shuffleArray(webDesignsData);
export const analytics = shuffleArray(analyticsData);
