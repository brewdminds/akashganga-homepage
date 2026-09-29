/** Prefix a file in /public with the deploy base path (e.g. "/akashganga-homepage/" on GitHub Pages). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export type ImageAsset = {
  src?: string;
  alt: string;
  caption: string;
  ratio: "4/3" | "4/5" | "16/10";
};

/**
 * Temporary stock photos (Unsplash, free licence) so the approval mockup reads like the final site.
 * Swap each path for the client's real photography; remove `src` to fall back to the captioned placeholder.
 */
/** Optional hero background loop (muted MP4, 10–15s). Leave undefined to use the still photo. */
export const heroVideo: string | undefined = undefined;

export const images = {
  hero: asset("/images/hero-sand-plant.jpg"),
  aboutFactory: asset("/images/about-factory.jpg"),
  aboutLab: asset("/images/about-lab.jpg"),
  techRotor: asset("/images/tech-rotor.jpg"),
  newsFinesSeparator: asset("/images/news-fines-separator.jpg"),
  machineSand: asset("/images/machine-sand.jpg"),
  machineVsi: asset("/images/machine-vsi.jpg"),
  machineHighSilica: asset("/images/machine-high-silica.jpg"),
  machinePlasterSand: asset("/images/machine-plaster-sand.jpg"),
  machineDustSeparator: asset("/images/machine-dust-separator.jpg"),
  machineJawCone: asset("/images/machine-jaw-cone.jpg"),
  appConstructionStone: asset("/images/app-construction-stone.jpg"),
  appAbrasiveStone: asset("/images/app-abrasive-stone.jpg"),
  appIndustrialMinerals: asset("/images/app-industrial-minerals.jpg"),
  appRecycling: asset("/images/app-recycling.jpg"),
} as const;

export type Spec = { label: string; value: string };

export type Machine = {
  title: string;
  description: string;
  /** Rows for the card's spec table. Values in [brackets] are awaiting client data. */
  specs: Spec[];
  brochure: string;
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
    specs: [{ label: "Capacity", value: "5–200 TPH" }, { label: "Feed size", value: "[Feed size]" }, { label: "Motor power", value: "[kW]" }, { label: "Output", value: "IS 383 sand" }],
    brochure: "#brochure",
    image: { src: images.machineSand, alt: "Sand making machine", caption: "Photo: Sand Making Machine", ratio: "4/3" },
  },
  {
    title: "VSI Crusher",
    description: "High-speed rotor produces cubical aggregate and sand.",
    specs: [{ label: "Capacity", value: "30–250 TPH" }, { label: "Feed size", value: "0–40 mm" }, { label: "Motor power", value: "[kW]" }, { label: "Lubrication", value: "Oil, cooled & filtered" }],
    brochure: "#brochure",
    patented: true,
    image: { src: images.machineVsi, alt: "Patented VSI crusher", caption: "Photo: Patented VSI Crusher", ratio: "4/3" },
  },
  {
    title: "Special VSI for High Silica Minerals",
    description: "Crushes quartz, quartzite, glass and sodium feldspar with low wear cost.",
    specs: [{ label: "Capacity", value: "[Capacity]" }, { label: "Feed size", value: "[Feed size]" }, { label: "Motor power", value: "[kW]" }, { label: "Materials", value: "Quartz, glass, feldspar" }],
    brochure: "#brochure",
    image: { src: images.machineHighSilica, alt: "Special VSI for high silica minerals", caption: "Photo: Special VSI for high silica", ratio: "4/3" },
  },
  {
    title: "Plaster Sand Making Machine",
    description: "Fine, graded sand engineered for plastering applications.",
    specs: [{ label: "Capacity", value: "15–100 TPH" }, { label: "Feed size", value: "[Feed size]" }, { label: "Motor power", value: "[kW]" }, { label: "Output", value: "IS 1542 plaster sand" }],
    brochure: "#brochure",
    image: { src: images.machinePlasterSand, alt: "Plaster sand making machine", caption: "Photo: Plaster Sand Machine", ratio: "4/3" },
  },
  {
    title: "Dust Separating Unit",
    description: "A dry process that removes dust below 75 micron with no water.",
    specs: [{ label: "Capacity", value: "[Capacity]" }, { label: "Process", value: "Dry, no water" }, { label: "Removes", value: "Dust below 75 micron" }, { label: "Also used for", value: "Ore beneficiation" }],
    brochure: "#brochure",
    patented: true,
    image: { src: images.machineDustSeparator, alt: "Patented dust separating unit", caption: "Photo: Dust Separating Unit", ratio: "4/3" },
  },
  {
    title: "Jaw & Cone Crushers",
    description: "Primary and secondary crushing to prepare consistent VSI feed.",
    specs: [{ label: "Capacity", value: "[Capacity]" }, { label: "Feed size", value: "Up to 500 mm" }, { label: "Motor power", value: "[kW]" }, { label: "Output", value: "Below 40 mm" }],
    brochure: "#brochure",
    image: { src: images.machineJawCone, alt: "Jaw and cone crushers", caption: "Photo: Jaw & Cone Crushers", ratio: "4/3" },
  },
];

