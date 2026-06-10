/** Portfolio content — single source of truth (resume-aligned) */

export const site = {
  name: "Rahul Choubey",
  title: "Shopify Developer",
  tagline: "crafting digital commerce experiences",
  email: "rahulchoubey.codes@gmail.com",
  phone: "+91 97705 76062",
  linkedin: "https://www.linkedin.com/in/rahul-choubey-b88128389",
  github: "https://github.com/rahulchoubey",
  location: "Ahmedabad, India",
  yearsExperience: "4.5+",
  projectsCount: "25+",
  launchesCount: "20+",
};

export const introSequence = [
  site.name.toLowerCase(),
  "max warehouse",
  "kashkha",
  "bruce bolt",
  "shop milano",
];

export const heroProjects = [
  "max warehouse",
  "kashkha",
  "bruce bolt",
  "xtreme soccer",
  "niiyaa",
  "blend it raw",
];

export const services = [
  {
    id: "01",
    title: "Shopify Theme Development",
    description:
      "Custom Liquid themes, sections, snippets, and schema-driven storefronts tailored to brand requirements.",
    tags: ["Liquid", "Dawn", "Shopify 2.0"],
  },
  {
    id: "02",
    title: "Performance Optimization",
    description:
      "Asset compression, lazy loading, code cleanup, and Core Web Vitals improvements across production stores.",
    tags: ["LCP", "CLS", "Minification"],
  },
  {
    id: "03",
    title: "Internationalization & Markets",
    description:
      "Multi-market setups with RTL support, currency switchers, and localized checkout experiences.",
    tags: ["Markets", "RTL", "i18n"],
  },
  {
    id: "04",
    title: "Shopify Plus Solutions",
    description:
      "Enterprise-grade builds with custom cart drawers, Script Editor, and advanced product filtering.",
    tags: ["Shopify Plus", "Cart API", "Scripts"],
  },
  {
    id: "05",
    title: "Custom Liquid & Sections",
    description:
      "Metafield-driven sections, mega menus, bundle products, and reusable theme architecture.",
    tags: ["Metafields", "Sections", "Snippets"],
  },
  {
    id: "06",
    title: "App Integrations",
    description:
      "Reviews, subscriptions, loyalty, size charts, and payment gateways integrated seamlessly into themes.",
    tags: ["Apps", "Razorpay", "Webhooks"],
  },
  {
    id: "07",
    title: "AI-Assisted Development",
    description:
      "Accelerated workflows using Cursor AI, GitHub Copilot, and ChatGPT for faster, cleaner delivery.",
    tags: ["Cursor AI", "Copilot", "Automation"],
  },
];

/**
 * Projects — live homepage previews are fetched automatically from each URL.
 * To use a local screenshot instead, add: image: "assets/img/projects/<name>.jpg"
 */
