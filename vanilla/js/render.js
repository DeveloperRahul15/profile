import { about, experience, site } from "./data.js";
import { escapeHtml } from "./utils.js";

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
        ${job.technologies?.length ? `
        <div class="timeline__tech">
          ${job.technologies.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>` : ""}
        ${job.impact ? `<p class="timeline__impact"><strong>Business Impact:</strong> ${escapeHtml(job.impact)}</p>` : ""}
        <h4 class="timeline__achievements-title">Key Achievements</h4>
        <ul class="timeline__achievements">
          ${(job.achievements || job.highlights || []).map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
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
    heroEyebrow.textContent = `${site.title} · ${site.yearsExperience}`;
  }

  const heroTagline = document.getElementById("heroTagline");
  if (heroTagline) heroTagline.textContent = site.tagline;

  about.bio.forEach((paragraph, i) => {
    const el = document.getElementById(`aboutBio${i}`);
    if (!el) return;
    el.innerHTML = escapeHtml(paragraph);
  });

  const highlights = document.getElementById("aboutHighlights");
  if (highlights) {
    highlights.innerHTML = about.highlights
      .map((h) => `<li data-reveal>${escapeHtml(h)}</li>`)
      .join("");
  }

  const aboutCards = document.getElementById("aboutCards");
  if (aboutCards && about.cards) {
    aboutCards.innerHTML = about.cards
      .map(
        (c) => `
      <article class="about-card glass" data-reveal>
        <h3 class="about-card__title">${escapeHtml(c.title)}</h3>
        <p class="about-card__desc">${escapeHtml(c.desc)}</p>
      </article>`
      )
      .join("");
  }

  const availabilityEl = document.querySelectorAll("[data-availability]");
  availabilityEl.forEach((el) => {
    el.textContent = site.availability;
  });

  const whatsappLinks = document.querySelectorAll("[data-whatsapp]");
  whatsappLinks.forEach((link) => {
    if (site.whatsapp) link.setAttribute("href", site.whatsapp);
  });

  const calendlyLinks = document.querySelectorAll("[data-calendly]");
  calendlyLinks.forEach((link) => {
    if (site.calendly) link.setAttribute("href", site.calendly);
  });

  const heroLocation = document.getElementById("heroLocation");
  if (heroLocation) heroLocation.textContent = site.location;

  const heroName = document.getElementById("heroName");
  if (heroName) heroName.textContent = site.name;

  const heroTitle = document.getElementById("heroTitle");
  if (heroTitle) heroTitle.textContent = site.title;

  const resumeLinks = document.querySelectorAll("[data-resume]");
  resumeLinks.forEach((link) => {
    if (site.resume) link.setAttribute("href", site.resume);
  });

  const emailLink = document.getElementById("contactEmailBtn");
  if (emailLink && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(site.email)) {
    emailLink.href = `mailto:${encodeURIComponent(site.email)}`;
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
