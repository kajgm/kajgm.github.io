// The certification constellation: a new pattern every time it loads. On desktop it loads when the Canonical
// logo is hovered or focused and hides after leaving the section; on touch screens it is always shown.

const URLS: Record<string, string> = {
  openstack: "https://www.openstack.org/",
  kubernetes: "https://kubernetes.io/",
  aws: "https://aws.amazon.com/",
};
export const CERTS: [code: string, icon: string, name: string][] = [
  ["COA", "openstack", "Certified OpenStack Administrator"],
  ["CKA", "kubernetes", "Certified Kubernetes Administrator"],
  ["CKAD", "kubernetes", "Certified Kubernetes Application Developer"],
  ["CKS", "kubernetes", "Certified Kubernetes Security Specialist"],
  ["KCNA", "kubernetes", "Kubernetes and Cloud Native Associate"],
  ["KCSA", "kubernetes", "Kubernetes and Cloud Native Security Associate"],
  ["CCP", "aws", "AWS Certified Cloud Practitioner"],
];

const pick = <T,>(a: T[]) => a[Math.floor(Math.random() * a.length)];
function shuffle<T>(a: T[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
// Seven evenly spaced columns (OpenStack, the five Kubernetes certs in random order, AWS), each on one of
// three lanes, never the same lane twice in a row. Lines join neighbours, plus one or two triangles.
export function pattern(vertical: boolean) {
  const order = [CERTS[0], ...shuffle(CERTS.slice(1, 6)), CERTS[6]];
  const lane = [Math.floor(Math.random() * 3)];
  for (let i = 1; i < order.length; i++) lane.push(pick([0, 1, 2].filter((l) => l !== lane[i - 1])));
  const pts = order.map((_, i) => (vertical ? [60 + lane[i] * 120, 36 + i * 64] : [50 + i * 110, 30 + lane[i] * 56]));
  const edges = order.slice(1).map((_, i) => [i, i + 1]);
  const peaks: number[] = [];
  for (let i = 0; i < order.length - 2; i++) {
    const [a, b, c] = [lane[i], lane[i + 1], lane[i + 2]];
    if ((b > a && b > c) || (b < a && b < c)) peaks.push(i);
  }
  shuffle(peaks).slice(0, 1 + Math.floor(Math.random() * 2)).forEach((i) => edges.push([i, i + 2]));
  return { order, pts, edges };
}

// CKA, CKS and CKAD are the headline certifications; KCNA and KCSA are the smaller associate ones.
const TIERS: Record<string, string> = { CKA: "major", CKS: "major", CKAD: "major", KCNA: "minor", KCSA: "minor" };
const SIZES: Record<string, { r: number; icon: number; label: number }> = {
  major: { r: 23, icon: 30, label: 39 }, normal: { r: 17, icon: 22, label: 32 }, minor: { r: 12, icon: 15, label: 26 },
};
const size = (code: string) => { const tier = TIERS[code] || "normal"; return { tier, ...SIZES[tier] }; };

function draw(svg: SVGSVGElement, vertical: boolean) {
  const { order, pts, edges } = pattern(vertical);
  let h = "";
  for (const [a, b] of edges) {
    const [x1, y1] = pts[a], [x2, y2] = pts[b];
    h += `<line class="link" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" style="--l:${Math.hypot(x2 - x1, y2 - y1).toFixed(1)};--i:${a}"/>`;
  }
  order.forEach(([code, icon, name], i) => {
    const [x, y] = pts[i], { tier, r, icon: s, label } = size(code);
    h += `<a class="node ${tier}" href="${URLS[icon]}" target="_blank" rel="noopener" style="--i:${i}" aria-label="${name}">` +
      `<circle class="halo" cx="${x}" cy="${y}" r="${r * 1.8}"/><circle class="badge" cx="${x}" cy="${y}" r="${r}"/>` +
      `<use class="ic-${icon}" href="#i-${icon}" x="${x - s / 2}" y="${y - s / 2}" width="${s}" height="${s}"/>` +
      `<text class="code" x="${x}" y="${y + label}">${code}</text></a>`;
  });
  svg.innerHTML = h;
}

// Each certification arrives from a star in the background: a nearby star lifts off and flies to its badge,
// leaving a gap in the sky until the constellation hides. By day (stars hidden) small sparkles fly in instead.
function fly(chart: SVGSVGElement) {
  const body = document.body.getBoundingClientRect(), box = chart.getBoundingClientRect(), k = box.width / chart.viewBox.baseVal.width;
  const sky = document.querySelector<SVGSVGElement>(".sky"), skyBox = sky?.getBoundingClientRect();
  const free = sky && skyBox && skyBox.width > 0
    ? [...sky.querySelectorAll("circle")].map((c) => ({ c, x: c.cx.baseVal.value, y: c.cy.baseVal.value }))
    : [];
  let layer = document.querySelector(".flyers");
  if (!layer) layer = document.body.appendChild(Object.assign(document.createElement("div"), { className: "flyers" }));
  chart.querySelectorAll<SVGCircleElement>(".badge").forEach((badge, i) => {
    const nx = box.left - body.left + badge.cx.baseVal.value * k, ny = box.top - body.top + badge.cy.baseVal.value * k;
    let from: { x: number; y: number };
    if (free.length) { // one of the six nearest free stars
      free.sort((a, b) => Math.hypot(a.x - nx, a.y - ny) - Math.hypot(b.x - nx, b.y - ny));
      const star = free.splice(Math.floor(Math.random() * Math.min(6, free.length)), 1)[0];
      setTimeout(() => star.c.classList.add("taken"), i * 80);
      from = star;
    } else from = { x: Math.random() * innerWidth - body.left, y: Math.random() * innerHeight * 0.6 - body.top };
    const f = layer.appendChild(Object.assign(document.createElement("span"), { className: "flyer" }));
    f.animate([
      { transform: `translate(${from.x}px,${from.y}px) scale(.6)`, opacity: 0.4 },
      { opacity: 1, offset: 0.2 },
      { transform: `translate(${nx}px,${ny}px) scale(1.4)`, opacity: 1 },
    ], { duration: 700, delay: i * 80, easing: "cubic-bezier(.55,0,.25,1)", fill: "both" }).onfinish = () => f.remove();
  });
}

// Wires up the constellation in `work` (the section holding .canon, .reveal and the two .chart svgs).
// Returns a function that removes the listeners.
export function startConstellation(work: HTMLElement): () => void {
  if (typeof window.matchMedia !== "function") return () => {};
  const reveal = work.querySelector(".reveal")!, canon = work.querySelector(".canon")!;
  const charts = [...work.querySelectorAll<SVGSVGElement>(".chart")];
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const load = () => {
    charts.forEach((c) => {
      c.classList.toggle("flying", !calm);
      draw(c, c.classList.contains("chart-m"));
    });
    reveal.classList.add("on");
    const chart = charts.find((c) => c.getBoundingClientRect().width > 0);
    if (chart && !calm && typeof chart.animate === "function") fly(chart);
  };
  // When the constellation hides, its stars return to the sky.
  const returnStars = () => document.querySelectorAll(".sky .taken").forEach((c) => c.classList.remove("taken"));
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) {
    load();
    return () => {};
  }
  let t: ReturnType<typeof setTimeout> | undefined;
  const show = () => { clearTimeout(t); if (!reveal.classList.contains("on")) load(); };
  const hide = () => { clearTimeout(t); t = setTimeout(() => { reveal.classList.remove("on"); returnStars(); }, 300); };
  const stay = () => { if (reveal.classList.contains("on")) clearTimeout(t); };
  const leave = (e: FocusEvent) => { if (!work.contains(e.relatedTarget as Node)) hide(); };
  canon.addEventListener("mouseenter", show);
  canon.addEventListener("focusin", show);
  work.addEventListener("mouseenter", stay);
  work.addEventListener("mouseleave", hide);
  work.addEventListener("focusout", leave);
  return () => {
    clearTimeout(t);
    canon.removeEventListener("mouseenter", show);
    canon.removeEventListener("focusin", show);
    work.removeEventListener("mouseenter", stay);
    work.removeEventListener("mouseleave", hide);
    work.removeEventListener("focusout", leave);
  };
}