export const projects = [
  {
    title: "Max Warehouse",
    url: "https://www.maxwarehouse.com/",
    category: "Performance & UX",
    description:
      "Cleaned theme code, optimized assets, redesigned PDP/home layouts, and improved B2B/B2C filtering.",
    skills: ["Liquid", "Performance", "Hotjar", "B2B"],
    gradient: "violet",
  },
  {
    title: "Xtreme Soccer Online",
    url: "https://xtremesocceronline.com/",
    category: "Sports E-commerce",
    description:
      "Theme customization with variant handling, metafield sections, and review/size-chart integrations.",
    skills: ["Liquid", "JavaScript", "Metafields"],
    gradient: "emerald",
  },
  {
    title: "Bruce Bolt",
    url: "https://brucebolt.us/",
    category: "Shopify Plus",
    description:
      "Advanced filtering, custom cart drawer, image optimization, and Shopify Plus template architecture.",
    skills: ["Shopify Plus", "Cart Drawer", "Liquid"],
    gradient: "amber",
  },
  {
    title: "Shop Milano",
    url: "https://shopmilano.com/",
    category: "Fashion Retail",
    description:
      "Dawn theme modifications with homepage slider, custom sections, and product customization flows.",
    skills: ["Dawn", "jQuery", "Sections"],
    gradient: "rose",
  },
  {
    title: "Kashkha",
    url: "https://www.kashkha.com/",
    category: "International",
    description:
      "Markets setup with RTL theme adjustments, currency/language switcher, and loyalty integrations.",
    skills: ["Markets", "RTL", "i18n"],
    gradient: "cyan",
  },
  {
    title: "Let's Be Healthy",
    url: "https://letsbehealthy.com/",
    category: "Wellness",
    description:
      "Health product categorization, mega menu, SEO optimization, and landing page section builds.",
    skills: ["SEO", "Mega Menu", "Sections"],
    gradient: "lime",
  },
  {
    title: "Niiyaa",
    url: "https://niiyaa.in/",
    category: "India Market",
    description:
      "India market adaptation with Razorpay/PayU, collection filters, and mobile-first responsive design.",
    skills: ["Razorpay", "Filters", "Mobile"],
    gradient: "violet",
  },
  {
    title: "Blend It Raw Apothecary",
    url: "https://blenditrawapothecary.in/",
    category: "Organic Wellness",
    description:
      "Bundle products via metafields, subscription app styling, and full header/footer rebranding.",
    skills: ["Bundles", "Subscriptions", "Branding"],
    gradient: "emerald",
  },
];

export const achievements = [
  { value: "20+", label: "Shopify Launches" },
  { value: "40%", label: "Team Efficiency Gain" },
  { value: "25%", label: "Retention Improvement" },
  { value: "25+", label: "Projects Delivered" },
];

export const about = {
  bio: [
    "I'm Rahul Choubey, a Shopify Developer with 4.5+ years building high-performance e-commerce experiences. From custom Liquid themes to international market rollouts, I help brands transform storefronts into conversion engines.",
    "Currently at Brainvire Infotech, I work with enterprise clients — delivering pixel-perfect themes, optimizing Core Web Vitals, and integrating modern tooling including AI-assisted development workflows.",
  ],
  highlights: [
    "Shopify & Shopify Plus specialist",
    "20+ production store launches",
    "International markets & RTL expertise",
    "Available for remote & contract work",
  ],
};

export const experience = [
  {
    period: "Feb 2024 — Present",
    role: "Senior Web Developer",
    company: "Brainvire Infotech Inc.",
    location: "Ahmedabad, India",
    highlights: [
      "Develop and maintain Shopify-based websites with focus on performance and UX",
      "Led ad campaigns for 4 brands over a 6-month growth initiative",
      "Collaborate with cross-functional teams on enterprise digital transformation",
    ],
  },
  {
    period: "Jun 2023 — Jan 2024",
    role: "Shopify Developer",
    company: "Ace Infoway Pvt. Ltd.",
    location: "Ahmedabad, India",
    highlights: [
      "Customized and developed Shopify themes to client specifications",
      "Provided technical support and troubleshooting for production stores",
      "Contributed to workflow efficiency and quality assurance processes",
    ],
  },
  {
    period: "Jun 2020 — Jan 2023",
    role: "Intern & Junior Developer",
    company: "Create N Code IT Solutions",
    location: "Indore, India",
    highlights: [
      "Led design, development, and deployment of Shopify websites",
      "Built custom forms, sections, templates, schemas, and snippets",
      "Documented portfolio projects and established Git version control",
    ],
  },
];

/**
 * Booking CTA config.
 * Replace video.src with your reel — drop file at assets/video/
 * Keep files under ~15 MB for fast web loading (compress with HandBrake/ffmpeg).
 */
export const bookingCta = {
  chips: ["themes", "performance", "markets", "integrations", "optimization"],
  video: {
    src: "assets/video/reel.mp4",
    poster: "",
  },
  primaryCta: { label: "Book a Call", href: "#contact" },
  secondaryCta: { label: "View My Work", href: "#work" },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
