export const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

export const isTouch =
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

export function splitText(elements) {
  elements.forEach((el) => {
    const text = el.textContent;
    el.textContent = "";
    el.setAttribute("aria-label", text);
    [...text].forEach((char) => {
      const span = document.createElement("span");
      span.className = char === " " ? "char char--space" : "char";
      span.setAttribute("aria-hidden", "true");
      span.textContent = char === " " ? "\u00A0" : char;
      el.appendChild(span);
    });
    applySplitGradient(el);
  });
}

/** Align gradient across split hero characters so each letter stays visible. */
export function applySplitGradient(el) {
  if (!el?.classList.contains("hero__title--gradient")) return;

  const chars = el.querySelectorAll(".char");
  if (!chars.length) return;

  const width = el.offsetWidth;
  if (!width) return;

  const gradient =
    getComputedStyle(document.documentElement).getPropertyValue("--gradient-primary").trim() ||
    "linear-gradient(135deg, #fed660 0%, #7c5cff 100%)";

  chars.forEach((span) => {
    const x = span.offsetLeft;
    span.style.background = gradient;
    span.style.backgroundSize = `${width}px 100%`;
    span.style.backgroundPosition = `-${x}px 0`;
    span.style.webkitBackgroundClip = "text";
    span.style.backgroundClip = "text";
    span.style.webkitTextFillColor = "transparent";
    span.style.color = "transparent";
  });
}

export function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

export function isSafeUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}
