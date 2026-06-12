# Website User Guide

**Rahul Choubey — Personal Portfolio**

This guide explains how to update, edit, add, or remove content on the website **without needing to understand the full codebase**. Most day-to-day changes happen in one or two files.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [How to Run the Website Locally](#how-to-run-the-website-locally)
3. [Header & Navigation](#header--navigation)
4. [Hero Section](#hero-section)
5. [About Section](#about-section)
6. [Services Section](#services-section)
7. [Featured Engagements / Projects](#featured-engagements--projects)
8. [Experience Section](#experience-section)
9. [Testimonials Section](#testimonials-section)
10. [Book a Consultation Section](#book-a-consultation-section)
11. [Contact Form](#contact-form)
12. [Theme Toggle](#theme-toggle)
13. [Animations](#animations)
14. [Images & Assets](#images--assets)
15. [SEO Management](#seo-management)
16. [Deployment Guide](#deployment-guide)
17. [Maintenance Guide](#maintenance-guide)
18. [Quick Edit Reference](#quick-edit-reference)

---

## Project Overview

### Project purpose

This is a **single-page personal portfolio website** for Rahul Choubey, a Shopify Developer. It showcases services, featured client work, professional experience, and a contact form. The site is designed to look premium, load quickly, and be easy to maintain.

### Technology stack used

| Layer | What it uses |
|-------|----------------|
| Structure | HTML5 (`vanilla/index.html`) |
| Styling | CSS3 — design tokens, components, sections |
| Interactivity | Vanilla JavaScript (ES modules) |
| Animations | GSAP 3.12, ScrollTrigger, Lenis smooth scroll |
| Fonts | Google Fonts — Syne & DM Sans |
| Hosting | Netlify (static site, no build step) |
| Forms | Netlify Forms |

There is **no React, Vue, or build tool**. You edit files and publish — that is the entire workflow.

### Folder structure explanation

```
my port/                          ← Project root (Git repository)
├── user-guide/                   ← This documentation
│   └── README.md
├── netlify.toml                  ← Netlify hosting settings
├── package.json                  ← Local dev server commands
├── start.sh                      ← One-click local server (Linux/Mac)
├── README.md                     ← Developer quick start
└── vanilla/                      ← THE LIVE WEBSITE (everything visitors see)
    ├── index.html                ← Page structure, SEO tags, some fixed text
    ├── robots.txt                ← Search engine crawl rules
    ├── sitemap.xml               ← Search engine site map
    ├── css/
    │   ├── tokens.css            ← Colors, fonts, spacing (theme)
    │   ├── base.css              ← Reset, global styles
    │   ├── components.css        ← Buttons, nav, forms, cards
    │   ├── sections.css          ← Hero, about, projects, contact, etc.
    │   └── animations.css        ← Motion starting states
    ├── js/
    │   ├── data.js               ← ★ MAIN CONTENT FILE — edit this first
    │   ├── main.js               ← App startup (rarely edited)
    │   ├── render.js             ← Fills About, Experience, stats from data.js
    │   ├── hero.js               ← Hero animations & rotating project names
    │   ├── services.js           ← Services list rendering
    │   ├── projects.js           ← Project cards & carousel
    │   ├── booking-cta.js        ← Book a Consultation section
    │   ├── contact.js            ← Contact form handling
    │   ├── navigation.js         ← Menu open/close, scroll spy
    │   ├── theme.js              ← Dark/light mode toggle
    │   ├── scroll.js             ← Scroll animations & timeline
    │   ├── preloader.js          ← Loading screen & intro sequence
    │   ├── cursor.js             ← Custom cursor & magnetic buttons
    │   └── utils.js              ← Shared helpers (rarely edited)
    └── assets/
        ├── img/                  ← Logos, profile photo, OG image, project shots
        └── video/                ← Showreel video (reel.mp4)
```

### The golden rule

> **Most content lives in `vanilla/js/data.js`.**  
> If you are changing text, projects, experience, or services — start there.  
> If you are changing page titles, navigation labels, or section headings — edit `vanilla/index.html`.

---

## How to Run the Website Locally

You **cannot** open the website by double-clicking `index.html`. Browsers block the JavaScript modules when using `file://` paths. You need a small local server.

### Steps to open and test locally

**Option A — Terminal (recommended)**

1. Open a terminal in the project root folder (`my port/`).
2. Run:
   ```bash
   npm run dev
   ```
3. Open your browser to: **http://127.0.0.1:5501**

**Option B — One-click script (Linux/Mac)**

1. In the project root, run:
   ```bash
   chmod +x start.sh
   ./start.sh
   ```
2. The script starts the server and opens your browser automatically.

**Option C — Manual Python server**

```bash
cd vanilla
python3 -m http.server 5501
```

Then visit **http://127.0.0.1:5501**.

### Development workflow

1. **Start the local server** (see above).
2. **Edit a file** — usually `vanilla/js/data.js` or `vanilla/index.html`.
3. **Save the file.**
4. **Refresh your browser** (Ctrl+R or Cmd+R) to see changes.
5. When satisfied, **commit and deploy** (see [Deployment Guide](#deployment-guide)).

> **Tip:** Keep the browser and your code editor side by side. Most text changes appear instantly after a refresh.

---

## Header & Navigation

The header contains the logo, menu links, theme toggle, and "Let's Talk" button.

### Where to edit

| What | File | Location |
|------|------|----------|
| Menu link labels & URLs | `vanilla/index.html` | `<ul class="nav__links" id="navLinks">` (around line 175) |
| Logo images | `vanilla/index.html` + image files | `<img class="nav__logo-img">` tags |
| "Let's Talk" button | `vanilla/index.html` | Last `<li>` inside `nav__links` |
| Theme toggle | `vanilla/index.html` | Button with `id="themeToggle"` |

> **Note:** `vanilla/js/data.js` contains a `navLinks` array, but the live navigation is currently defined directly in `index.html`. Edit `index.html` for menu changes.

### How to edit menu items

Each menu item looks like this:

```html
<li><a href="#about" class="nav__link magnetic" data-magnetic>About</a></li>
```

- Change the **visible text** between the `<a>` tags (e.g. `About`).
- Change the **link target** in `href` (e.g. `#about` scrolls to the About section).

Valid section IDs on this page: `#hero`, `#services`, `#work`, `#about`, `#experience`, `#cta`, `#contact`.

### How to add a new menu item

1. Open `vanilla/index.html`.
2. Find `<ul class="nav__links" id="navLinks">`.
3. Add a new line **before** the theme toggle `<li class="nav__theme">`:

```html
<li><a href="#your-section" class="nav__link magnetic" data-magnetic>Your Label</a></li>
```

4. Make sure a matching section with `id="your-section"` exists on the page.

### How to remove a menu item

Delete the entire `<li>...</li>` block for that link. Do not remove the theme toggle or "Let's Talk" items unless you intend to.

### How to change the logo

The site uses **two logo images** — one for dark mode, one for light mode:

| File | Used when |
|------|-----------|
| `vanilla/assets/img/dark-mode.png` | Dark theme (default) |
| `vanilla/assets/img/light-mode.png` | Light theme |

**To replace:**

1. Create new logo images (recommended size: **160 × 40 px**, PNG with transparency).
2. Save them with the **same filenames** in `vanilla/assets/img/`, overwriting the old files.
3. Refresh the browser.

To use different filenames, update the `src` attributes on the two `<img class="nav__logo-img">` tags in `index.html`.

### How to update social links

Social links appear in two places:

| Location | File | What to edit |
|----------|------|--------------|
| Contact section | `vanilla/index.html` | `<a href="...">` links inside `.contact__links` |
| Site-wide email | `vanilla/js/data.js` | `site.email`, `site.linkedin`, `site.github` |

The email link in the contact section is **automatically filled** from `site.email` in `data.js` via `render.js`. LinkedIn and GitHub links in the contact area are currently set in `index.html`.

---

## Hero Section

The hero is the first large section visitors see — headline, rotating project names, subtitle, buttons, and stats.

### Where content comes from

| Element | Primary file | Details |
|---------|--------------|---------|
| Eyebrow text ("Shopify Developer · 4.5+ Years") | `vanilla/js/data.js` | Auto-built from `site.title` + `site.yearsExperience` |
| Main title line 1 ("Building Commerce For") | `vanilla/index.html` | Inside `.hero__title` |
| Rotating project names | `vanilla/js/data.js` | `heroProjects` array |
| Subtitle paragraph | `vanilla/index.html` | `.hero__subtitle` |
| CTA buttons ("View Work", "Get In Touch") | `vanilla/index.html` | `.hero__actions` |
| Stats (20+, 4.5+, 40%) | `vanilla/index.html` | `.hero__stats` |
| Intro animation words | `vanilla/js/data.js` | `introSequence` array |

### How to change the title

**Line 1 (static):** Edit the text inside this span in `vanilla/index.html`:

```html
<span class="char-wrap" data-split>Building Commerce For</span>
```

**Line 2 (rotating names):** Edit the `heroProjects` array in `vanilla/js/data.js`:

```javascript
export const heroProjects = [
  "max warehouse",
  "kashkha",
  "bruce bolt",
  "shop milano",
];
```

Add, remove, or rename entries. Names rotate every 3 seconds.

### How to change the subtitle

In `vanilla/index.html`, find `<p class="hero__subtitle">` and edit the text between the tags.

### How to change CTA buttons

In `vanilla/index.html`, inside `<div class="hero__actions">`:

- **Button label:** Change the text inside `<span>View Work</span>` or `<span>Get In Touch</span>`.
- **Button link:** Change `href="#work"` or `href="#contact"` to any section ID or external URL.

### How to change the profile image / video

The hero section does **not** display a profile image or video. The profile photo appears in the **About section** (see below).

The hero uses animated text and a gradient background only. To add a hero image, that would require HTML/CSS changes beyond this guide.

### How to change hero stats

Edit the three stat blocks in `vanilla/index.html` inside `.hero__stats`:

```html
<span class="hero__stat-num">20+</span>
<span class="hero__stat-label">Store Launches</span>
```

Change both the number and the label for each stat.

### How to change the loading intro words

The cinematic intro (words that flash on first visit) uses `introSequence` in `vanilla/js/data.js`:

```javascript
export const introSequence = [
  site.name,
  "max warehouse",
  "kashkha",
  "bruce bolt",
  "shop milano",
];
```

Edit this list to change which words appear during the opening animation.

---

## About Section

The About section shows your photo, bio paragraphs, highlight bullets, and achievement statistics.

### Where to edit

| Element | File |
|---------|------|
| Bio paragraphs | `vanilla/js/data.js` → `about.bio` |
| Highlight bullets | `vanilla/js/data.js` → `about.highlights` |
| Achievement stat cards | `vanilla/js/data.js` → `achievements` |
| Profile photo | `vanilla/assets/img/profile.webp` (or `.png`, `.jpg`) |
| Badge ("4.5+ Years in E-commerce") | `vanilla/index.html` → `.about__badge` |
| Section heading | `vanilla/index.html` → About `.section-header` |

### How to update bio

Open `vanilla/js/data.js` and edit the `about.bio` array:

```javascript
export const about = {
  bio: [
    "First paragraph of your bio goes here.",
    "Second paragraph goes here.",
  ],
  // ...
};
```

- Each string becomes one paragraph on the page.
- The page supports **two** bio paragraphs (`aboutBio0` and `aboutBio1`). If you add a third string, you would also need to add a third `<p id="aboutBio2">` in `index.html`.

> **Important:** Write plain text only in `bio` strings. Do not use HTML tags — they will be displayed as literal text.

### How to update highlights

Edit `about.highlights` in `vanilla/js/data.js`:

```javascript
highlights: [
  "Shopify & Shopify Plus specialist",
  "20+ production store launches",
  "International markets & RTL expertise",
  "Available for remote & contract work",
],
```

Add or remove lines in the array. Each line becomes a bullet point.

### How to update statistics

Edit the `achievements` array in `vanilla/js/data.js`:

```javascript
export const achievements = [
  { value: "20+", label: "Shopify Launches" },
  { value: "40%", label: "Team Efficiency Gain" },
  { value: "25%", label: "Retention Improvement" },
  { value: "25+", label: "Projects Delivered" },
];
```

- `value` — the large number shown on the card.
- `label` — the description below the number.

Add a new object to add a card. Remove an object to remove a card.

### How to update the profile photo

1. Prepare a portrait image (recommended: **480 × 600 px**, WebP or JPG).
2. Save it as `vanilla/assets/img/profile.webp` (overwrite the existing file).

The site automatically tries these extensions in order: `webp`, `avif`, `png`, `jpg`, `jpeg`, `svg`. If no image is found, it shows an "RC" initials fallback.

---

## Services Section

> **Note:** This portfolio uses a **Services** section (not a separate "Skills" section). Service items describe what you offer. Project cards also show skill tags per project — see [Featured Engagements](#featured-engagements--projects).

### Where to edit

| Element | File |
|---------|------|
| Service items (title, description, tags) | `vanilla/js/data.js` → `services` |
| Section heading & description | `vanilla/index.html` → Services `.section-header` |

### How to add a service

In `vanilla/js/data.js`, add a new object to the `services` array:

```javascript
{
  id: "08",                              // Unique number, two digits
  title: "Your Service Name",
  description: "A short description of what you offer.",
  tags: ["Tag One", "Tag Two", "Tag Three"],
},
```

Place it after the last service entry. Keep `id` values unique.

### How to remove a service

Delete the entire `{ ... },` block for that service from the `services` array.

### How to update service content

Edit any field inside a service object:

| Field | What it controls |
|-------|------------------|
| `id` | The number shown on the left (e.g. "01") |
| `title` | Service name heading |
| `description` | Paragraph text (shown when item is active) |
| `tags` | Small label chips below the description |

The first service in the list is active by default. Visitors can click or hover other items to expand them.

---

## Featured Engagements / Projects

The Work section displays a horizontal carousel of project cards with live website previews.

### Where to edit

| Element | File |
|---------|------|
| Project list | `vanilla/js/data.js` → `projects` |
| Section heading | `vanilla/index.html` → Work `.section-header` |
| Local screenshots | `vanilla/assets/img/projects/` |

### How project cards work

Each project card shows:

1. **Browser frame** with a homepage screenshot (auto-fetched from the project URL).
2. **Category** label (e.g. "Performance & UX").
3. **Title** and **description**.
4. **Skill tags** (small chips).
5. **"Visit Website"** button linking to the live store.

On desktop, the carousel scrolls horizontally as you scroll down the page. On mobile, cards stack vertically.

Screenshots are fetched automatically from each project's URL using WordPress mShots. If a screenshot fails to load, a styled placeholder appears.

### How to add a new project

Add a new object to the `projects` array in `vanilla/js/data.js`:

```javascript
{
  title: "Store Name",
  url: "https://www.example.com/",
  category: "Category Label",
  description: "What you did on this project.",
  skills: ["Liquid", "Performance", "Shopify Plus"],
  gradient: "violet",
},
```

**Gradient options:** `violet`, `rose`, `emerald`, `amber`, `cyan`, `lime` — these control the placeholder background color if no screenshot loads.

### How to remove a project

Delete the entire project object from the `projects` array in `data.js`.

### How to replace screenshots

**Automatic (default):** Leave the project without an `image` field. The site fetches a live preview from the URL.

**Manual (local image):** Add an `image` field to the project:

```javascript
{
  title: "Max Warehouse",
  url: "https://www.maxwarehouse.com/",
  image: "assets/img/projects/max-warehouse.jpg",
  // ... rest of fields
},
```

Then place your image file at `vanilla/assets/img/projects/max-warehouse.jpg`.

### Recommended image sizes

| Asset | Recommended size | Format |
|-------|------------------|--------|
| Project screenshot | **1200 × 675 px** (16:9) | JPG or WebP |
| Profile photo | **480 × 600 px** (4:5 portrait) | WebP |
| Logo (dark/light) | **160 × 40 px** | PNG (transparent) |
| Open Graph image | **1200 × 630 px** | JPG |
| Showreel video | Keep under **15 MB** | MP4 |

### How to update project skill tags

Edit the `skills` array inside each project object in `data.js`:

```javascript
skills: ["Liquid", "Performance", "Hotjar", "B2B"],
```

These appear as small chips on the project card — they are **per-project** skill tags, not a global skills list.

---

## Experience Section

The Experience section shows a vertical timeline of jobs with role, company, dates, and bullet points.

### Where to edit

| Element | File |
|---------|------|
| All timeline entries | `vanilla/js/data.js` → `experience` |
| Section heading | `vanilla/index.html` → Experience `.section-header` |

### How to update an experience entry

Each entry in the `experience` array looks like:

```javascript
{
  period: "Feb 2024 — Present",
  role: "Senior Web Developer",
  company: "Brainvire Infotech Inc.",
  location: "Ahmedabad, India",
  highlights: [
    "First achievement bullet point.",
    "Second achievement bullet point.",
  ],
},
```

Edit any field directly. Changes appear after a browser refresh.

### How to add a timeline item

Add a new object at the **top** of the `experience` array (most recent job first):

```javascript
export const experience = [
  {
    period: "Jan 2026 — Present",
    role: "Your New Role",
    company: "Company Name",
    location: "City, Country",
    highlights: [
      "What you accomplished.",
      "Another highlight.",
    ],
  },
  // ... existing entries below
];
```

### How to delete a timeline item

Remove the entire `{ ... },` block for that job from the `experience` array.

---

## Testimonials Section

**This website does not currently include a Testimonials section.**

There is no testimonials data in `data.js` and no testimonials markup in `index.html`. If you want to add testimonials in the future, you would need to:

1. Add a `testimonials` array to `vanilla/js/data.js`.
2. Add a new `<section id="testimonials">` block in `vanilla/index.html`.
3. Create a render function (similar to `renderExperience()` in `vanilla/js/render.js`).
4. Wire it up in `vanilla/js/main.js`.
5. Add styles in `vanilla/css/sections.css`.
6. Add a navigation link in `index.html`.

Until that work is done, skip this section — nothing to edit.

---

## Book a Consultation Section

This section (labeled "05 — Collaboration") invites visitors to book a call and shows a showreel video.

### Where to edit

| Element | File |
|---------|------|
| Skill chips (Themes, Performance, etc.) | `vanilla/js/data.js` → `bookingCta.chips` |
| Showreel video | `vanilla/js/data.js` → `bookingCta.video` + `vanilla/assets/video/reel.mp4` |
| Section title & description | `vanilla/index.html` → `.booking-cta` section |
| CTA button labels & links | `vanilla/index.html` → `.booking-cta__actions` |

> **Note:** `bookingCta.primaryCta` and `bookingCta.secondaryCta` exist in `data.js` but the live buttons are currently defined in `index.html`. Edit `index.html` for button text and links.

### How to update text

In `vanilla/index.html`, find the section with `id="cta"`:

- **Section label:** `<span class="section-label">05 — Collaboration</span>`
- **Title:** Inside `.booking-cta__title` — two lines of heading text.
- **Description:** Inside `<p class="booking-cta__desc">`.

### How to replace the showreel video

1. Compress your video to under **15 MB** (use HandBrake or ffmpeg).
2. Save it as `vanilla/assets/video/reel.mp4`, replacing the existing file.
3. Confirm `vanilla/js/data.js` has:
   ```javascript
   video: {
     src: "assets/video/reel.mp4",
     poster: "",
   },
   ```
4. Optionally set `poster` to a still image path (e.g. `"assets/img/video-poster.jpg"`) shown before the video loads.

> **Do not** point the video at other filenames unless you also update `bookingCta.video.src` in `data.js`.

### How to replace images

The booking section does not use a static character image. It displays the **video** in a glass frame. If the video fails to load, animated orb fallbacks appear (styled in CSS, not an image file).

To change the fallback appearance, edit styles in `vanilla/css/sections.css` under `.booking-cta__fallback`.

### How animations are controlled

Booking section animations are in `vanilla/js/booking-cta.js`:

| Animation | What it does |
|-----------|--------------|
| Scroll reveal | Text and video frame fade/slide in when section enters view |
| Accent line | Horizontal line scales in |
| Parallax | Video portal moves slightly on scroll (desktop only) |
| Chip cycle | Skill chips rotate active state every 3.2 seconds |
| Button hover | Buttons scale up slightly on mouse hover |
| Video lazy load | Video only loads when section is near the viewport |

Animations are automatically **disabled** for visitors who have "Reduce motion" enabled in their OS settings.

To adjust timing, edit the `duration`, `stagger`, and `ease` values in `booking-cta.js`. This requires basic JavaScript familiarity.

### How to update skill chips

Edit `bookingCta.chips` in `vanilla/js/data.js`:

```javascript
chips: ["Themes", "Performance", "Markets", "Integrations", "Optimization"],
```

Add, remove, or rename chips. The first chip is active by default; they cycle automatically.

---

## Contact Form

The contact section includes your email, social links, and a message form powered by **Netlify Forms**.

### Where to edit

| Element | File |
|---------|------|
| Email address (site-wide) | `vanilla/js/data.js` → `site.email` |
| Contact description text | `vanilla/index.html` → `.contact__desc` |
| Form fields & labels | `vanilla/index.html` → `#contactForm` |
| Form submission logic | `vanilla/js/contact.js` |
| Error fallback email message | `vanilla/js/contact.js` (line ~95) |

### How to update email settings

Change the email in `vanilla/js/data.js`:

```javascript
export const site = {
  // ...
  email: "rahulchoubey.codes@gmail.com",
  // ...
};
```

This updates the mailto link in the contact section automatically.

Also update the error message in `vanilla/js/contact.js` if you change the email — search for the hardcoded email in the `.catch()` block.

### How Netlify Forms works

The form in `index.html` has these special attributes:

```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
```

- **`data-netlify="true"`** — Tells Netlify to capture form submissions.
- **`name="contact"`** — Form identifier in the Netlify dashboard.
- **`netlify-honeypot="bot-field"`** — Hidden spam trap field.
- A hidden `<input name="form-name" value="contact">` is required for JavaScript submissions.

When a visitor submits the form, `contact.js` sends the data to Netlify. Submissions appear in your **Netlify dashboard → Forms**.

### How to test form submissions

**On the live site (Netlify):**

1. Deploy the site to Netlify.
2. Visit the live URL.
3. Fill out and submit the contact form.
4. Check **Netlify dashboard → Forms → contact** for the submission.

**Locally:**

Netlify Forms only works on the deployed site, not on `localhost`. When testing locally, the form will show an error after submit. This is expected.

### Form field limits

| Field | Max characters |
|-------|----------------|
| Name | 100 |
| Email | 254 |
| Subject | 200 |
| Message | 2000 |

These limits are set in `vanilla/js/contact.js` (`LIMITS` object).

---

## Theme Toggle

Visitors can switch between dark and light mode using the sun/moon button in the navigation.

### How Dark/Light mode works

1. On first visit, the theme follows the visitor's **system preference** (dark or light).
2. Clicking the toggle switches themes and saves the choice in **browser localStorage**.
3. On return visits, the saved preference is used.
4. A brief CSS transition smooths the color change.

### Where colors are controlled

All theme colors are defined in `vanilla/css/tokens.css`:

| Variable | Dark mode | Light mode | What it affects |
|----------|-----------|------------|-----------------|
| `--bg` | `#0a0a0a` | `#f6f6f1` | Page background |
| `--text` | `#f5f5f5` | `#141414` | Main text |
| `--accent` | `#d4e157` | `#5f7300` | Buttons, highlights, links |
| `--text-muted` | `#8a8a8a` | `#5d5d57` | Secondary text |
| `--bg-elevated` | `#111111` | `#ffffff` | Cards, elevated surfaces |
| `--border` | rgba white 0.08 | rgba black 0.1 | Borders |

Dark mode values are in `:root { }`. Light mode overrides are in `body.light-theme { }`.

### How to change theme colors

1. Open `vanilla/css/tokens.css`.
2. Change the hex color values for the variable you want.
3. Update **both** `:root` (dark) and `body.light-theme` (light) for consistency.
4. Save and refresh.

> **Tip:** Only change the color values. Do not rename the variables — they are used throughout the CSS files.

### Theme JavaScript

The toggle logic is in `vanilla/js/theme.js`. You rarely need to edit this file.

---

## Animations

The site uses GSAP (GreenSock Animation Platform) for scroll-based and entrance animations.

### GSAP animations overview

| Feature | File | Description |
|---------|------|-------------|
| Loading preloader | `vanilla/js/preloader.js` | Progress bar + word sequence on first visit |
| Hero entrance | `vanilla/js/hero.js` | Character-by-character title reveal, stat fade-in |
| Hero rotating text | `vanilla/js/hero.js` | Project names cycle every 3 seconds |
| Scroll reveals | `vanilla/js/scroll.js` | Sections fade up as you scroll (`[data-reveal]`) |
| Section titles | `vanilla/js/scroll.js` | Clip-path wipe animation on headings |
| Experience timeline | `vanilla/js/scroll.js` | Line fills and dots pop in on scroll |
| Projects carousel | `vanilla/js/projects.js` | Horizontal scroll pin on desktop |
| Booking CTA | `vanilla/js/booking-cta.js` | Portal reveal, parallax, chip cycling |
| Smooth scrolling | `vanilla/js/scroll.js` | Lenis smooth scroll (desktop) |
| Custom cursor | `vanilla/js/cursor.js` | Dot + ring cursor follow |
| Magnetic buttons | `vanilla/js/cursor.js` | Buttons subtly follow mouse |
| Navigation scroll spy | `vanilla/js/navigation.js` | Active menu highlight on scroll |

External libraries loaded from CDN in `index.html`:
- GSAP 3.12.7
- ScrollTrigger 3.12.7
- Lenis 1.1.18

### How to disable animations

**For all visitors (site-wide):**

This is not recommended, but you can remove or comment out animation init calls in `vanilla/js/main.js`:

```javascript
// Comment out lines like:
// initHero();
// initScrollReveals();
// initTimeline();
// initBookingCta();
```

**For visitors with "Reduce motion" enabled:**

Animations are **automatically disabled** when the OS "Reduce motion" setting is on. This is handled by `prefersReducedMotion` in `vanilla/js/utils.js`. No action needed.

**To disable smooth scroll only:**

In `main.js`, comment out `initSmoothScroll();`.

**To disable the intro/preloader:**

In `main.js`, replace the `initIntro(...)` wrapper with a direct call to the inner functions, or edit `preloader.js` to call `onComplete()` immediately.

### How to edit animations

Each animation file uses GSAP timelines. Key properties to adjust:

| Property | Effect |
|----------|--------|
| `duration` | How long the animation takes (seconds) |
| `delay` / `stagger` | Time between multiple elements |
| `ease` | Animation curve (e.g. `"power3.out"`) |
| `y` / `opacity` | Movement distance and fade |

Example — slow down hero reveals in `vanilla/js/hero.js`:

```javascript
duration: 0.8,  // Change to 1.5 for slower
```

### Files responsible for animations

| File | Role |
|------|------|
| `vanilla/js/preloader.js` | Loading screen & intro word sequence |
| `vanilla/js/hero.js` | Hero section animations |
| `vanilla/js/scroll.js` | Scroll-triggered reveals, timeline, Lenis |
| `vanilla/js/projects.js` | Project carousel scroll & card entrance |
| `vanilla/js/booking-cta.js` | Booking section animations |
| `vanilla/js/cursor.js` | Custom cursor & magnetic effect |
| `vanilla/js/navigation.js` | Header scroll state & nav highlight |
| `vanilla/js/contact.js` | Form validation shake animation |
| `vanilla/css/animations.css` | Starting states for animated elements |

---

## Images & Assets

### Asset folder structure

```
vanilla/assets/
├── img/
│   ├── dark-mode.png         ← Logo (dark theme)
│   ├── light-mode.png        ← Logo (light theme)
│   ├── profile.webp          ← About section photo
│   ├── og-image.jpg          ← Social sharing preview image
│   └── projects/             ← Optional local project screenshots
│       └── (your-screenshots.jpg)
└── video/
    └── reel.mp4              ← Booking CTA showreel
```

### How to replace images

1. Prepare your new image at the recommended size (see [Recommended image sizes](#recommended-image-sizes)).
2. Save it to the correct folder with the **same filename** as the file you are replacing.
3. Refresh the browser. You may need a hard refresh (Ctrl+Shift+R) if the old image is cached.

### How to optimize images

| Format | Best for |
|--------|----------|
| **WebP** | Photos (profile, project screenshots) — smallest file size |
| **PNG** | Logos with transparency |
| **JPG** | Open Graph / social sharing images |
| **MP4** | Video (compress to under 15 MB) |

**Recommended tools:**

- [Squoosh](https://squoosh.app/) — Free online image compression
- [TinyPNG](https://tinypng.com/) — PNG/JPG compression
- **ffmpeg** or **HandBrake** — Video compression

**Example ffmpeg command for video:**

```bash
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow vanilla/assets/video/reel.mp4
```

---

## SEO Management

Search engine settings are spread across a few files.

### How to update the page title

**File:** `vanilla/index.html` (line ~6)

```html
<title>Rahul Choubey | Shopify Developer</title>
```

### How to update the meta description

**File:** `vanilla/index.html` (line ~7)

```html
<meta name="description" content="Your description here..." />
```

Keep it under **160 characters** for best display in search results.

### How to update Open Graph (social sharing)

**File:** `vanilla/index.html` (lines ~14–23)

| Tag | Purpose |
|-----|---------|
| `og:title` | Title shown when link is shared |
| `og:description` | Description shown when link is shared |
| `og:image` | Preview image (1200 × 630 px) |
| `og:url` | Canonical URL of the site |

Also update the **Twitter Card** tags (lines ~25–29) to match.

The OG image file lives at `vanilla/assets/img/og-image.jpg`.

### How to update the canonical URL

**File:** `vanilla/index.html` (line ~12)

```html
<link rel="canonical" href="https://rahulchoubey.netlify.app/" />
```

Change this if your domain changes.

### How to update structured data (JSON-LD)

**File:** `vanilla/index.html` (lines ~40–60)

The `<script type="application/ld+json">` block provides Person schema for Google. Update name, job title, email, URL, and social links there.

### How to update the sitemap

**File:** `vanilla/sitemap.xml`

```xml
<url>
  <loc>https://rahulchoubey.netlify.app/</loc>
  <lastmod>2026-06-10</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>
```

Update `<loc>` if your domain changes. Update `<lastmod>` whenever you make significant content changes.

### How to update robots.txt

**File:** `vanilla/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://rahulchoubey.netlify.app/sitemap.xml
```

Change the Sitemap URL if your domain changes. To block search engines entirely (not recommended), change `Allow: /` to `Disallow: /`.

---

## Deployment Guide

The site is a **static website** — no build step required. Netlify serves the `vanilla/` folder directly.

### GitHub deployment process

The project uses Git for version control.

**Typical workflow:**

1. Make your content changes locally.
2. Test with `npm run dev`.
3. Stage and commit:
   ```bash
   git add .
   git commit -m "Update project list and bio"
   ```
4. Push to GitHub:
   ```bash
   git push origin main
   ```
5. If Netlify is connected to the repo, it deploys automatically.

### Netlify deployment process

Configuration is in `netlify.toml` at the project root:

```toml
[build]
  publish = "vanilla"
```

This tells Netlify to publish the `vanilla/` folder with no build command.

**Initial setup (one time):**

1. Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site → Import an existing project**.
3. Connect your GitHub repository.
4. Set publish directory to `vanilla` (Netlify reads this from `netlify.toml` automatically).
5. Deploy.

**Forms setup:**

After first deploy, go to **Netlify dashboard → Forms**. The `contact` form should appear automatically because of `data-netlify="true"` in the HTML.

### How to publish updates

1. Edit files locally and test.
2. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "Describe your changes"
   git push origin main
   ```
3. Netlify rebuilds and publishes within ~1 minute.
4. Verify changes on your live URL.

### How to rollback changes

**Option A — Netlify deploy rollback (fastest):**

1. Go to **Netlify dashboard → Deploys**.
2. Find a previous successful deploy.
3. Click **Publish deploy** on the version you want to restore.

**Option B — Git revert:**

```bash
git log --oneline          # Find the commit to revert to
git revert HEAD            # Undo the last commit
git push origin main       # Deploy the revert
```

**Option C — Reset to a specific commit (use with caution):**

```bash
git log --oneline
git checkout <commit-hash> -- vanilla/js/data.js   # Restore one file
git commit -m "Restore data.js from previous version"
git push origin main
```

---

## Maintenance Guide

### Common tasks

| Task | How often | What to do |
|------|-----------|------------|
| Update projects | As needed | Edit `projects` in `data.js` |
| Update experience | When jobs change | Edit `experience` in `data.js` |
| Refresh bio | Periodically | Edit `about.bio` in `data.js` |
| Replace showreel | When new reel is ready | Replace `assets/video/reel.mp4` |
| Update OG image | When branding changes | Replace `assets/img/og-image.jpg` |
| Check form submissions | Weekly | Netlify dashboard → Forms |
| Update sitemap date | After major changes | Edit `sitemap.xml` lastmod |
| Update copyright year | Automatic | Footer year is set by JavaScript |

### Common issues

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| Page is blank / no styles | Opened via `file://` instead of local server | Run `npm run dev` and use http://127.0.0.1:5501 |
| Changes not showing | Browser cache | Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac) |
| Project screenshots show "Preview Coming Soon" | mShots service slow or URL unreachable | Wait and refresh; or add a local `image` field |
| Contact form fails locally | Netlify Forms only works on deployed site | Test on the live Netlify URL |
| Video not playing | File missing or too large | Ensure `reel.mp4` exists and is under 15 MB |
| Profile photo shows "RC" initials | Image file missing | Add `profile.webp` to `assets/img/` |
| Port 5501 already in use | Another server running | Run `pkill -f "http.server 5501"` then restart |
| Theme not persisting | Private/incognito browsing | localStorage may be blocked — normal behavior |

### Troubleshooting

**"Local server required" full-screen message**

You opened `index.html` directly. Start the dev server instead.

**JavaScript changes have no effect**

1. Confirm you saved the file.
2. Hard refresh the browser.
3. Check the browser console (F12 → Console) for errors.

**Netlify deploy succeeded but site looks wrong**

1. Confirm `netlify.toml` publish directory is `vanilla`.
2. Check that you pushed changes to the correct branch (`main`).
3. Clear CDN cache: Netlify dashboard → Deploys → Trigger deploy → Clear cache and deploy.

**Form submissions not appearing in Netlify**

1. Ensure the site is deployed on Netlify (not just GitHub Pages).
2. Check that `data-netlify="true"` is on the form.
3. After first deploy, Netlify must detect the form — redeploy if needed.

---

## Quick Edit Reference

| Task | File to Edit | Location / Notes |
|------|--------------|------------------|
| Change site name, email, phone | `vanilla/js/data.js` | `site` object at top of file |
| Change Hero eyebrow text | `vanilla/js/data.js` | `site.title` + `site.yearsExperience` |
| Change Hero title (line 1) | `vanilla/index.html` | `[data-split]` span in `.hero__title` |
| Change Hero rotating names | `vanilla/js/data.js` | `heroProjects` array |
| Change Hero subtitle | `vanilla/index.html` | `.hero__subtitle` |
| Change Hero CTA buttons | `vanilla/index.html` | `.hero__actions` |
| Change Hero stats | `vanilla/index.html` | `.hero__stats` blocks |
| Change intro animation words | `vanilla/js/data.js` | `introSequence` array |
| Change logo (dark mode) | `vanilla/assets/img/dark-mode.png` | Replace image file |
| Change logo (light mode) | `vanilla/assets/img/light-mode.png` | Replace image file |
| Add nav menu item | `vanilla/index.html` | Inside `#navLinks` ul |
| Remove nav menu item | `vanilla/index.html` | Delete `<li>` from `#navLinks` |
| Change "Let's Talk" button | `vanilla/index.html` | Last item in `#navLinks` |
| Update bio paragraphs | `vanilla/js/data.js` | `about.bio` array |
| Update about highlights | `vanilla/js/data.js` | `about.highlights` array |
| Update achievement stats | `vanilla/js/data.js` | `achievements` array |
| Change profile photo | `vanilla/assets/img/profile.webp` | Replace image file |
| Change about badge text | `vanilla/index.html` | `.about__badge` |
| Add a service | `vanilla/js/data.js` | Add object to `services` array |
| Remove a service | `vanilla/js/data.js` | Delete object from `services` |
| Edit service content | `vanilla/js/data.js` | Edit object in `services` array |
| Change services section heading | `vanilla/index.html` | Services `.section-header` |
| Add a project | `vanilla/js/data.js` | Add object to `projects` array |
| Remove a project | `vanilla/js/data.js` | Delete object from `projects` |
| Edit project details | `vanilla/js/data.js` | Edit object in `projects` array |
| Use local project screenshot | `vanilla/js/data.js` | Add `image: "assets/img/projects/name.jpg"` |
| Add project screenshot file | `vanilla/assets/img/projects/` | Upload image (1200×675 recommended) |
| Change work section heading | `vanilla/index.html` | Work `.section-header` |
| Add experience entry | `vanilla/js/data.js` | Add object to top of `experience` array |
| Remove experience entry | `vanilla/js/data.js` | Delete object from `experience` array |
| Edit experience entry | `vanilla/js/data.js` | Edit object in `experience` array |
| Update booking section text | `vanilla/index.html` | Section `id="cta"` |
| Update booking chips | `vanilla/js/data.js` | `bookingCta.chips` array |
| Replace showreel video | `vanilla/assets/video/reel.mp4` | Keep under 15 MB; path set in `bookingCta.video.src` |
| Change booking CTA buttons | `vanilla/index.html` | `.booking-cta__actions` |
| Update contact email | `vanilla/js/data.js` | `site.email` |
| Update contact description | `vanilla/index.html` | `.contact__desc` |
| Update LinkedIn / GitHub links | `vanilla/index.html` | `.contact__links` anchors |
| Edit form field labels | `vanilla/index.html` | `#contactForm` labels |
| Change form error email | `vanilla/js/contact.js` | `.catch()` block message |
| Change theme colors (dark) | `vanilla/css/tokens.css` | `:root` variables |
| Change theme colors (light) | `vanilla/css/tokens.css` | `body.light-theme` variables |
| Change page title | `vanilla/index.html` | `<title>` tag |
| Change meta description | `vanilla/index.html` | `<meta name="description">` |
| Change Open Graph tags | `vanilla/index.html` | `og:*` meta tags |
| Change social preview image | `vanilla/assets/img/og-image.jpg` | 1200×630 JPG |
| Change canonical URL | `vanilla/index.html` | `<link rel="canonical">` |
| Update JSON-LD schema | `vanilla/index.html` | `<script type="application/ld+json">` |
| Update sitemap | `vanilla/sitemap.xml` | `<loc>` and `<lastmod>` |
| Update robots.txt | `vanilla/robots.txt` | Sitemap URL |
| Disable animations | `vanilla/js/main.js` | Comment out init function calls |
| Edit scroll reveal speed | `vanilla/js/scroll.js` | `duration` values |
| Edit hero animation | `vanilla/js/hero.js` | Timeline `duration` / `stagger` |
| Deploy to Netlify | Git push to `main` | Auto-deploys via `netlify.toml` |
| Rollback deploy | Netlify dashboard | Deploys → Publish previous deploy |
| Run site locally | Terminal | `npm run dev` → http://127.0.0.1:5501 |

---

*Last updated: June 2026. For developer-level notes, see also `README.md` and `vanilla/README.md` in the project root.*
