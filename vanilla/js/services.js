import { services } from "./data.js";
import { escapeHtml } from "./utils.js";

const ICONS = {
  theme: "◈",
  setup: "⚙",
  migration: "→",
  performance: "⚡",
  features: "⊞",
  apps: "⊕",
  plus: "★",
};

export function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (s) => `
    <article class="service-card glass" tabindex="0">
      <span class="service-card__icon" aria-hidden="true">${ICONS[s.icon] || "◈"}</span>
      <span class="service-card__num">${s.id}</span>
      <h3 class="service-card__title">${escapeHtml(s.title)}</h3>
      <p class="service-card__desc">${escapeHtml(s.description)}</p>
      <div class="service-card__tags">
        ${s.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>
    </article>`
    )
    .join("");
}

export function initServices() {
  if (typeof gsap === "undefined") return;

  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  gsap.from(grid.querySelectorAll(".service-card"), {
    opacity: 0,
    y: 32,
    duration: 0.65,
    stagger: 0.07,
    ease: "power3.out",
    scrollTrigger: {
      trigger: grid,
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });

  gsap.utils.toArray(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -6, duration: 0.35, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.4, ease: "power2.out" });
    });
  });
}
