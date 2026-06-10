# Rahul Choubey — Premium Portfolio (Vanilla)

Production-grade personal portfolio built with HTML5, CSS3, JavaScript (ES modules), GSAP, ScrollTrigger, and Lenis.

Inspired by agency-level quality — not a clone of any reference site.

## Quick Start

```bash
# From project root
npm run dev

# Or from vanilla/ directly
python3 -m http.server 5501
```

Open **http://127.0.0.1:5501** (or the port shown).

> If a port shows "empty reply", kill stale servers: `pkill -f "http.server 8765"`

> ES modules require a local server — do not open `index.html` directly via `file://`.

## Structure

```
vanilla/
├── index.html
├── css/
│   ├── tokens.css       # Design tokens
│   ├── base.css         # Reset, utilities
│   ├── components.css   # Nav, buttons, forms
│   ├── sections.css     # Page sections
│   └── animations.css   # Motion utilities
├── js/
│   ├── data.js          # Content (single source of truth)
│   ├── main.js          # Bootstrap
│   ├── preloader.js     # Intro sequence
│   ├── hero.js          # Hero animations
│   ├── services.js      # Services list
│   ├── projects.js      # Work carousel
│   ├── scroll.js        # Lenis + ScrollTrigger
│   └── ...
└── assets/              # Images (future)
```

## Customize Content

Edit `js/data.js` to update projects, experience, services, and contact info.

## Tech

- HTML5 / CSS3 / ES6+ modules
- GSAP 3.12 + ScrollTrigger
- Lenis smooth scroll
- Google Fonts: Syne + DM Sans

## Accessibility

- `prefers-reduced-motion` bypasses intro, pins, and custom cursor
- Skip-to-content link
- `aria-live` regions for rotating hero text
- Keyboard-accessible service items

## Security

- Dynamic HTML uses `escapeHtml()` for all `data.js` content
- Project URLs validated via `isSafeUrl()` (http/https only)
- Contact form: client-side validation, `maxlength`, control-char stripping
- External links use `rel="noopener noreferrer"`
- Contact form is demo-only (no backend) — wire Formspree/EmailJS for production

### Production hardening checklist

- [ ] Add `integrity` (SRI) hashes to CDN script tags
- [ ] Serve over HTTPS with security headers (CSP, X-Frame-Options)
- [ ] Connect form to a trusted backend with rate limiting
- [ ] Pin CDN dependency versions (already pinned in `index.html`)
