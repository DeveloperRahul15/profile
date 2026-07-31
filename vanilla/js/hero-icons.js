import { heroTechIcons } from "./data.js";
import { escapeHtml, prefersReducedMotion } from "./utils.js";

export function renderHeroIcons() {
  const container = document.getElementById("heroFloatingIcons");
  if (!container) return;

  container.innerHTML = heroTechIcons
    .map(
      (icon, i) => `
    <span class="hero__float-icon" style="--delay:${i * 0.4}s; --x:${icon.x}%; --y:${icon.y}%" aria-hidden="true">
      <span class="hero__float-icon-inner">${escapeHtml(icon.label)}</span>
    </span>`
    )
    .join("");
}

export function initHeroIcons() {
  if (prefersReducedMotion || typeof gsap === "undefined") return;

  gsap.utils.toArray(".hero__float-icon").forEach((icon) => {
    gsap.to(icon, {
      y: "+=12",
      duration: 2.5 + Math.random(),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  });
}
