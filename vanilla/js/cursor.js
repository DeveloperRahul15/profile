import { isTouch, prefersReducedMotion } from "./utils.js";

export function initCursor() {
  if (isTouch || prefersReducedMotion) return;

  const cursor = document.getElementById("cursor");
  if (!cursor || typeof gsap === "undefined") return;

  const dot = cursor.querySelector(".cursor__dot");
  const ring = cursor.querySelector(".cursor__ring");
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.set(dot, { x: mouseX, y: mouseY });
  });

  gsap.ticker.add(() => {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    gsap.set(ring, { x: ringX, y: ringY });
  });

  document
    .querySelectorAll("a, button, .magnetic, input, textarea, .service-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
}

export function initMagnetic() {
  if (isTouch || prefersReducedMotion || typeof gsap === "undefined") return;

  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: "power2.out" });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
    });
  });
}
