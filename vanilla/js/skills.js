import { skills } from "./data.js";
import { escapeHtml } from "./utils.js";

const CAT_ICONS = {
  shopify: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  frontend: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  backend: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/></svg>`,
  tools: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
};

const SKILL_ICONS = {
  shopify: "🛍",
  plus: "★",
  liquid: "💧",
  html: "H",
  css: "C",
  scss: "S",
  js: "JS",
  react: "⚛",
  graphql: "◈",
  node: "N",
  api: "⬡",
  git: "⎇",
  github: "⌥",
  vite: "⚡",
  theme: "◈",
  performance: "⚡",
  tools: "🔧",
};

export function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (cat) => `
    <article class="skill-card glass" data-reveal>
      <div class="skill-card__icon">${CAT_ICONS[cat.icon] || CAT_ICONS.tools}</div>
      <h3 class="skill-card__title">${escapeHtml(cat.category)}</h3>
      <ul class="skill-card__list skill-card__list--icons">
        ${cat.items
          .map(
            (item) => `
          <li>
            <span class="skill-pill">
              <span class="skill-pill__icon" aria-hidden="true">${SKILL_ICONS[item.icon] || "•"}</span>
              ${escapeHtml(item.name)}
            </span>
          </li>`
          )
          .join("")}
      </ul>
    </article>`
    )
    .join("");
}

export function initSkills() {
  if (typeof gsap === "undefined") return;

  gsap.utils.toArray(".skill-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: i * 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
    });
  });
}
