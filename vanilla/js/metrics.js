import { featuredMetrics } from "./data.js";
import { prefersReducedMotion } from "./utils.js";

function parseMetricValue(raw) {
  const str = String(raw);
  const suffix = str.replace(/[\d.]/g, "") || "";
  const num = parseFloat(str.replace(/[^\d.]/g, ""));
  return { num: Number.isFinite(num) ? num : 0, suffix };
}

function animateCounter(el, target, suffix, duration = 1.8) {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      el.textContent = `${Math.round(obj.val)}${suffix}`;
    },
  });
}

export function renderMetrics(containerId = "metricsGrid") {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  const isHero = containerId === "heroMetrics";

  grid.innerHTML = featuredMetrics
    .map(
      (m, i) =>
        isHero
          ? `
    <div class="hero__stat">
      <span class="hero__stat-num${m.static ? " hero__stat-num--static" : ""}" data-count="${m.value}" ${m.static ? "" : `data-hero-metric="${i}"`}>${m.value}</span>
      <span class="hero__stat-label">${m.label}</span>
    </div>`
          : `
    <div class="metric-card glass" data-reveal>
      <span class="metric-card__value${m.static ? " metric-card__value--static" : ""}" data-count="${m.value}" data-static="${m.static ? "true" : "false"}">${m.value}</span>
      <span class="metric-card__label">${m.label}</span>
    </div>`
    )
    .join("");
}

export function initMetrics(containerId = "metricsGrid") {
  const grid = document.getElementById(containerId);
  if (!grid || typeof gsap === "undefined") return;

  if (prefersReducedMotion) return;

  grid.querySelectorAll("[data-count]").forEach((el) => {
    if (el.dataset.static === "true" || el.classList.contains("hero__stat-num--static")) return;

    const { num, suffix } = parseMetricValue(el.dataset.count);
    if (!num) return;

    el.textContent = `0${suffix}`;

    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => animateCounter(el, num, suffix),
    });
  });
}
