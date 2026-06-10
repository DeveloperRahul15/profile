const LIMITS = {
  name: 100,
  email: 254,
  subject: 200,
  message: 2000,
};

function sanitizeInput(value) {
  return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "").trim();
}

export function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => input.classList.remove("is-invalid"));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((input) => {
      const value = sanitizeInput(input.value);
      const limit = LIMITS[input.name] || 500;
      let fieldValid = true;

      if (!value || value.length > limit) fieldValid = false;

      if (input.type === "email" && value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value) || value.length > LIMITS.email) fieldValid = false;
      }

        input.classList.toggle("is-invalid", !fieldValid);
        if (!fieldValid) {
          valid = false;
          if (typeof gsap !== "undefined") {
            gsap.to(input, {
              x: [-8, 8, -4, 4, 0],
              duration: 0.4,
              ease: "power2.out",
            });
          }
        }
      });

    if (!valid) return;

    btn.classList.add("is-success");
    btn.disabled = true;

    if (typeof gsap !== "undefined") {
      gsap.fromTo(
        btn,
        { boxShadow: "0 0 0 rgba(212, 225, 87, 0)" },
        {
          boxShadow: "0 0 30px rgba(212, 225, 87, 0.35)",
          duration: 0.6,
          yoyo: true,
          repeat: 1,
        }
      );
    }

    setTimeout(() => {
      form.reset();
      btn.classList.remove("is-success");
      btn.disabled = false;
    }, 3000);
  });
}
