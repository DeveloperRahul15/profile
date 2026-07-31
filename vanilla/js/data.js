/** Portfolio content — single source of truth */

export const site = {
  name: "Rahul Choubey",
  title: "Senior Shopify Developer",
  tagline: "Building high-performance Shopify storefronts for international brands.",
  email: "rahulchoubey.codes@gmail.com",
  phone: "+91 97705 76062",
  linkedin: "https://www.linkedin.com/in/rahul-choubey-b88128389",
  github: "https://github.com/rahulchoubey",
  location: "Indore, India",
  yearsExperience: "5 Years 9 Months",
  projectsCount: "25+",
  launchesCount: "20+",
  resume: "assets/resume/Rahul-Choubey-Resume.pdf",
  whatsapp: "https://wa.me/919770576062",
  calendly: "#contact",
  availability: "Available for remote contracts & freelance projects",
  storesDelivered: "25+",
  featuresBuilt: "120+",
  clientSatisfaction: "98%",
};

export const featuredMetrics = [
  { value: "5 Years 9 Months", label: "Experience", static: true },
  { value: "25+", label: "Stores Delivered" },
  { value: "120+", label: "Features Built" },
  { value: "98%", label: "Client Satisfaction" },
];

export const heroTechIcons = [
  { label: "Shopify", x: 8, y: 18 },
  { label: "Liquid", x: 88, y: 22 },
  { label: "GraphQL", x: 12, y: 72 },
  { label: "JavaScript", x: 82, y: 68 },
  { label: "Git", x: 72, y: 12 },
  { label: "React", x: 22, y: 48 },
];

export const whyHire = [
  { title: "5 Years 9 Months Experience", desc: "Deep Shopify expertise across enterprise and international D2C brands." },
  { title: "Shopify Plus Expert", desc: "Plus storefronts, checkout customization, and advanced cart logic." },
  { title: "Performance Optimization", desc: "Core Web Vitals tuning and measurable speed improvements." },
  { title: "Clean Code", desc: "Maintainable Liquid, semantic HTML, and documented theme architecture." },
  { title: "Reusable Components", desc: "Schema-driven sections and modular snippets for merchant flexibility." },
  { title: "CRO Focus", desc: "Conversion-first PDP layouts, filtering, and checkout UX." },
  { title: "Accessibility", desc: "WCAG-aware markup, keyboard navigation, and semantic structure." },
  { title: "Responsive Design", desc: "Mobile-first storefronts tested across devices and breakpoints." },
  { title: "Fast Delivery", desc: "Efficient workflows with AI-assisted development and clear communication." },
];

export const introSequence = [
  site.name,
  "max warehouse",
  "kashkha",
  "bruce bolt",
  "shop milano",
];

export const heroProjects = [
  "Max Warehouse",
  "Kashkha",
  "Bruce Bolt",
  "Shop Milano",
];

export const skills = [
  {
    category: "Shopify",
    icon: "shopify",
    items: [
      { name: "Shopify", icon: "shopify" },
      { name: "Shopify Plus", icon: "plus" },
      { name: "Liquid", icon: "liquid" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Theme Development", icon: "theme" },
      { name: "Performance Optimization", icon: "performance" },
    ],
  },
  {
    category: "Frontend",
    icon: "frontend",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "SCSS", icon: "scss" },
      { name: "JavaScript", icon: "js" },
      { name: "React", icon: "react" },
    ],
  },
  {
    category: "Tools",
    icon: "tools",
    items: [
      { name: "GitHub", icon: "github" },
      { name: "Vite", icon: "vite" },
      { name: "Shopify CLI", icon: "shopify" },
      { name: "Chrome DevTools", icon: "tools" },
    ],
  },
];

