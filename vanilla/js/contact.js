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

  const btn = form.querySelector('button[type="submit"]');
  const fields = () => form.querySelectorAll(".form-group input, .form-group textarea");

  fields().forEach((input) => {
    input.addEventListener("input", () => input.classList.remove("is-invalid"));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    const inputs = fields();
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
    if (!btn) return;

    btn.disabled = true;

    // Netlify Forms: POST url-encoded data back to the page path.
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);

        btn.classList.add("is-success");
        if (status) status.textContent = "Message sent successfully.";

        if (typeof gsap !== "undefined") {
          gsap.fromTo(
            btn,
            { boxShadow: "0 0 0 rgba(254, 214, 96, 0)" },
            {
              boxShadow: "0 0 30px rgba(254, 214, 96, 0.35)",
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
      })
      .catch(() => {
        btn.classList.add("is-error");
        if (status) {
          status.textContent =
            "Message could not be sent. Please email rahulchoubey.codes@gmail.com directly.";
        }

        setTimeout(() => {
          btn.classList.remove("is-error");
          btn.disabled = false;
        }, 4000);
      });
  });
}
