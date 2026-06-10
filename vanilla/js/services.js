import { services } from "./data.js";
import { escapeHtml } from "./utils.js";

export function renderServices() {
  const list = document.getElementById("servicesList");
  if (!list) return;

  list.innerHTML = services
    .map(
      (s, i) => `
    <li class="service-item${i === 0 ? " is-active" : ""}" data-service="${s.id}" tabindex="0" role="button" aria-expanded="${i === 0}">
      <span class="service-item__num">${s.id}</span>
      <h3 class="service-item__title">${escapeHtml(s.title)}</h3>
      <p class="service-item__desc">${escapeHtml(s.description)}</p>
      <div class="service-item__tags">
        ${s.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
      </div>
    </li>`
    )
    .join("");
}

export function initServices() {
  const items = document.querySelectorAll(".service-item");

  function activate(item) {
    items.forEach((el) => {
      const active = el === item;
      el.classList.toggle("is-active", active);
      el.setAttribute("aria-expanded", String(active));
    });
  }

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => activate(item));
    item.addEventListener("focus", () => activate(item));
    item.addEventListener("click", () => activate(item));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate(item);
      }
    });
  });
}
