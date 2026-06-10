export function initNavigation() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const header = document.getElementById("header");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  if (header && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        header.classList.toggle("is-scrolled", self.scroll() > 40);
      },
    });
  }

  initScrollSpy();
}

function initScrollSpy() {
  const navLinks = document.querySelectorAll(".nav__link[href^='#']");
  const sections = document.querySelectorAll("main section[id]");

  if (!navLinks.length || !sections.length || typeof ScrollTrigger === "undefined") return;

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 55%",
      end: "bottom 45%",
      onEnter: () => setActiveNav(section.id, navLinks),
      onEnterBack: () => setActiveNav(section.id, navLinks),
    });
  });
}

function setActiveNav(id, navLinks) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
}

export function initFooter() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}
