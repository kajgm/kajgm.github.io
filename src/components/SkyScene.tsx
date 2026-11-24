"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { startScene } from "./sky/scene";
import { startNight } from "./sky/night";

type Vars = CSSProperties & Record<`--${string}`, string>;

// Seeded so the star field is the same on the server and the client.
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const r = rng(23);
// 90 faint stars; about half twinkle, each at its own pace.
const STARS = Array.from({ length: 90 }, () => {
  const cx = (r() * 100).toFixed(2) + "%", cy = (r() * 100).toFixed(2) + "%";
  const rad = (0.5 + r() * 0.8).toFixed(2), o = (0.2 + r() * 0.45).toFixed(2);
  const tw = r() < 0.5;
  const style = (tw ? { "--o": o, "--d": `${(3 + r() * 4).toFixed(1)}s`, "--dl": `-${(r() * 7).toFixed(1)}s` } : { "--o": o }) as Vars;
  return { cx, cy, rad, tw, style };
});

// The sky behind the page: stars (dark mode), painted clouds with the server racks at the bottom, and a button
// over each rack that sends a packet.
export function SkyScene() {
  const sky = useRef<SVGSVGElement>(null), scene = useRef<HTMLDivElement>(null), hits = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stopNight = startNight(sky.current!);
    // WebGL setup blocks the main thread for a few hundred ms, so wait for the page's fade-in to finish first.
    let stopScene: (() => void) | null = null, gone = false;
    const fade = document.querySelector(".fade-in")?.getAnimations?.()[0];
    (fade?.finished ?? Promise.resolve()).catch(() => {}).then(() => {
      if (!gone) stopScene = startScene(scene.current!, hits.current!);
    });
    return () => { gone = true; stopScene?.(); stopNight(); };
  }, []);
  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <svg ref={sky} className="sky">
          {STARS.map((s, i) => (
            <circle key={i} cx={s.cx} cy={s.cy} r={s.rad} className={s.tw ? "tw" : undefined} style={s.style} />
          ))}
        </svg>
        <div ref={scene} className="pscene">
          <canvas className="ps-back" />
          <div className="ps-server">
            <canvas className="ps-cables" />
            <canvas className="ps-sback" />
            <canvas className="ps-art" />
            <canvas className="ps-sfront" />
          </div>
          <canvas className="ps-front" />
        </div>
      </div>
      {/* clipped like the backdrop, so the wide scene never scrolls the page sideways */}
      <div className="backdrop hits-layer">
        <div ref={hits} className="pscene-hits" />
      </div>
    </>
  );
}
