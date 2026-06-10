import { initIntro } from "./preloader.js";
import { initCursor, initMagnetic } from "./cursor.js";
import { initNavigation, initFooter } from "./navigation.js";
import { initTheme } from "./theme.js";
import { initHero } from "./hero.js";
import { renderServices, initServices } from "./services.js";
import { renderProjects, initProjects } from "./projects.js";
import {
  initSmoothScroll,
  initScrollReveals,
  initTimeline,
  refreshScroll,
} from "./scroll.js";
import { initContactForm } from "./contact.js";
import { renderBookingCta, initBookingCta } from "./booking-cta.js";
import { renderAchievements, renderExperience, populateStaticContent } from "./render.js";
import { isTouch } from "./utils.js";

function bootstrap() {
  if (isTouch) document.body.classList.add("is-touch");

  populateStaticContent();
  renderServices();
  renderProjects();
  renderAchievements();
  renderExperience();
  renderBookingCta();

  initTheme();
  initFooter();
  initNavigation();
  initContactForm();

  initIntro(() => {
    if (typeof gsap !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    initSmoothScroll();
    initCursor();
    initMagnetic();
    initHero();
    initServices();
    initProjects();
    initScrollReveals();
    initTimeline();
    initBookingCta();

    refreshScroll();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(refreshScroll, 250);
});