export const shopifyExpertise = [
  { title: "Theme Development", description: "Custom Liquid themes, sections, and snippets built for scalability.", icon: "theme" },
  { title: "Shopify Plus", description: "Enterprise storefronts with advanced cart logic and checkout customization.", icon: "plus" },
  { title: "Liquid", description: "Expert-level Liquid templating, filters, and dynamic section architecture.", icon: "liquid" },
  { title: "Metaobjects", description: "Structured content models for lookbooks, FAQs, and dynamic page content.", icon: "metaobjects" },
  { title: "Metafields", description: "Product and collection metafields powering custom PDP and PLP experiences.", icon: "metafields" },
  { title: "Cart Customization", description: "Cart drawers, upsells, and AJAX cart experiences via Cart API.", icon: "cart" },
  { title: "Bundles", description: "Metafield-powered bundles, mix-and-match kits, and dynamic pricing.", icon: "bundle" },
  { title: "Checkout Customization", description: "Checkout UI extensions and Shopify Plus checkout modifications.", icon: "checkout" },
  { title: "Search & Discovery", description: "Faceted filtering, predictive search, and merchandising rules.", icon: "search" },
  { title: "App Integrations", description: "Reviews, subscriptions, loyalty, and payment gateways in themes.", icon: "apps" },
  { title: "Performance Optimization", description: "Core Web Vitals tuning, lazy loading, and render-blocking elimination.", icon: "performance" },
  { title: "Online Store 2.0", description: "Section-based themes, app blocks, and JSON templates architecture.", icon: "os2" },
];

export const services = [
  { id: "01", title: "Theme Development", description: "Custom Shopify themes — pixel-perfect, section-driven, and merchant-friendly.", tags: ["Liquid", "Dawn", "OS 2.0"], icon: "theme" },
  { id: "02", title: "Store Setup", description: "End-to-end configuration — products, markets, payments, and navigation.", tags: ["Setup", "Markets", "Payments"], icon: "setup" },
  { id: "03", title: "Store Migration", description: "Platform migrations with theme rebuilds, redirects, and data preservation.", tags: ["Migration", "Redirects", "SEO"], icon: "migration" },
  { id: "04", title: "Performance Optimization", description: "Core Web Vitals improvements, asset compression, and code cleanup.", tags: ["LCP", "CLS", "Minification"], icon: "performance" },
  { id: "05", title: "Custom Features", description: "Metafield sections, bundles, cart drawers, mega menus, and filtering.", tags: ["Metafields", "Cart API", "Sections"], icon: "features" },
  { id: "06", title: "App Integration", description: "Reviews, subscriptions, loyalty, and payment apps wired into themes.", tags: ["Apps", "Webhooks", "APIs"], icon: "apps" },
  { id: "07", title: "Shopify Plus Development", description: "Enterprise builds with checkout customization and advanced cart logic.", tags: ["Shopify Plus", "Scripts", "Checkout"], icon: "plus" },
];

