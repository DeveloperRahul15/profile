import { initIntro } from "./preloader.js";

import { initCursor, initMagnetic } from "./cursor.js";

import { initNavigation, initFooter } from "./navigation.js";

import { initTheme } from "./theme.js";

import { initHero, refreshHeroNameGradient } from "./hero.js";

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

import { renderExperience, populateStaticContent } from "./render.js";

import { renderSkills, initSkills } from "./skills.js";

import { renderTestimonials, initTestimonials } from "./testimonials.js";

import { initHeroBackground } from "./hero-bg.js";

import { renderHeroIcons, initHeroIcons } from "./hero-icons.js";

import { renderMetrics, initMetrics } from "./metrics.js";

import { initScrollProgress } from "./scroll-progress.js";

import { renderGithub, initGithub } from "./github.js";

import { isTouch } from "./utils.js";



function bootstrap() {

  if (isTouch) document.body.classList.add("is-touch");



  populateStaticContent();

  renderServices();

  renderProjects();

  renderExperience();

  renderBookingCta();

  renderSkills();

  renderTestimonials();

  renderHeroIcons();

  renderMetrics("heroMetrics");

  renderGithub();



  initTheme();

  initFooter();

  initNavigation();

  initContactForm();



  initIntro(() => {

    if (typeof gsap !== "undefined") {

      gsap.registerPlugin(ScrollTrigger);

    }



    initSmoothScroll();

    initScrollProgress();

    initCursor();

    initMagnetic();

    initHeroBackground();

    initHeroIcons();

    initHero();

    initServices();

    initProjects();

    initScrollReveals();

    initTimeline();

    initBookingCta();

    initSkills();

    initTestimonials();

    initMetrics("heroMetrics");

    initGithub();



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
  resizeTimer = setTimeout(() => {
    refreshScroll();
    refreshHeroNameGradient();
  }, 250);
});

