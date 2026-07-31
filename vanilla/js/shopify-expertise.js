import { shopifyExpertise } from "./data.js";
import { escapeHtml } from "./utils.js";

const ICONS = {
  theme: "◈",
  sections: "▦",
  plus: "★",
  performance: "⚡",
  bundle: "⊞",
  cart: "🛒",
  checkout: "✓",
  metaobjects: "⬡",
  metafields: "◆",
  search: "⌕",
  liquid: "💧",
  os2: "2.0",
};

export function renderShopifyExpertise() {
  const grid = document.getElementById("shopifyGrid");
  if (!grid) return;

  grid.innerHTML = shopifyExpertise
    .map(
      (item) => `
    <article class="expertise-card" data-reveal>
      <span class="expertise-card__icon" aria-hidden="true">${ICONS[item.icon] || "◈"}</span>
      <h3 class="expertise-card__title">${escapeHtml(item.title)}</h3>
      <p class="expertise-card__desc">${escapeHtml(item.description)}</p>
    </article>`
    )
    .join("");
}

export function initShopifyExpertise() {
  if (typeof gsap === "undefined") return;

  gsap.utils.toArray(".expertise-card").forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      delay: i * 0.05,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 92%",
        toggleActions: "play none none none",
      },
    });
  });
}
