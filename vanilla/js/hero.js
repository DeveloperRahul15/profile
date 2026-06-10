import { heroProjects } from "./data.js";
import { prefersReducedMotion, splitText } from "./utils.js";

export function initHero() {
  if (typeof gsap === "undefined") return;

  const isNarrow = window.matchMedia("(max-width: 768px)").matches;
  const splitEls = document.querySelectorAll("[data-split]");
  if (!isNarrow && !prefersReducedMotion) splitText(splitEls);

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (!isNarrow && !prefersReducedMotion) {
    tl.to(".hero__line .char", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.025,
      ease: "power4.out",
    }, 0.2);
  } else {
    tl.fromTo(
      "[data-split]",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.2
    );
  }

  tl
    .to("[data-reveal].hero__eyebrow, .hero__subtitle, .hero__actions, .hero__stats", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
    }, 0.5)
    .from(".scroll-indicator", { opacity: 0, y: 20, duration: 0.6 }, 1);

  initRotatingProjects();
}

function initRotatingProjects() {
  const el = document.getElementById("heroRotate");
  const live = document.getElementById("heroRotateLive");
  if (!el || !heroProjects.length) return;

  let index = 0;

  function setProject(i) {
    const name = heroProjects[i];
    el.textContent = name;
    if (live) live.textContent = name;
  }

  setProject(0);

  if (prefersReducedMotion) return;

  setInterval(() => {
    index = (index + 1) % heroProjects.length;
    if (typeof gsap !== "undefined") {
      gsap.to(el, {
        opacity: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setProject(index);
          gsap.fromTo(
            el,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
          );
        },
      });
    } else {
      setProject(index);
    }
  }, 3000);
}
