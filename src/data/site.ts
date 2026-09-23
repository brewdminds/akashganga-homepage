export type ImageAsset = {
  src?: string;
  alt: string;
  caption: string;
  ratio: "4/3" | "4/5" | "16/10";
};

export type Machine = {
  title: string;
  description: string;
  specs: string[];
  patented?: boolean;
  image: ImageAsset;
};

export const contact = {
  address: "Plot No. D-4, Old MIDC, Satara 415004, Maharashtra",
  sales: "+91 77090 06248",
  service: "+91 77090 06284",
  office: "+91 2162 247132 / 247133",
  email: "response@artificialsand.com",
  whatsapp: "https://wa.me/917709006248",
};

export const navigation = [
  "Home",
  "About",
  "Machines",
  "Technology & Patents",
  "Gallery",
  "News",
  "Contact",
] as const;

export const machineMenu = [
  "Sand Making Machines",
  "VSI Crushers",
  "Special VSI for High Silica",
  "Plaster Sand Machines",
  "Dust Separating Unit",
  "Jaw & Cone Crushers",
  "Plants & Handling",
] as const;

export const stats = [
  { value: "30–250", suffix: " TPH", label: "VSI crusher capacity range" },
  { value: "5–200", suffix: " TPH", label: "Sand making machine range" },
  { value: "6,000", suffix: " m²", label: "Manufacturing facility" },
  { value: "12", suffix: "", label: "Overhead cranes, 5 to 50 tonnes" },
] as const;

export const machines: Machine[] = [
  {
    title: "Sand Making Machine",
    description: "Converts crusher grit and fines into quality sand.",
    specs: ["5–200 TPH", "IS 383 sand"],
    image: { alt: "Sand making machine", caption: "Photo: Sand Making Machine", ratio: "4/3" },
  },
  {
    title: "VSI Crusher",
    description: "High-speed rotor produces cubical aggregate and sand.",
    specs: ["30–250 TPH", "Feed 0–40 mm", "Oil lubricated"],
    patented: true,
    image: { alt: "Patented VSI crusher", caption: "Photo: Patented VSI Crusher", ratio: "4/3" },
  },
  {
    title: "Special VSI for High Silica Minerals",
    description: "Crushes quartz, quartzite, glass and sodium feldspar with low wear cost.",
    specs: ["[Capacity]"],
    image: { alt: "Special VSI for high silica minerals", caption: "Photo: Special VSI for high silica", ratio: "4/3" },
  },
  {
    title: "Plaster Sand Making Machine",
    description: "Fine, graded sand engineered for plastering applications.",
    specs: ["15–100 TPH", "IS 1542"],
    image: { alt: "Plaster sand making machine", caption: "Photo: Plaster Sand Machine", ratio: "4/3" },
  },
  {
    title: "Dust Separating Unit",
    description: "A dry process that removes dust below 75 micron with no water.",
    specs: ["Dry process", "Also used for ore beneficiation"],
    patented: true,
    image: { alt: "Patented dust separating unit", caption: "Photo: Dust Separating Unit", ratio: "4/3" },
  },
  {
    title: "Jaw & Cone Crushers",
    description: "Primary and secondary crushing to prepare consistent VSI feed.",
    specs: ["Feed up to 500 mm", "Output below 40 mm"],
    image: { alt: "Jaw and cone crushers", caption: "Photo: Jaw & Cone Crushers", ratio: "4/3" },
  },
];

export const applications = [
  { title: "Construction stone", tags: ["Basalt", "Granite", "Gravel", "Sandstone", "Siltstone", "Garnet", "Limestone"] },
  { title: "Highly abrasive stone", tags: ["Quartz", "Quartz jasperoid", "High silica stone", "Dolomite", "Flint", "Gabbro"] },
  { title: "Industrial minerals", tags: ["Glass silica", "Cement clinker", "Ceramics", "Iron ore", "Manganese ore", "Abrasives"] },
  { title: "Waste & recycling", tags: ["Construction debris", "Waste building material", "Concrete"] },
] as const;

export const processSteps = [
  { title: "Feed hopper", text: "Stone up to 500 mm is fed into the plant." },
  { title: "Primary crushing", text: "Jaw and cone crushers reduce it below 40 mm." },
  { title: "VSI crushing", text: "The rotor throws stone against the anvils to make cubical particles." },
  { title: "Screening", text: "The sand screen separates finished sand from oversize." },
  { title: "Dust separation", text: "The dry separator removes dust below 75 micron." },
] as const;

export const serviceNetwork = [
  { state: "Maharashtra", cities: "Akola, Amravati, Mumbai, Nashik, Sangli" },
  { state: "Karnataka", cities: "Bengaluru" },
  { state: "Madhya Pradesh", cities: "Dhar" },
  { state: "Head office", cities: "Satara" },
] as const;