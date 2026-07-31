import { whyHire } from "./data.js";
import { escapeHtml } from "./utils.js";

export function renderWhyHire() {
  const grid = document.getElementById("whyHireGrid");
  if (!grid) return;

  grid.innerHTML = whyHire
    .map(
      (item) => `
    <article class="why-card glass" data-reveal>
      <span class="why-card__check" aria-hidden="true">✓</span>
      <h3 class="why-card__title">${escapeHtml(item.title)}</h3>
      <p class="why-card__desc">${escapeHtml(item.desc)}</p>
    </article>`
    )
    .join("");
}

export function initWhyHire() {
  if (typeof gsap === "undefined") return;

  gsap.utils.toArray(".why-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: i * 0.05,
      ease: "power3.out",
      scrollTrigger: { trigger: card, start: "top 92%", toggleActions: "play none none none" },
    });
  });
}