export const applications = [
  { title: "Construction stone", image: images.appConstructionStone, tags: ["Basalt", "Granite", "Gravel", "Sandstone", "Siltstone", "Garnet", "Limestone"] },
  { title: "Highly abrasive stone", image: images.appAbrasiveStone, tags: ["Quartz", "Quartz jasperoid", "High silica stone", "Dolomite", "Flint", "Gabbro"] },
  { title: "Industrial minerals", image: images.appIndustrialMinerals, tags: ["Glass silica", "Cement clinker", "Ceramics", "Iron ore", "Manganese ore", "Abrasives"] },
  { title: "Waste & recycling", image: images.appRecycling, tags: ["Construction debris", "Waste building material", "Concrete"] },
] as const;

export const processSteps = [
  { title: "Feed hopper", text: "Stone up to 500 mm is fed into the plant.", size: "Up to 500 mm" },
  { title: "Primary crushing", text: "Jaw and cone crushers reduce it below 40 mm.", size: "Below 40 mm" },
  { title: "VSI crushing", text: "The rotor throws stone against the anvils to make cubical particles.", size: "Cubical particles" },
  { title: "Screening", text: "The sand screen separates finished sand from oversize.", size: "Sand vs oversize" },
  { title: "Dust separation", text: "The dry separator removes dust below 75 micron.", size: "Below 75 micron removed" },
] as const;

export const serviceNetwork = [
  { state: "Maharashtra", cities: "Akola, Amravati, Mumbai, Nashik, Sangli" },
  { state: "Karnataka", cities: "Bengaluru" },
  { state: "Madhya Pradesh", cities: "Dhar" },
  { state: "Head office", cities: "Satara" },
] as const;

/** Map pins for the sales & service network (real city coordinates). */
export const networkCities = [
  { name: "Satara", state: "Head office", lat: 17.68, lon: 74.02, hq: true },
  { name: "Mumbai", state: "Maharashtra", lat: 19.08, lon: 72.88 },
  { name: "Nashik", state: "Maharashtra", lat: 19.99, lon: 73.79 },
  { name: "Sangli", state: "Maharashtra", lat: 16.85, lon: 74.58 },
  { name: "Akola", state: "Maharashtra", lat: 20.7, lon: 77.01 },
  { name: "Amravati", state: "Maharashtra", lat: 20.93, lon: 77.78 },
  { name: "Bengaluru", state: "Karnataka", lat: 12.97, lon: 77.59 },
  { name: "Dhar", state: "Madhya Pradesh", lat: 22.6, lon: 75.3 },
] as const;

export const networkStates = ["Maharashtra", "Karnataka", "Madhya Pradesh"] as const;
