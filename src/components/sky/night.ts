// Very occasionally a shooting star or a satellite crosses the sky above the title: dark mode only (the stars
// aren't out by day), nothing with reduced motion. Clicking the title sends a shooting star any time.
const rnd = (a: number, b: number) => a + Math.random() * (b - a);

// A quick streak above the title that fades in and out; its tail trails behind the head.
export function shootingStar(sky: Element | null = document.querySelector(".sky")) {
  if (!sky || typeof sky.animate !== "function") return;
  const dir = Math.random() < 0.5 ? 1 : -1, ang = rnd(0.2, 0.4), len = rnd(260, 420);
  const x0 = rnd(0.15, 0.85) * innerWidth, y0 = rnd(0.02, 0.12) * innerHeight + scrollY;
  const x1 = x0 + Math.cos(ang) * len * dir, y1 = y0 + Math.sin(ang) * len, rot = Math.atan2(y1 - y0, x1 - x0) + Math.PI;
  const el = document.createElement("span");
  el.className = "meteor";
  sky.after(el);
  el.animate([
    { transform: `translate(${x0}px,${y0}px) rotate(${rot}rad) scaleX(.2)`, opacity: 0 },
    { opacity: 1, offset: 0.25 },
    { transform: `translate(${x1}px,${y1}px) rotate(${rot}rad) scaleX(1)`, opacity: 0 },
  ], { duration: rnd(900, 1300), easing: "ease-in" }).onfinish = () => el.remove();
}

// Returns a function that stops it.
export function startNight(sky: Element): () => void {
  if (typeof window.matchMedia !== "function" || matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  // A tiny steady dot drifting slowly across the sky.
  function satellite() {
    const y = rnd(0.03, 0.14) * innerHeight + scrollY, fromLeft = Math.random() < 0.5;
    const el = document.createElement("span");
    el.className = "sat";
    sky.after(el);
    el.animate([
      { transform: `translate(${fromLeft ? -10 : innerWidth + 10}px,${y}px)` },
      { transform: `translate(${fromLeft ? innerWidth + 10 : -10}px,${y + rnd(-30, 30)}px)` },
    ], { duration: rnd(22000, 32000), easing: "linear" }).onfinish = () => el.remove();
  }
  let timer: ReturnType<typeof setTimeout>;
  const next = (ms: number) => {
    timer = setTimeout(() => {
      if (document.documentElement.classList.contains("dark") && !document.hidden) {
        if (Math.random() < 0.6) shootingStar(sky);
        else satellite();
      }
      next(rnd(35000, 80000));
    }, ms);
  };
  next(rnd(10000, 20000));
  return () => clearTimeout(timer);
}
