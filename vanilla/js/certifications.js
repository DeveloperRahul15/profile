import { certifications } from "./data.js";
import { escapeHtml } from "./utils.js";

export function renderCertifications() {
  const grid = document.getElementById("certificationsGrid");
  if (!grid) return;

  grid.innerHTML = certifications
    .map(
      (c) => `
    <article class="cert-card glass" data-reveal>
      <span class="cert-card__badge">${escapeHtml(c.status)}</span>
      <h3 class="cert-card__title">${escapeHtml(c.title)}</h3>
      <p class="cert-card__issuer">${escapeHtml(c.issuer)} · ${escapeHtml(c.year)}</p>
    </article>`
    )
    .join("");
}

export function initCertifications() {
  if (typeof gsap === "undefined") return;

  gsap.utils.toArray(".cert-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.96,
      duration: 0.6,
      delay: i * 0.08,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
    });
  });
}
