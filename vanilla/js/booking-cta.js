import { bookingCta } from "./data.js";
import { escapeHtml, prefersReducedMotion } from "./utils.js";

const EASE = {
  reveal: "power3.out",
  cinematic: "power4.inOut",
};

export function renderBookingCta() {
  const chipsEl = document.getElementById("bookingChips");
  if (chipsEl) {
    chipsEl.innerHTML = bookingCta.chips
      .map(
        (chip, i) =>
          `<span class="booking-cta__chip${i === 0 ? " is-active" : ""}" data-chip="${i}">${escapeHtml(chip)}</span>`
      )
      .join("");
  }

  const video = document.getElementById("bookingVideo");
  if (video && bookingCta.video?.src) {
    video.dataset.src = bookingCta.video.src;
    if (bookingCta.video.poster) {
      video.poster = bookingCta.video.poster;
    }
  }
}

export function initBookingCta() {
  const section = document.getElementById("cta");
  if (!section || typeof gsap === "undefined") return;

  const reduced = prefersReducedMotion;
  const reveals = section.querySelectorAll("[data-booking-reveal]");
  const accentLine = section.querySelector(".booking-cta__accent-line");
  const ambient = section.querySelector(".booking-cta__ambient");
  const portal = section.querySelector(".booking-cta__portal");
  const video = document.getElementById("bookingVideo");
  const fallback = section.querySelector(".booking-cta__fallback");
  const chips = section.querySelectorAll(".booking-cta__chip");

  const frame = section.querySelector(".booking-cta__frame");

  if (reduced) {
    gsap.set(reveals, { opacity: 1, y: 0 });
    if (accentLine) gsap.set(accentLine, { scaleX: 1 });
    if (ambient) gsap.set(ambient, { opacity: 1, scale: 1 });
    if (portal) gsap.set(portal, { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", scale: 1 });
    initVideoPortal(section, video, fallback, frame, true);
    return;
  }

  gsap.set(reveals, { opacity: 0, y: 50 });
  if (accentLine) gsap.set(accentLine, { scaleX: 0, transformOrigin: "left center" });
  if (ambient) gsap.set(ambient, { opacity: 0, scale: 1.04 });
  if (portal) gsap.set(portal, { opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)", scale: 0.94 });
  if (video) gsap.set(video, { opacity: 0 });
  initVideoPortal(section, video, fallback, frame, false);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 72%",
      toggleActions: "play none none none",
    },
  });

  if (ambient) {
    tl.to(ambient, { opacity: 1, scale: 1, duration: 1.2, ease: EASE.reveal }, 0);
  }

  tl.to(reveals, { opacity: 1, y: 0, duration: 0.9, ease: EASE.reveal, stagger: 0.12 }, 0.15);

  if (accentLine) {
    tl.to(accentLine, { scaleX: 1, duration: 0.85, ease: EASE.cinematic }, 0.45);
  }

  if (portal) {
    tl.fromTo(
      portal,
      { opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)", scale: 0.94 },
      { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.3, ease: EASE.cinematic },
      0.35
    );
  }

  if (portal && window.matchMedia("(min-width: 769px)").matches) {
    gsap.to(portal, {
      y: -36,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }

  if (ambient) {
    gsap.to(ambient.querySelector(".booking-cta__grid-bg"), {
      y: 24,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  }

  initChipCycle(chips, reduced);
  initCtaHover(section);
}

function initVideoPortal(section, video, fallback, frame, reduced) {
  if (!video) return;

  const src = video.dataset.src;
  if (!src) {
    showFallback(video, fallback, frame);
    return;
  }

  const revealVideo = () => {
    if (frame) frame.classList.remove("is-loading");
    if (fallback) fallback.classList.remove("is-visible");
    gsap.to(video, { opacity: 1, duration: 0.8, ease: EASE.reveal });
  };

  const startLoad = () => {
    if (video.dataset.loaded === "true") return;
    video.dataset.loaded = "true";
    if (frame) frame.classList.add("is-loading");
    video.src = src;
    video.load();

    video.addEventListener(
      "error",
      () => showFallback(video, fallback, frame),
      { once: true }
    );

    const onReady = () => {
      if (!reduced && !prefersReducedMotion) {
        video.play().catch(() => {});
      }
      revealVideo();
    };

    video.addEventListener("canplay", onReady, { once: true });

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      onReady();
    }
  };

  if (reduced) {
    startLoad();
    if (video.readyState >= 2) revealVideo();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        startLoad();
        observer.disconnect();
      }
    },
    { rootMargin: "300px 0px" }
  );

  observer.observe(section);
}

function showFallback(video, fallback, frame) {
  if (frame) frame.classList.remove("is-loading");
  if (video) {
    video.style.display = "none";
    gsap.set(video, { opacity: 0 });
  }
  if (fallback) fallback.classList.add("is-visible");
}

function initChipCycle(chips, reduced) {
  if (reduced || chips.length < 2) return;

  let index = 0;

  setInterval(() => {
    chips[index].classList.remove("is-active");
    index = (index + 1) % chips.length;
    chips[index].classList.add("is-active");
  }, 3200);
}

function initCtaHover(section) {
  const buttons = section.querySelectorAll(".booking-cta__actions .btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      if (prefersReducedMotion) return;
      gsap.to(btn, { scale: 1.03, duration: 0.35, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.4, ease: "power2.out" });
    });
  });
}
