import { prefersReducedMotion } from "./utils.js";

export function initHeroBackground() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let animationId = null;

  const orbs = [
    { x: 0.3, y: 0.2, r: 0.35, color: "124, 92, 255", speed: 0.0003 },
    { x: 0.7, y: 0.6, r: 0.25, color: "254, 214, 96", speed: 0.0004 },
    { x: 0.5, y: 0.8, r: 0.2, color: "124, 92, 255", speed: 0.0002 },
  ];

  let time = 0;

  function resize() {
    const parent = canvas.parentElement;
    if (!parent) return;
    width = parent.offsetWidth;
    height = parent.offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    orbs.forEach((orb, i) => {
      const cx = width * (orb.x + Math.sin(time * orb.speed + i) * 0.08);
      const cy = height * (orb.y + Math.cos(time * orb.speed * 1.3 + i) * 0.06);
      const radius = Math.min(width, height) * orb.r;

      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      gradient.addColorStop(0, `rgba(${orb.color}, 0.12)`);
      gradient.addColorStop(0.5, `rgba(${orb.color}, 0.04)`);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    });

    time += 1;
    animationId = requestAnimationFrame(draw);
  }

  resize();
  draw();

  window.addEventListener("resize", resize);

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
  };
}
