import { caseStudies } from "./data.js";
import { escapeHtml } from "./utils.js";

let modalEl = null;

function buildModal() {
  if (modalEl) return modalEl;

  modalEl = document.createElement("div");
  modalEl.className = "case-modal";
  modalEl.id = "caseModal";
  modalEl.setAttribute("role", "dialog");
  modalEl.setAttribute("aria-modal", "true");
  modalEl.setAttribute("aria-hidden", "true");
  modalEl.innerHTML = `
    <div class="case-modal__backdrop" data-case-close></div>
    <div class="case-modal__dialog glass">
      <button class="case-modal__close" type="button" data-case-close aria-label="Close case study">×</button>
      <div class="case-modal__content" id="caseModalContent"></div>
    </div>`;
  document.body.appendChild(modalEl);

  modalEl.querySelectorAll("[data-case-close]").forEach((el) => {
    el.addEventListener("click", closeCaseStudy);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalEl?.classList.contains("is-open")) closeCaseStudy();
  });

  return modalEl;
}

function renderCaseContent(id, project) {
  const cs = caseStudies[id];
  if (!cs) return `<p>Case study coming soon.</p>`;

  return `
    <span class="case-modal__label">${escapeHtml(project.category)}</span>
    <h2 class="case-modal__title">${escapeHtml(project.title)}</h2>
    <div class="case-modal__blocks">
      <section><h3>Overview</h3><p>${escapeHtml(cs.overview)}</p></section>
      <section><h3>Problem</h3><p>${escapeHtml(cs.problem)}</p></section>
      <section><h3>Solution</h3><p>${escapeHtml(cs.solution)}</p></section>
      <section><h3>Architecture</h3><p>${escapeHtml(cs.architecture)}</p></section>
      <section><h3>Technology Used</h3><div class="case-modal__tags">${cs.technologies.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}</div></section>
      <section><h3>Results</h3><ul>${cs.results.map((r) => `<li>${escapeHtml(r)}</li>`).join("")}</ul></section>
      <section><h3>Lessons Learned</h3><p>${escapeHtml(cs.lessons)}</p></section>
    </div>
    <div class="case-modal__actions">
      <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">Live Demo</a>
    </div>`;
}

export function openCaseStudy(id, project) {
  const modal = buildModal();
  const content = document.getElementById("caseModalContent");
  if (!content) return;

  content.innerHTML = renderCaseContent(id, project);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".case-modal__close")?.focus();
}

export function closeCaseStudy() {
  if (!modalEl) return;
  modalEl.classList.remove("is-open");
  modalEl.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

export function initCaseStudies(projects) {
  document.querySelectorAll("[data-case-study]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.dataset.caseStudy;
      const project = projects.find((p) => p.id === id);
      if (project) openCaseStudy(id, project);
    });
  });
}
