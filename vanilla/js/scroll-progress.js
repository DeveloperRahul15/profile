/** Top-of-page scroll progress indicator */
export function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar || typeof ScrollTrigger === "undefined") return;

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      bar.style.transform = `scaleX(${self.progress})`;
    },
  });
}
