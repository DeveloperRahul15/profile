const STORAGE_KEY = "theme";
const LIGHT_CLASS = "light-theme";

export function initTheme() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  syncToggle(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.add("theme-transition");
    const isLight = document.body.classList.toggle(LIGHT_CLASS);

    try {
      localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
    } catch {
      /* private mode — theme just won't persist */
    }

    syncToggle(toggle);

    window.setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 450);
  });
}

function syncToggle(toggle) {
  const isLight = document.body.classList.contains(LIGHT_CLASS);
  toggle.setAttribute("aria-pressed", String(isLight));
  toggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
  );
}
