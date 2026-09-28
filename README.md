# Akashganga Homepage

You are a senior UI/UX designer and front-end developer who has shipped corporate websites for industrial and engineering manufacturers (think the websites of Metso, Sandvik, Terex, Thyssenkrupp Industrial Solutions). Design and build a modern, professional, corporate HOMEPAGE ONLY for an Indian industrial machinery manufacturer. This homepage will be shown to the client for approval before the other pages are built, so it must look polished, trustworthy and premium.

## 1. The client
Akashganga Constructional Machines Pvt. Ltd. (brand name: "Akashganga", a registered trade mark), Satara, Maharashtra, India. Current site: artificialsand.com (outdated, 2014 design; we are rebuilding it).
They design and manufacture artificial sand making machines, patented VSI crushers, jaw crushers, cone crushers and dust separation equipment. They are a patented licensee and manufacturer of VSI crushers with DFP (Dust Free Product) technology.
Audience: quarry owners, stone crusher plant owners, construction contractors, infrastructure companies, mineral processing companies, and export buyers. Visitors want to understand the machines, trust the company's engineering, and send an enquiry.
Primary goal of the page: generate quote enquiries. Secondary goal: build credibility (patents, standards, factory, service network).

## 2. Brand and visual direction
- Background: WHITE (#FFFFFF) for the page body and almost all sections. This is a hard requirement. Do NOT use dark/navy section backgrounds anywhere except, optionally, the footer.
- Primary brand color: sky blue #53AEF7. Use it as the accent: buttons, icons, highlights, small graphic details, active states, thin lines.
- Because #53AEF7 has low contrast on white, use a darker blue #1669B0 for text links and primary button backgrounds (white text on it), and #53AEF7 for decorative accents.
- Text: dark slate #0F172A for headings, #475569 for body text.
- Alternate sections with a very light blue-grey tint (#F5F9FC) to separate sections. Keep it subtle.
- Borders: #E2E8F0, 1px.
- Feel: corporate, clean, engineered, confident. Generous white space, strong grid, crisp alignment. It should feel like a serious manufacturing company, not a startup or SaaS product.
- Typography: a professional sans-serif pair such as "Plus Jakarta Sans" or "Manrope" for headings and "Inter" for body. Headings are bold with tight letter-spacing; body text is 16–18px with 1.6 line-height. Use sentence case, and avoid all-caps paragraphs (small uppercase labels are fine sparingly).
- Corners: moderate radius (8–12px) on cards and images, fully rounded (pill) buttons OR 8px buttons. Pick one and use it consistently.
- Shadows: very soft and minimal. Prefer borders over heavy shadows.
- Icons: lucide-react, thin stroke, in #53AEF7 or #1669B0.
- Do not use emojis, heavy gradients, neon glows, glassmorphism or dark mode.

## 3. Images
Real photos will be supplied later, so use clean IMAGE PLACEHOLDERS for now:
- Each placeholder is a light grey-blue box (#EEF4F9) with a small centered image icon and a caption describing the photo that goes there (e.g. "Photo: VSI crusher installed at quarry site").
- Give each placeholder a fixed aspect ratio so the layout won't shift when real photos are added. Make them easy to swap by keeping all image paths in one config/data file.
- Use object-fit: cover styling so real photos drop in cleanly.

## 4. Motion
Keep motion subtle and corporate:
- Gentle fade-up on scroll for section content (short distance, ~0.5s, ease-out, trigger once).
- Number counters in the stats bar animate once when visible.
- Hover states: buttons darken slightly, cards lift by 2–4px with the border turning #53AEF7, and image zoom of about 1.03 inside cards.
- A sticky header that becomes white with a bottom border and a light shadow on scroll.
- Respect prefers-reduced-motion.
- Use Framer Motion. No parallax overload, no particle effects, no auto-playing heavy animation.

## 5. Page structure and content
Use this real content. Do NOT invent statistics, awards, client names or testimonials. Where information is missing, show a clearly marked placeholder in square brackets, e.g. [Year established].

### 5.1 Top bar (thin, #F5F9FC, desktop only)
Left: "Plot No. D-4, Old MIDC, Satara 415004, Maharashtra". Right: "Sales: +91 77090 06248", "response@artificialsand.com", LinkedIn and Facebook icons.

### 5.2 Header / navigation (sticky, white)
Logo on the left (placeholder box labelled "Akashganga logo" plus the text "Akashganga Constructional Machines"). Nav: Home, About, Machines (dropdown: Sand Making Machines, VSI Crushers, Special VSI for High Silica, Plaster Sand Machines, Dust Separating Unit, Jaw & Cone Crushers, Plants & Handling), Technology & Patents, Gallery, News, Contact. Right: primary button "Request a Quote". Mobile: hamburger opening a clean slide-in sheet.

### 5.3 Hero
Split layout. Left: small label "Patented VSI crusher technology"; headline "Engineering the future of manufactured sand"; subtext "Akashganga designs and manufactures patented VSI crushers and artificial sand making machines in Satara, producing cubical, IS 383 grade sand that replaces river sand."; buttons "Request a Quote" (primary) and "Explore Machines" (outline); below them a row of 3 trust badges with icons: "Patented technology", "IS 383 & IS 1542 compliant sand", "In-house design & manufacturing".
Right: a large image placeholder (4:3) captioned "Photo: flagship VSI crusher / sand plant", with a small floating white card overlapping its corner that reads "Capacity up to 250 TPH".

### 5.4 Stats bar
A white band with 4 stats separated by thin vertical dividers:
- 30–250 TPH: VSI crusher capacity range
- 5–200 TPH: Sand making machine range
- 6,000 m²: Manufacturing facility
- 12: Overhead cranes, 5 to 50 tonnes

### 5.5 About (white)
Left: an image placeholder (factory, 4:5) plus a smaller overlapping placeholder (testing lab). Right: label "About Akashganga"; heading "Designed, manufactured and tested under one roof"; paragraph: "Our design department is led by experienced engineers who follow the performance of every machine we supply. We maintain a complete history of each machine in the field, and that knowledge drives constant improvement in our designs."; then a 2x2 checklist: "Well-equipped testing laboratory", "Modern design office and ERP systems", "Training centre for operators", "Team of 6 field service engineers"; then a button "About the company".

### 5.6 Machines (tint background)
Label "Our machines"; heading "Machines for every stage of crushing"; short intro. Show a responsive grid of 6 product cards (3 columns desktop, 2 tablet, 1 mobile). Each card has an image placeholder (4:3), an optional "Patented" badge, a title, a one-line description, 2–3 key specs, and a "View details" link.
1. Sand Making Machine: converts crusher grit and fines into quality sand. Specs: 5–200 TPH, IS 383 sand.
2. VSI Crusher (Patented): high-speed rotor produces cubical aggregate and sand. Specs: 30–250 TPH, feed 0–40 mm, oil lubricated.
3. Special VSI for High Silica Minerals: crushes quartz, quartzite, glass and sodium feldspar with low wear cost. Specs: [Capacity].
4. Plaster Sand Making Machine: fine, graded sand for plastering. Specs: 15–100 TPH, IS 1542.
5. Dust Separating Unit (Patented): a dry process that removes dust below 75 micron with no water. Specs: dry process, also used for ore beneficiation.
6. Jaw & Cone Crushers: primary and secondary crushing to prepare VSI feed. Specs: feed up to 500 mm, output below 40 mm.
Below the grid: an outline button "View all machines".

### 5.7 Why Akashganga / Technology (white)
Heading "Why leading crusher operators choose Akashganga". Left: a large image placeholder (VSI rotor / oil lubrication system close-up). Right: 4 feature rows with icons:
- Oil lubrication system: "Our VSI crushers use oil lubrication with cooling and filtration, where most manufacturers use grease. Bearings run cooler, cleaner and last longer."
- 3.5% lower power cost: "The rotating assembly runs on a film of oil, reducing friction losses."
- Built-in safety interlocks: "The machine will not start if there is a fault, and the panel shows the operator what to fix."
- Easy maintenance: "Parts are designed to fit only one way, so your own operators can maintain the machine."

### 5.8 Sand manufacturing process (tint background)
Heading "From boulder to sand in five steps". A horizontal 5-step timeline on desktop (vertical on mobile), with numbered circles connected by a thin #53AEF7 line:
1 Feed hopper: stone up to 500 mm is fed into the plant.
2 Primary crushing: jaw and cone crushers reduce it below 40 mm.
3 VSI crushing: the rotor throws stone against the anvils to make cubical particles.
4 Screening: the sand screen separates finished sand from oversize.
5 Dust separation: the dry separator removes dust below 75 micron.

### 5.9 Applications (white)
Heading "Proven on every type of stone". 4 cards, each with an image placeholder and material tags (small pills):
- Construction stone: Basalt, Granite, Gravel, Sandstone, Siltstone, Garnet, Limestone
- Highly abrasive stone: Quartz, Quartz jasperoid, High silica stone, Dolomite, Flint, Gabbro
- Industrial minerals: Glass silica, Cement clinker, Ceramics, Iron ore, Manganese ore, Abrasives
- Waste & recycling: Construction debris, Waste building material, Concrete

### 5.10 Manufactured sand vs river sand (tint background)
A short 2-column comparison ("River sand" vs "Akashganga manufactured sand") with 4 rows: availability, consistency of grading, environmental impact, compliance with IS standards. Mark the row text as [Content to confirm with client] where needed. Include a small CTA "Download profitability report" (placeholder link).

### 5.11 Certifications & patents strip (white)
A row of 4–5 placeholder boxes labelled "Patent certificate", "Trade mark registration", "IEC certificate", "[Certification]", plus a link "View patents & certificates".

### 5.12 Clients (white)
Heading "Trusted by crusher operators across India". A logo row of 6 grey placeholder boxes labelled [Client logo]. Do not invent names. Leave space for 1 testimonial card marked [Client testimonial].

### 5.13 Sales network + latest news (tint background, 2 columns)
Left, "Sales & service network": a clean list of Maharashtra (Akola, Amravati, Mumbai, Nashik, Sangli), Karnataka (Bengaluru), Madhya Pradesh (Dhar), and Head office Satara. Optionally include a simple India map placeholder.
Right, "Latest news": 2 cards. (a) "New product: Dry fines separator for aggregates, sand and minerals" with a short summary: fine dust raises the water-cement ratio and weakens concrete, and this separator removes it without water. (b) "Notice of Annual General Meeting".

### 5.14 Enquiry / CTA section (white, contained card with a #53AEF7 accent)
Left: heading "Tell us about your project"; text "Share your stone type and required output. Our sales team will recommend the right machine and reply within 24 hours."; contact details: Sales +91 77090 06248, Service +91 77090 06284, Office +91 2162 247132 / 247133, response@artificialsand.com.
Right: form with Name*, Company, Phone*, Email, Machine of interest (select), Required capacity (TPH), Stone type, Message, and a submit button "Send Enquiry". Include validation and a success message. Use shadcn/ui form components.

### 5.15 Footer
Either white with a top border OR deep slate #0F172A (the only dark area allowed). 4 columns: company summary + address; Machines links; Company links (About, Technology & Patents, Profitability, Gallery, Careers, FAQs, Contact); contact + social. Bottom bar: "© 2026 Akashganga Constructional Machines Pvt. Ltd. All rights reserved." plus Privacy Policy.

### 5.16 Floating WhatsApp button
Bottom-right, linking to https://wa.me/917709006248, with an aria-label.

## 6. Technical requirements
- React + TypeScript + Tailwind CSS + shadcn/ui, with lucide-react icons and Framer Motion.
- Build reusable, cleanly named components (Header, Hero, StatsBar, AboutSection, MachineCard, MachinesSection, FeatureRow, ProcessTimeline, ApplicationCard, ComparisonTable, ClientsStrip, NewsCard, EnquiryForm, Footer).
- Keep all content (machines, stats, applications, contacts, image paths) in a typed data file (e.g. src/data/site.ts) so the other pages can reuse it and the content is easy to edit.
- Put the design tokens (colors, radius, fonts) in the Tailwind config / CSS variables.
- Fully responsive at 375px, 768px, 1024px and 1440px. Max content width about 1280px.
- Accessibility: semantic HTML, one H1, logical heading order, alt text on images, visible focus states, 4.5:1 text contrast, keyboard-accessible menu and form.
- SEO: page title "Akashganga Constructional Machines | VSI Crushers & Artificial Sand Making Machines", a meta description, Open Graph tags.
- Performance: lazy-load below-the-fold images, and avoid heavy libraries.

## 7. Quality bar
Before finishing, review the page as a senior designer would:
- Is the visual hierarchy clear within 5 seconds? Is "Request a Quote" always easy to find?
- Is spacing consistent (use an 8px spacing scale, 96–128px between sections on desktop)?
- Are all the section headings, labels and cards consistent in style?
- Does it look like a credible, established engineering company?
- Is the body background white everywhere except the tinted alternate sections?
Fix anything that fails these checks.

## Development

This project uses [Bun](https://bun.sh) for package management and running scripts.

```sh
git clone <this-repository-url>
cd akashganga-homepage
bun install
bun run dev
```

Other useful scripts:

```sh
bun run build     # production build
bun run preview   # preview the production build locally
bun run lint      # eslint
bun run format    # prettier --write
```