export const projects = [
  {
    id: "max-warehouse",
    title: "Max Warehouse",
    url: "https://www.maxwarehouse.com/",
    image: "assets/img/site-images/max-warehouse.jpg",
    category: "Performance & UX",
    description: "Enterprise B2B/B2C warehouse storefront with performance-focused theme rebuild.",
    challenge: "Slow load times, cluttered theme code, and poor B2B/B2C filtering UX.",
    solution: "Theme cleanup, asset optimization, PDP/home redesign, and improved collection filtering.",
    performance: "40% faster page loads and improved Core Web Vitals scores.",
    impact: "Better conversion paths for B2B buyers and improved mobile engagement.",
    skills: ["Liquid", "Performance", "Hotjar", "B2B"],
    gradient: "violet",
  },
  {
    id: "shop-lc",
    title: "Shop LC",
    url: "https://www.shoplc.com/",
    image: "assets/img/site-images/shop-lc.jpg",
    category: "Jewelry & Live Commerce",
    description: "Enterprise jewelry storefront with live TV integration and high-traffic catalog.",
    challenge: "Complex catalog UX and live commerce flows at enterprise scale.",
    solution: "Custom sections for live TV, auction flows, and optimized PLP architecture.",
    performance: "Stable performance under high-traffic catalog browsing.",
    impact: "Seamless live commerce experience for jewelry shoppers.",
    skills: ["Shopify Plus", "Liquid", "Live TV"],
    gradient: "rose",
  },
  {
    id: "bruce-bolt",
    title: "Bruce Bolt",
    url: "https://brucebolt.us/",
    image: "assets/img/site-images/bruce-bolt.png",
    category: "Shopify Plus",
    description: "Shopify Plus brand with custom cart drawer and advanced filtering.",
    challenge: "Legacy theme limitations and slow product discovery.",
    solution: "Plus template architecture, custom cart drawer, and advanced filtering system.",
    performance: "Optimized image delivery and faster collection page rendering.",
    impact: "Higher add-to-cart rates and improved mobile checkout flow.",
    skills: ["Shopify Plus", "Cart Drawer", "Liquid"],
    gradient: "amber",
  },
  {
    id: "kashkha",
    title: "Kashkha",
    url: "https://www.kashkha.com/",
    image: "assets/img/site-images/kashkha.jpg",
    category: "International",
    description: "International fashion brand with Markets, RTL, and loyalty integrations.",
    challenge: "Multi-market rollout with RTL language support and currency switching.",
    solution: "Markets setup, RTL theme adjustments, and loyalty app integration.",
    performance: "Localized assets and optimized market-specific rendering.",
    impact: "Successful GCC market expansion with localized checkout experience.",
    skills: ["Markets", "RTL", "i18n"],
    gradient: "cyan",
  },
  {
    id: "shop-milano",
    title: "Shop Milano",
    url: "https://shopmilano.com/",
    image: "assets/img/site-images/shop-milano.jpg",
    category: "Fashion Retail",
    description: "Dawn-based fashion store with custom sections and product customization.",
    challenge: "Limited Dawn customization for brand-specific product flows.",
    solution: "Homepage slider, custom sections, and product customization workflows.",
    performance: "Lazy-loaded media and optimized section rendering.",
    impact: "Elevated brand presentation and improved product discovery.",
    skills: ["Dawn", "JavaScript", "Sections"],
    gradient: "rose",
  },
  {
    id: "xtreme-soccer",
    title: "Xtreme Soccer Online",
    url: "https://xtremesocceronline.com/",
    image: "assets/img/site-images/xtreme-soccer.jpg",
    category: "Sports E-commerce",
    description: "Sports storefront with variant handling and metafield-driven sections.",
    challenge: "Complex variant logic and third-party review/size-chart integrations.",
    solution: "Metafield sections, variant handling, and app theme integration.",
    performance: "Reduced CLS from dynamic content loading.",
    impact: "Cleaner PDP experience with accurate size and review data.",
    skills: ["Liquid", "JavaScript", "Metafields"],
    gradient: "emerald",
  },
  {
    id: "lets-be-healthy",
    title: "Let's Be Healthy",
    url: "https://letsbehealthy.com/",
    image: "assets/img/site-images/lets-be-healthy.jpg",
    category: "Wellness",
    description: "Wellness brand with mega menu, SEO optimization, and landing pages.",
    challenge: "Poor product categorization and weak organic search structure.",
    solution: "Mega menu architecture, SEO-optimized templates, and landing page sections.",
    performance: "Improved LCP through asset optimization.",
    impact: "Better organic visibility and category navigation.",
    skills: ["SEO", "Mega Menu", "Sections"],
    gradient: "lime",
  },
  {
    id: "niiyaa",
    title: "Niiyaa",
    url: "https://niiyaa.in/",
    image: "assets/img/site-images/niiyaa.jpg",
    category: "India Market",
    description: "India-focused D2C with Razorpay and mobile-first responsive design.",
    challenge: "Local payment integration and mobile-first catalog browsing.",
    solution: "Razorpay/PayU integration, collection filters, and mobile-first layouts.",
    performance: "Optimized mobile rendering and payment flow speed.",
    impact: "Higher mobile conversion for India market shoppers.",
    skills: ["Razorpay", "Filters", "Mobile"],
    gradient: "violet",
  },
  {
    id: "blend-it-raw",
    title: "Blend It Raw Apothecary",
    url: "https://blenditrawapothecary.in/",
    image: "assets/img/site-images/blend-it-raw.jpg",
    category: "Organic Wellness",
    description: "Organic wellness brand with bundle products and subscription styling.",
    challenge: "Bundle product complexity and subscription app theme conflicts.",
    solution: "Metafield bundles, subscription app styling, and full header/footer rebrand.",
    performance: "Streamlined bundle rendering without layout shift.",
    impact: "Increased AOV through bundle offerings and subscription sign-ups.",
    skills: ["Bundles", "Subscriptions", "Branding"],
    gradient: "emerald",
  },
];

