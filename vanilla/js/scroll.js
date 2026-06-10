import { prefersReducedMotion } from "./utils.js";

let lenis = null;

export function initSmoothScroll() {
  if (prefersReducedMotion || typeof Lenis === "undefined") return null;

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  if (typeof ScrollTrigger !== "undefined") {
    lenis.on("scroll", ScrollTrigger.update);
  }

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
export function initScrollReveals() {
  if (typeof gsap === "undefined") return;

  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    if (el.closest(".hero")) return;

    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });
  });

  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      clipPath: "inset(0 100% 0 0)",
      duration: 1.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: title,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });
  });
}

export function initTimeline() {
  const fill = document.getElementById("timelineFill");
  const timeline = document.getElementById("timeline");
  if (!fill || !timeline || typeof gsap === "undefined") return;

  gsap.to(fill, {
    height: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: timeline,
      start: "top 60%",
      end: "bottom 40%",
      scrub: 1,
    },
  });

  gsap.utils.toArray(".timeline__dot").forEach((dot) => {
    gsap.from(dot, {
      scale: 0,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: dot,
        start: "top 78%",
        toggleActions: "play none none none",
      },
    });
  });
}

export function refreshScroll() {
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh();
  }
}
