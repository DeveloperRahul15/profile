import { achievements, about, experience, site } from "./data.js";
import { escapeHtml } from "./utils.js";

export function renderAchievements() {
  const grid = document.getElementById("achievementsGrid");
  if (!grid) return;

  grid.innerHTML = achievements
    .map(
      (a) => `
    <div class="achievement-card glass" data-reveal>
      <span class="achievement-card__value">${escapeHtml(a.value)}</span>
      <span class="achievement-card__label">${escapeHtml(a.label)}</span>
    </div>`
    )
    .join("");
}

export function renderExperience() {
  const timeline = document.getElementById("timeline");
  if (!timeline) return;

  const items = experience
    .map(
      (job) => `
    <article class="timeline__item" data-reveal>
      <div class="timeline__dot"></div>
      <div class="timeline__card glass">
        <span class="timeline__period">${escapeHtml(job.period)}</span>
        <h3 class="timeline__role">${escapeHtml(job.role)}</h3>
        <p class="timeline__company">${escapeHtml(job.company)} · ${escapeHtml(job.location)}</p>
        <ul class="timeline__achievements">
          ${job.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </div>
    </article>`
    )
    .join("");

  timeline.innerHTML = `
    <div class="timeline__line"><div class="timeline__line-fill" id="timelineFill"></div></div>
    ${items}`;
}

export function populateStaticContent() {
  document.querySelectorAll("[data-site-name]").forEach((el) => {
    el.textContent = site.name;
  });

  const heroEyebrow = document.getElementById("heroEyebrow");
  if (heroEyebrow) {
    heroEyebrow.textContent = `${site.title} · ${site.yearsExperience} Years`;
  }

  about.bio.forEach((paragraph, i) => {
    const el = document.getElementById(`aboutBio${i}`);
    if (!el) return;
    if (i === 0) {
      el.innerHTML =
        "I'm <strong>Rahul Choubey</strong>, a Shopify Developer with 4.5+ years building high-performance e-commerce experiences. From custom Liquid themes to international market rollouts, I help brands transform storefronts into conversion engines.";
    } else {
      el.innerHTML =
        "Currently at <strong>Brainvire Infotech</strong>, I work with enterprise clients — delivering pixel-perfect themes, optimizing Core Web Vitals, and integrating AI-assisted development workflows.";
    }
  });

  const highlights = document.getElementById("aboutHighlights");
  if (highlights) {
    highlights.innerHTML = about.highlights
      .map((h) => `<li data-reveal>${escapeHtml(h)}</li>`)
      .join("");
  }

  const emailLink = document.getElementById("contactEmail");
  if (emailLink && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.email)) {
    emailLink.href = `mailto:${encodeURIComponent(site.email)}`;
    if (emailLink.lastElementChild) {
      emailLink.lastElementChild.textContent = site.email;
    }
  }

  initAboutPhoto();
}

/**
 * Loads assets/img/profile.* trying each extension in order.
 * Falls back to the "RC" monogram if no image file is found.
 */
const PHOTO_EXTENSIONS = ["webp", "avif", "png", "jpg", "jpeg", "svg"];

function initAboutPhoto() {
  const img = document.getElementById("aboutPhoto");
  if (!img) return;

  const avatar = img.closest(".about__avatar");
  let index = 0;

  const tryNext = () => {
    if (index >= PHOTO_EXTENSIONS.length) {
      if (avatar) avatar.classList.add("is-fallback");
      return;
    }
    img.src = `assets/img/profile.${PHOTO_EXTENSIONS[index]}`;
    index += 1;
  };

  img.addEventListener("error", tryNext);
  img.addEventListener("load", () => {
    if (avatar) avatar.classList.remove("is-fallback");
  });

  tryNext();
}