export const caseStudies = {
  "max-warehouse": {
    overview: "Max Warehouse is an enterprise B2B/B2C e-commerce platform requiring performance optimization and UX improvements across PDP and collection pages.",
    problem: "Legacy theme code caused slow load times, poor mobile UX, and ineffective B2B/B2C product filtering.",
    solution: "Complete theme audit, asset compression, lazy loading implementation, PDP/home redesign, and B2B/B2C filter architecture.",
    architecture: "Modular Liquid sections with schema-driven configuration, optimized snippet includes, and conditional B2B/B2C template logic.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Hotjar", "Performance API"],
    results: ["40% faster page loads", "Improved Core Web Vitals", "Better B2B conversion paths", "Cleaner maintainable codebase"],
    lessons: "Performance wins compound — start with asset audit and eliminate render-blocking resources before visual redesign.",
  },
  "bruce-bolt": {
    overview: "Bruce Bolt is a Shopify Plus sports brand needing advanced product discovery and a premium cart experience.",
    problem: "Standard theme filtering couldn't handle complex product attributes; cart UX didn't match brand expectations.",
    solution: "Shopify Plus template architecture, custom AJAX cart drawer, faceted filtering, and image optimization pipeline.",
    architecture: "Section-based OS 2.0 theme with reusable filter components, Cart API integration, and metafield-driven product badges.",
    technologies: ["Shopify Plus", "Liquid", "Cart API", "JavaScript", "Metafields"],
    results: ["Custom cart drawer with upsells", "Advanced multi-attribute filtering", "Optimized image delivery", "Improved mobile checkout"],
    lessons: "Invest in filter architecture early — retrofitting complex filters into legacy themes is costly.",
  },
  "kashkha": {
    overview: "Kashkha is an international fashion brand expanding across GCC markets with RTL and multi-currency requirements.",
    problem: "Single-market theme couldn't support RTL layouts, currency switching, or localized loyalty integrations.",
    solution: "Shopify Markets setup, RTL theme modifications, currency/language switcher, and loyalty app theme integration.",
    architecture: "Market-aware Liquid conditionals, locale-specific assets, and modular header components for language/currency switching.",
    technologies: ["Shopify Markets", "Liquid", "RTL CSS", "i18n", "Loyalty Apps"],
    results: ["Successful GCC market launch", "RTL-compliant layouts", "Seamless currency switching", "Integrated loyalty program"],
    lessons: "Plan internationalization at theme architecture level — RTL isn't just CSS mirroring, it affects component logic.",
  },
  "shop-lc": {
    overview: "Shop LC is an enterprise jewelry platform with live TV commerce and high-traffic catalog requirements.",
    problem: "Standard catalog UX couldn't support live TV integration, auction flows, and enterprise-scale traffic.",
    solution: "Custom live TV sections, auction flow components, and optimized PLP architecture for high-traffic browsing.",
    architecture: "Modular section library with live commerce hooks, lazy-loaded media grids, and performance-optimized collection templates.",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "Live TV Integration"],
    results: ["Live TV commerce integration", "Stable high-traffic performance", "Improved catalog UX", "Enterprise-grade theme structure"],
    lessons: "Enterprise catalogs need progressive loading strategies — don't render everything upfront.",
  },
};

export const about = {
  bio: [
    "I'm Rahul Choubey, a Senior Shopify Developer with 5 years and 9 months of experience delivering premium e-commerce experiences for international brands. I specialize in Shopify Plus, custom Liquid theme development, and performance optimization that drives measurable business results.",
    "From enterprise storefronts like Max Warehouse and Shop LC to GCC fashion brands like Kashkha, I help teams ship clean, scalable theme architecture — optimized for Core Web Vitals, conversion, and long-term maintainability.",
  ],
  cards: [
    { title: "Shopify", desc: "End-to-end storefront development for D2C and B2B brands." },
    { title: "Shopify Plus", desc: "Enterprise builds with checkout customization and advanced cart logic." },
    { title: "Liquid", desc: "Expert templating — sections, snippets, filters, and dynamic content." },
    { title: "JavaScript", desc: "Interactive UX, Cart API integrations, and custom feature development." },
    { title: "GraphQL", desc: "Storefront and Admin API data fetching and integrations." },
    { title: "Performance Optimization", desc: "Core Web Vitals tuning with measurable speed improvements." },
    { title: "Theme Development", desc: "Modular OS 2.0 architecture with reusable schema-driven sections." },
    { title: "Problem Solving", desc: "Translating complex business requirements into elegant theme solutions." },
  ],
  highlights: [
    "25+ Shopify stores delivered globally",
    "Shopify Plus & international markets specialist",
    "Performance-first development approach",
    "Available for remote contracts worldwide",
  ],
};

