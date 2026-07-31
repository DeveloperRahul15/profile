import { testimonials } from "./data.js";
import { escapeHtml, prefersReducedMotion } from "./utils.js";

export function renderTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  if (!track) return;

  track.innerHTML = `
    <div class="testimonials__slider" id="testimonialsSlider">
      ${testimonials
        .map(
          (t, i) => `
      <article class="testimonial-card glass${i === 0 ? " is-active" : ""}" data-slide="${i}">
        <div class="testimonial-card__quote" aria-hidden="true">"</div>
        <blockquote class="testimonial-card__text">${escapeHtml(t.quote)}</blockquote>
        <footer class="testimonial-card__author">
          <span class="testimonial-card__name">${escapeHtml(t.author)}</span>
          <span class="testimonial-card__role">${escapeHtml(t.role)} · ${escapeHtml(t.company)}</span>
        </footer>
      </article>`
        )
        .join("")}
    </div>
    <div class="testimonials__nav">
      <button type="button" class="testimonials__btn" id="testimonialPrev" aria-label="Previous testimonial">←</button>
      <div class="testimonials__dots" id="testimonialDots"></div>
      <button type="button" class="testimonials__btn" id="testimonialNext" aria-label="Next testimonial">→</button>
    </div>`;

  const dots = document.getElementById("testimonialDots");
  if (dots) {
    dots.innerHTML = testimonials
      .map((_, i) => `<button type="button" class="testimonials__dot${i === 0 ? " is-active" : ""}" data-slide-to="${i}" aria-label="Go to testimonial ${i + 1}"></button>`)
      .join("");
  }
}

export function initTestimonials() {
  const cards = document.querySelectorAll(".testimonial-card");
  const prev = document.getElementById("testimonialPrev");
  const next = document.getElementById("testimonialNext");
  const dots = document.querySelectorAll(".testimonials__dot");
  if (!cards.length) return;

  let current = 0;

  function goTo(index) {
    current = (index + cards.length) % cards.length;
    cards.forEach((c, i) => c.classList.toggle("is-active", i === current));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === current));

    if (!prefersReducedMotion && typeof gsap !== "undefined") {
      gsap.fromTo(cards[current], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    }
  }

  prev?.addEventListener("click", () => goTo(current - 1));
  next?.addEventListener("click", () => goTo(current + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => goTo(Number(dot.dataset.slideTo)));
  });

  if (!prefersReducedMotion) {
    setInterval(() => goTo(current + 1), 6000);
  }
}
