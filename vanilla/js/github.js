import { githubSection } from "./data.js";
import { escapeHtml } from "./utils.js";

export function renderGithub() {
  const section = document.getElementById("githubSection");
  if (!section) return;

  const langBars = githubSection.languages
    .map(
      (l) => `
    <div class="github__lang">
      <div class="github__lang-head">
        <span>${escapeHtml(l.name)}</span>
        <span>${l.percent}%</span>
      </div>
      <div class="github__lang-bar"><span style="width:${l.percent}%"></span></div>
    </div>`
    )
    .join("");

  const repos = githubSection.repos
    .map(
      (r) => `
    <a href="${escapeHtml(githubSection.url)}" target="_blank" rel="noopener noreferrer" class="github__repo glass">
      <span class="github__repo-name">${escapeHtml(r.name)}</span>
      <p class="github__repo-desc">${escapeHtml(r.desc)}</p>
      <span class="github__repo-stars">★ ${escapeHtml(r.stars)}</span>
    </a>`
    )
    .join("");

  section.innerHTML = `
    <div class="github__panel github__panel--langs glass" data-reveal>
      <h3 class="github__panel-title">Top Languages</h3>
      ${langBars}
      <ul class="github__highlights">
        ${githubSection.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
      </ul>
      <a href="${escapeHtml(githubSection.url)}" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm">@${escapeHtml(githubSection.username)}</a>
    </div>
    <div class="github__repos">${repos}</div>`;
}

export function initGithub() {
  if (typeof gsap === "undefined") return;

  gsap.utils.toArray("#githubSection .github__panel, #githubSection .github__repo").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 32,
      duration: 0.65,
      delay: i * 0.05,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
    });
  });
}
