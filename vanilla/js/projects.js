import { projects } from "./data.js";
import { escapeHtml, isSafeUrl } from "./utils.js";
import { initCaseStudies } from "./case-studies.js";

const SHOT_W = 1200;
const SHOT_H = 675;
const SHOT_RETRY_MS = 3500;
const SHOT_MAX_RETRIES = 6;

function shotUrl(url) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${SHOT_W}&h=${SHOT_H}`;
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

export function renderProjects() {
  const track = document.getElementById("projectsTrack");
  if (!track) return;

  track.innerHTML = projects
    .filter((p) => isSafeUrl(p.url))
    .map((p) => {
      const domain = escapeHtml(domainOf(p.url));
      const src = escapeHtml(p.image || shotUrl(p.url));
      const title = escapeHtml(p.title);
      const hasCase = p.id ? `data-case-study="${escapeHtml(p.id)}"` : "";

      return `
    <article class="project-card">
      <div class="project-card__frame">
        <div class="project-card__bar" aria-hidden="true">
          <span class="project-card__dots"><i></i><i></i><i></i></span>
          <span class="project-card__domain">${domain}</span>
        </div>
        <div class="project-card__viewport" data-gradient="${p.gradient}">
          <img class="project-card__shot" src="${src}" data-src="${src}" alt="${title} — homepage preview" width="${SHOT_W}" height="${SHOT_H}" loading="lazy" decoding="async" />
          <div class="project-card__placeholder" aria-hidden="true">
            <span class="project-card__ph-name">${title}</span>
            <span class="project-card__ph-domain">${domain}</span>
            <span class="project-card__ph-msg">Preview Coming Soon</span>
          </div>
        </div>
      </div>
      <div class="project-card__body">
        <span class="project-card__category">${escapeHtml(p.category)}</span>
        <h3 class="project-card__title">${title}</h3>
        <p class="project-card__desc">${escapeHtml(p.description)}</p>
        <div class="project-card__detail">
          ${p.challenge ? `<p><strong>Challenge:</strong> ${escapeHtml(p.challenge)}</p>` : ""}
          ${p.solution ? `<p><strong>Solution:</strong> ${escapeHtml(p.solution)}</p>` : ""}
          ${p.performance ? `<p class="project-card__performance"><strong>Performance:</strong> ${escapeHtml(p.performance)}</p>` : ""}
          ${p.impact ? `<p class="project-card__impact"><strong>Impact:</strong> ${escapeHtml(p.impact)}</p>` : ""}
        </div>
        <div class="project-card__tech">
          ${p.skills.map((s) => `<span>${escapeHtml(s)}</span>`).join("")}
        </div>
        <div class="project-card__actions">
          <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer" class="btn btn--sm btn--primary magnetic" data-magnetic>Live Demo</a>
          ${p.id ? `<button type="button" class="btn btn--sm btn--outline magnetic" data-magnetic ${hasCase}>Case Study</button>` : ""}
          ${p.github ? `<a href="${escapeHtml(p.github)}" target="_blank" rel="noopener noreferrer" class="btn btn--sm btn--ghost magnetic" data-magnetic>GitHub</a>` : ""}
        </div>
      </div>
    </article>`;
    })
    .join("");

  initShots(track);
  initCaseStudies(projects);
}

function initShots(track) {
  track.querySelectorAll(".project-card__shot").forEach((img) => {
    let attempts = 0;

    const onLoad = () => {
      const isLocal = !img.src.includes("mshots");
      const generating = !isLocal && img.naturalWidth < 600;
      if (!generating && img.naturalWidth > 0) {
        img.closest(".project-card__viewport").classList.add("is-loaded");
        return;
      }
      if (attempts >= SHOT_MAX_RETRIES) {
        showPlaceholder(img);
        return;
      }
      attempts += 1;
      setTimeout(() => {
        img.src = img.dataset.src + "&retry=" + attempts;
      }, SHOT_RETRY_MS);
    };

    img.addEventListener("load", onLoad);
    img.addEventListener("error", () => showPlaceholder(img));
    if (img.complete && img.naturalWidth > 0) onLoad();
  });
}

function showPlaceholder(img) {
  const viewport = img.closest(".project-card__viewport");
  img.style.display = "none";
  if (viewport) viewport.classList.add("is-fallback", "is-loaded");
}

export function initProjects() {
  const track = document.getElementById("projectsTrack");
  const progressBar = document.getElementById("projectsProgress");
  if (!track || typeof gsap === "undefined") return;

  const isDesktop = window.matchMedia("(min-width: 1025px)").matches;

  if (isDesktop) {
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 48);

    gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: ".projects__track-wrap",
        start: "top 18%",
        end: () => "+=" + Math.abs(getScrollAmount()),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressBar) progressBar.style.width = self.progress * 100 + "%";
        },
      },
    });

    gsap.from(track.querySelectorAll(".project-card"), {
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.1,
      clearProps: "opacity",
      scrollTrigger: {
        trigger: ".projects__track-wrap",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  } else {
    track.querySelectorAll(".project-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "opacity",
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
      });
    });
  }

  track.querySelectorAll(".project-card").forEach((card) => {
    const shot = card.querySelector(".project-card__shot");
    if (!shot) return;
    card.addEventListener("mouseenter", () => {
      gsap.to(shot, { scale: 1.05, duration: 0.6, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(shot, { scale: 1, duration: 0.6, ease: "power2.out" });
    });
  });
}