export const experience = [
  {
    period: "Feb 2024 — Present",
    role: "Senior Web Developer",
    company: "Brainvire Infotech Inc.",
    location: "Ahmedabad, India",
    technologies: ["Shopify Plus", "Liquid", "JavaScript", "GraphQL", "Performance"],
    impact: "40% team efficiency gain across 4 brand campaigns over 6 months.",
    achievements: [
      "Improved Core Web Vitals and page load speed by 40% across 4 enterprise brand storefronts",
      "Led a 6-month growth initiative spanning theme optimization, UX improvements, and ad campaign support",
      "Built reusable Liquid section libraries that reduced delivery time for cross-functional teams",
    ],
  },
  {
    period: "Jun 2023 — Jan 2024",
    role: "Shopify Developer",
    company: "Ace Infoway Pvt. Ltd.",
    location: "Ahmedabad, India",
    technologies: ["Shopify", "Liquid", "SCSS", "Metafields", "Git"],
    impact: "Cut theme delivery time by 30% through reusable section architecture.",
    achievements: [
      "Delivered 8+ custom Shopify themes aligned to client brand and conversion goals",
      "Resolved critical production issues across live stores with zero extended downtime",
      "Introduced Git-based workflows and code review standards to the development team",
    ],
  },
  {
    period: "Jun 2020 — Jan 2023",
    role: "Intern & Junior Developer",
    company: "Create N Code IT Solutions",
    location: "Indore, India",
    technologies: ["Shopify", "HTML", "CSS", "JavaScript", "Liquid"],
    impact: "Led 10+ store launches from design through deployment.",
    achievements: [
      "Independently led end-to-end Shopify store builds for multiple D2C clients",
      "Created a library of custom sections, schemas, and snippets reused across projects",
      "Established Git version control and deployment documentation for the team",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Rahul delivered a flawless Shopify Plus rebuild for our brand. Performance scores jumped and the custom cart experience exceeded expectations.",
    author: "Project Lead",
    role: "E-commerce Manager",
    company: "Enterprise Retail Brand",
  },
  {
    quote:
      "His Liquid expertise and attention to detail made our international rollout seamless. RTL support and markets setup were handled perfectly.",
    author: "Store Owner",
    role: "Founder",
    company: "Fashion D2C Brand",
  },
  {
    quote:
      "Rahul consistently ships clean, maintainable theme code. Our team efficiency improved significantly after he joined the project.",
    author: "Tech Lead",
    role: "Senior Developer",
    company: "Digital Agency",
  },
];

export const bookingCta = {
  chips: ["Themes", "Performance", "Markets", "Integrations", "Optimization"],
  video: {
    src: "assets/video/reel.mp4",
    poster: "",
  },
  primaryCta: { label: "Book a Call", href: "#contact" },
  secondaryCta: { label: "View My Work", href: "#work" },
};

export const certifications = [
  { title: "Shopify Theme Development", issuer: "Shopify Partners", year: "2023", status: "Placeholder" },
  { title: "Shopify App Development", issuer: "Shopify Partners", year: "2024", status: "Placeholder" },
  { title: "JavaScript Algorithms", issuer: "Online Platform", year: "2022", status: "Placeholder" },
  { title: "Web Accessibility", issuer: "Industry Course", year: "2023", status: "Placeholder" },
];

export const githubSection = {
  username: "rahulchoubey",
  url: site.github,
  languages: [
    { name: "Liquid", percent: 45 },
    { name: "JavaScript", percent: 30 },
    { name: "CSS/SCSS", percent: 15 },
    { name: "HTML", percent: 10 },
  ],
  highlights: ["Open Source Contributions", "Theme Snippet Libraries", "Shopify Utilities"],
  repos: [
    { name: "shopify-theme-snippets", desc: "Reusable Liquid snippets for Shopify themes", stars: "—" },
    { name: "shopify-performance-tools", desc: "Performance audit scripts for Shopify stores", stars: "—" },
    { name: "liquid-sections", desc: "Custom OS 2.0 section collection", stars: "—" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "Email", href: `mailto:${site.email}`, icon: "email" },
];
