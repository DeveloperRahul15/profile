import { introSequence } from "./data.js";
import { prefersReducedMotion } from "./utils.js";

export function initIntro(onComplete) {
  const intro = document.getElementById("intro");
  const preloader = document.getElementById("preloader");
  const progress = document.getElementById("preloaderProgress");
  const percent = document.getElementById("preloaderPercent");

  if (prefersReducedMotion) {
    document.body.classList.remove("is-loading", "is-intro");
    intro?.remove();
    preloader?.remove();
    onComplete();
    return;
  }

  document.body.classList.add("is-loading", "is-intro");

  let loadProgress = 0;
  const loadInterval = setInterval(() => {
    loadProgress += Math.random() * 12 + 4;
    if (loadProgress >= 100) {
      loadProgress = 100;
      clearInterval(loadInterval);
      if (progress) progress.style.width = "100%";
      if (percent) percent.textContent = "100%";
      runIntroSequence(intro, preloader, onComplete);
    } else {
      if (progress) progress.style.width = loadProgress + "%";
      if (percent) percent.textContent = Math.floor(loadProgress) + "%";
    }
  }, 100);
}

function runIntroSequence(intro, preloader, onComplete) {
  if (!intro || typeof gsap === "undefined") {
    finishIntro(intro, preloader, onComplete);
    return;
  }

  const wordEl = intro.querySelector(".intro__word");
  if (!wordEl) {
    finishIntro(intro, preloader, onComplete);
    return;
  }

  preloader?.classList.add("is-hidden");

  const tl = gsap.timeline({
    onComplete: () => finishIntro(intro, preloader, onComplete),
  });

  introSequence.forEach((word, i) => {
    tl.call(() => {
      wordEl.textContent = word;
    }, null, i * 0.55);

    tl.fromTo(
      wordEl,
      { opacity: 0, scale: 0.92, filter: "blur(8px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.35, ease: "power2.out" },
      i * 0.55
    );

    if (i < introSequence.length - 1) {
      tl.to(
        wordEl,
        { opacity: 0, scale: 1.05, filter: "blur(6px)", duration: 0.25, ease: "power2.in" },
        i * 0.55 + 0.4
      );
    }
  });

  tl.to(intro, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, "+=0.3");
}

function finishIntro(intro, preloader, onComplete) {
  intro?.classList.add("is-hidden");
  preloader?.classList.add("is-hidden");
  document.body.classList.remove("is-loading", "is-intro");
  onComplete();
}
