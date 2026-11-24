// Painted pixel clouds and the server scene at the bottom of the page.
// Clouds: a WebGL shader (large soft shapes carved by billowy fractal noise, lit by comparing density one step
// toward the light) rendered at one canvas pixel per 4px art pixel, shaded with a five-tone palette, dithered
// where tones meet, hard pixel edges, scaled up crisp. Light direction and palette come from CSS, so the day
// sky is lit from above and the sunset from low on the horizon.
// A server cloud holds three pixel-art racks (the same cloud is drawn again in front of them, below a line that
// slowly rises and falls), hanging cables between the racks carry packets (automatic, or sent by clicking a
// rack), loose cables dangle off the bottom of the screen, and supporting clouds drift with the wind.
// Reduced motion paints one still frame; without WebGL there are no clouds.

const CELL = 4, MAXB = 40;
const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
const FRAG = `precision highp float;
uniform vec2 uRes;uniform float uScale;uniform float uTime;uniform int uCount;
uniform vec4 uB[${MAXB}];uniform vec4 uBase[${MAXB}];
uniform vec3 uP0,uP1,uP2,uP3,uP4,uHaze;uniform vec2 uLight,uLift;uniform vec3 uCut;
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 nm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=nm.x;p1*=nm.y;p2*=nm.z;p3*=nm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
// Overall shape: soft blobs that fade out below their cloud's base. Also returns height within the cloud
// (0 at the base, 1 at the top) and how far away (hazy) the cloud is.
float shape(vec2 p,out float hgt,out float haze){
  float s=0.,hs=0.,zs=0.,w=0.;
  for(int i=0;i<${MAXB};i++){
    if(i>=uCount)break;
    vec4 b=uB[i];vec4 c=uBase[i];
    vec2 d=(p-b.xy)/b.zw;float dd=dot(d,d);
    if(dd>4.)continue;
    float k=exp(-dd*1.4)*smoothstep(c.x+18.,c.x-40.,p.y)*c.w;
    s+=k;hs+=k*clamp((c.x-p.y)/c.y,0.,1.);zs+=k*c.z;w+=k;
  }
  hgt=w>0.?hs/w:0.;haze=w>0.?zs/w:0.;
  return s;
}
// Billowy fractal noise weighted toward the big billows; thin outskirts aren't carved (no stray fragments).
float billow(vec3 q){
  float f=0.,a=.6;
  for(int i=0;i<5;i++){f+=a*abs(snoise(q));q=vec3(q.xy*2.02+vec2(17.1,-9.3),q.z*1.4);a*=.46;}
  return f;
}
float dens(vec2 p,float s){return s-.45+(billow(vec3(p/100.,uTime*.025))-.4)*.85*smoothstep(.08,.5,s);}
// 4x4 ordered dither threshold
float b2(vec2 a){return mod(2.*a.x+3.*a.y,4.);}
float bayer(vec2 p){vec2 a=mod(floor(p),4.);return(4.*b2(mod(a,2.))+b2(floor(a/2.)))/16.;}
void main(){
  vec2 p=vec2(gl_FragCoord.x,uRes.y-gl_FragCoord.y)/uScale;
  // in front of the racks: keep only the cloud below a slowly billowing line across the rack bases
  if(uCut.x>.5&&p.y<uCut.y+4.*sin(p.x/23.+uCut.z*.6)+2.*sin(p.x/9.+uCut.z)){gl_FragColor=vec4(0.);return;}
  float hgt,haze;float s0=shape(p,hgt,haze);
  if(s0<.12){gl_FragColor=vec4(0.);return;}
  float d0=dens(p,s0);
  if(d0<-.06){gl_FragColor=vec4(0.);return;}
  // light at two scales: the big forms (shape only, a long step) and the billows on them
  vec2 L=normalize(uLight);
  float h1,z1;float d1=dens(p+L*8.,shape(p+L*8.,h1,z1));
  float h2,z2;float sL=shape(p+L*22.,h2,z2);
  float facing=mix(clamp((s0-sL)*1.2+.55,0.,1.),clamp((d0-d1)*1.8+.5,0.,1.),.55);
  float depth=clamp(d0*1.2,0.,1.);
  float lt=clamp(facing*(uLift.x+uLift.y*hgt)-depth*.18+.05+(1.-smoothstep(0.,.3,hgt))*.12,0.,1.);
  // five-tone palette, dithered where tones meet
  float bd=bayer(gl_FragCoord.xy);
  float idx=floor(clamp(lt*4.999+(bd-.5)*.35,0.,4.999));
  vec3 col=idx<.5?uP0:idx<1.5?uP1:idx<2.5?uP2:idx<3.5?uP3:uP4;
  col=mix(col,uHaze,haze);
  // hard pixel edge, dithered where the cloud thins out
  float a=smoothstep(-.06,.07,d0)*smoothstep(0.,.14,hgt+.02);
  a=step(bd*.3+.35,a);
  gl_FragColor=vec4(col*a,a);
}`;

type Blob = number[]; // [cx, cy, rx, ry, baseY, height, haze, weight] in scene px
type Draw = (blobs: Blob[], t: number, cut?: number | null) => void;
type Pal = { tones: number[][]; haze: number[]; light: number[]; lift: number[] };

// A WebGL cloud renderer bound to one canvas (one canvas pixel per art cell).
function renderer(canvas: HTMLCanvasElement, pal: () => Pal): Draw | null {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, antialias: false });
  if (!gl) return null;
  const compile = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? "shader");
    return s;
  };
  const prog = gl.createProgram()!;
  gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog) ?? "link");
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const a = gl.getAttribLocation(prog, "a");
  gl.enableVertexAttribArray(a);
  gl.vertexAttribPointer(a, 2, gl.FLOAT, false, 0, 0);
  const u = (n: string) => gl.getUniformLocation(prog, n);
  const B = new Float32Array(MAXB * 4), BASE = new Float32Array(MAXB * 4);
  return (blobs, t, cut = null) => {
    const n = Math.min(MAXB, blobs.length), p = pal();
    for (let i = 0; i < n; i++) {
      B.set(blobs[i].slice(0, 4), i * 4);
      BASE.set(blobs[i].slice(4, 8), i * 4);
    }
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(u("uRes"), canvas.width, canvas.height);
    gl.uniform1f(u("uScale"), 1 / CELL);
    gl.uniform1f(u("uTime"), t);
    gl.uniform1i(u("uCount"), n);
    gl.uniform4fv(u("uB"), B);
    gl.uniform4fv(u("uBase"), BASE);
    p.tones.forEach((c, i) => gl.uniform3fv(u("uP" + i), c));
    gl.uniform3fv(u("uHaze"), p.haze);
    gl.uniform2fv(u("uLight"), p.light);
    gl.uniform2fv(u("uLift"), p.lift);
    gl.uniform3f(u("uCut"), cut === null ? 0 : 1, cut ?? 0, t);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
}

// ---------- cloud layouts ----------
const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const bump = (u: number, c: number, s: number) => Math.exp(-((u - c) ** 2) / (2 * s * s));
type Puff = { b: number[]; ph: number; sp: number };
// A cumulus: three wide blobs for the base, five following a profile with two or three towers.
// Blobs are [x, y, rx, ry] relative to the base centre, y up negative; each breathes on its own.
function cumulus(w: number, h: number): Puff[] {
  const towers = Array.from({ length: 3 }, () => [rnd(0.25, 0.75), rnd(0.07, 0.14), rnd(0.65, 1)]);
  const prof = (u: number) =>
    Math.pow(Math.sin(Math.PI * u), 0.7) * (0.45 + 0.55 * Math.max(...towers.map(([c, s, a]) => a * bump(u, c, s))));
  const blobs = [-1, 0, 1].map((k) => [k * w * 0.28, -h * 0.2, w * 0.24, h * 0.3]);
  for (let i = 0; i < 5; i++) {
    const u = 0.12 + (0.76 * i) / 4 + rnd(-0.03, 0.03), top = h * prof(u), r = Math.max(h * 0.24, top * 0.5);
    blobs.push([(u - 0.5) * w, -(top - r * 0.8), r * rnd(1.05, 1.35), r]);
  }
  return blobs.map((b) => ({ b, ph: rnd(0, 6.28), sp: rnd(0.15, 0.35) }));
}
const place = (list: Puff[], x: number, baseY: number, h: number, haze: number, t: number): Blob[] =>
  list.map(({ b, ph, sp }) => {
    const k = 1 + 0.08 * Math.sin(t * sp + ph);
    return [x + b[0], baseY + b[1], b[2] * k, b[3] * k, baseY, h, haze, 1];
  });
// How far a cloud reaches left and right of its centre (its blobs at full breath).
const reach = (list: Puff[]) => [
  Math.min(...list.map(({ b }) => b[0] - b[2] * 1.08)),
  Math.max(...list.map(({ b }) => b[0] + b[2] * 1.08)),
];

// ---------- wind ----------
// One slow breeze for the whole sky, between -1 (blowing left) and 1 (blowing right).
const wind = (t: number) => 0.7 * Math.sin(t * 0.031 + 1.3) + 0.3 * Math.sin(t * 0.013 + 4.1);
// Clouds in a row between two walls (screen edges, or the server cloud) drift with the wind. Each moves by a share
// of the free space downwind of it, so every gap shrinks by the same fraction (at most `k`): no cloud passes its
// neighbour or a wall, however hard it blows. `cap` keeps the drift gentle on very wide screens.
// spans: [left, right] of each cloud at rest, in order; returns each cloud's offset.
export function drift(spans: number[][], lo: number, hi: number, w: number, k = 0.8, cap = 140): number[] {
  const edges = [lo, ...spans.flat(), hi];
  const gaps = spans.map((_, i) => i).concat(spans.length).map((i) => Math.max(0, edges[2 * i + 1] - edges[2 * i]));
  return spans.map((_, i) => {
    const room = w > 0 ? gaps.slice(i + 1).reduce((a, b) => a + b, 0) : gaps.slice(0, i + 1).reduce((a, b) => a + b, 0);
    return w * Math.min(cap, k * room);
  });
}

// ---------- the scene: a 1900x380 box at the bottom centre, drawn in 4px cells (475x95) ----------
// The layout sits in the middle 1300px; the extra width on each side is room for the wind on wide screens.
const SW = 1900, SH = 380, COLS = SW / CELL, ROWS = SH / CELL, PAD = 300, CX = PAD + 650, BASE = 240;
const SERVER_W = 400, SERVER_H = 150;
type Cloud = { x: number; base: number; w: number; h: number; haze: number; blobs: Puff[]; span: number[] };
const cloud = (x: number, base: number, w: number, h: number, haze = 0): Cloud => {
  const blobs = cumulus(w, h), [l, r] = reach(blobs);
  return { x: PAD + x, base, w, h, haze, blobs, span: [PAD + x + l, PAD + x + r] };
};

// Racks (14 cells wide) settled into the cloud at slightly different depths. Rack art: k outline, h lit rail,
// s shaded rail, f gap between units, c unit face, d drive bay, v vent, p switch port, l link LED, g status LED,
// a activity LED.
const UNIT: Record<string, string> = {
  gap: "ffffffffff", ports: "pcpcpcpcpc", links: "lclclclclc", srv: "dcdcdcdcga",
  vent: "vvvvvvvcga", big1: "ddddddddgc", big2: "ddddddddac", blank: "cccccccccc",
};
const rack = (units: string) => [
  ".kkkkkkkkkkkk.", "khhhhhhhhhhhsk", "kkkkkkkkkkkkkk",
  ...units.split(" ").map((u) => "kh" + UNIT[u] + "sk"),
  "kkkkkkkkkkkkkk", ".kk........kk.",
];
const RACK_ART = [
  rack("ports links gap srv gap srv gap vent gap big1 big2 gap blank gap srv gap"),
  rack("ports links gap srv gap srv gap srv gap vent gap big1 big2 gap srv gap big1 big2 gap srv"),
  rack("ports links gap vent gap srv gap big1 big2 gap srv gap srv gap blank gap"),
];
const P0 = PAD / CELL;
const RACKS = [{ x: P0 + 133, bottom: 45 }, { x: P0 + 156, bottom: 43 }, { x: P0 + 179, bottom: 46 }];
const rackTop = (i: number) => RACKS[i].bottom - RACK_ART[i].length + 1;
// Hanging cables between the racks: for each cable, [port row, sag] in each of the two gaps, and a colour.
const LINKS = [{ gaps: [[29, 2], [30, 2]], c: "red" }, { gaps: [[32, 2], [33, 2]], c: "violet" }];
type Cell = [number, number];
// One cell per column along a sagging cable, vertical gaps filled so the line stays connected.
function sagCells(x0: number, x1: number, y0: number, sag: number) {
  const out: Cell[] = [], xm = (x0 + x1) / 2, hw = (x1 - x0) / 2;
  let prev: number | null = null;
  for (let x = x0; x <= x1; x++) {
    const y = Math.round(y0 + sag * (1 - ((x - xm) / hw) ** 2));
    if (prev !== null) for (let k: number = prev + Math.sign(y - prev); k !== y && y !== prev; k += Math.sign(y - prev)) out.push([x, k]);
    out.push([x, y]);
    prev = y;
  }
  return out;
}
const CAB = LINKS.map(({ gaps }) => gaps.map(([y, sag], g) => sagCells(RACKS[g].x + 14, RACKS[g + 1].x - 1, y, sag)));
// Cells on the straight line between two cells (Bresenham).
function line(x0: number, y0: number, x1: number, y1: number, out: Cell[]) {
  const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx + dy;
  for (;;) {
    out.push([x0, y0]);
    if (x0 === x1 && y0 === y1) return;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x0 += sx; }
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
}
type Dangle = { x: number; c: string; ph: number; sp: number };
// A dangling cable swings like a pendulum: still at the anchor, swaying most toward its lower end, leaning downwind.
function dangleCells({ x, ph, sp }: Dangle, t: number, y0: number, w: number) {
  const sway = 6 * Math.sin(t * sp + ph) + 1.5 * Math.sin(t * sp * 2.3 + ph * 1.7) + 3 * w;
  const pts: Cell[] = [];
  for (let i = 0; i <= 10; i++) {
    const k = i / 10;
    pts.push([Math.round(x + sway * k ** 1.6), Math.round(y0 + (ROWS + 2 - y0) * k)]);
  }
  const out: Cell[] = [];
  for (let i = 1; i < pts.length; i++) line(pts[i - 1][0], pts[i - 1][1], pts[i][0], pts[i][1], out);
  return out;
}
const LED_CHARS = "agl";
const LEDS = RACK_ART.map((rows) => rows.flatMap((row, y) => [...row].flatMap((ch, x) => (LED_CHARS.includes(ch) ? [[x, y]] : []))));
const INKS = ["k", "h", "s", "f", "c", "d", "v", "p", "led", "act", "actoff", "blink", "pk", "red", "violet", "gray", "steel", "plug"];

// Starts the scene in `root` (a .pscene with four canvases) and adds a button per rack to `hits`.
// Returns a function that stops it.
export function startScene(root: HTMLElement, hits: HTMLElement): () => void {
  if (typeof window.matchMedia !== "function") return () => {};
  const q = (c: string) => root.querySelector<HTMLCanvasElement>("." + c)!;
  const cablesCv = q("ps-cables"), backCv = q("ps-back"), artCv = q("ps-art"), frontCv = q("ps-front");
  const cablesG = cablesCv.getContext("2d"), artG = artCv.getContext("2d");
  if (!cablesG || !artG) return () => {};
  for (const c of [cablesCv, backCv, artCv, frontCv]) { c.width = COLS; c.height = ROWS; }

  // palette and light from CSS (they change with the theme)
  const css = (n: string) => getComputedStyle(document.body).getPropertyValue(n).trim();
  // any CSS colour (the CSS minifier shortens #ffffff to #fff) to 0..1 rgb, via the canvas, which normalises to #rrggbb
  const hex01 = (c: string) => {
    cablesG.fillStyle = "#000";
    cablesG.fillStyle = c;
    const v = parseInt(String(cablesG.fillStyle).slice(1), 16);
    return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255];
  };
  const pair = (n: string) => css(n).split(/\s+/).map(Number);
  let pal: Pal, ink: Record<string, string>;
  const readPal = () => {
    pal = { tones: [0, 1, 2, 3, 4].map((i) => hex01(css("--pp-" + i))), haze: hex01(css("--pp-haze")), light: pair("--pp-light"), lift: pair("--pp-lift") };
    ink = Object.fromEntries(INKS.map((k) => [k, css("--pr-" + k)]));
  };
  readPal();
  const themeWatch = new MutationObserver(readPal);
  themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  let drawBack: Draw | null = null, drawFront: Draw | null = null;
  try {
    drawBack = renderer(backCv, () => pal);
    drawFront = renderer(frontCv, () => pal);
  } catch (e) {
    console.warn("painted clouds disabled:", (e as Error).message);
    drawBack = drawFront = null;
  }

  // The server cloud, and supporting clouds around it, all low in the scene so nothing rises above the
  // certifications: two flanking, two smaller hazy ones further back, one low puff in front.
  const server = cumulus(SERVER_W, SERVER_H), [sl, sr] = reach(server), serverSpan = [CX + sl, CX + sr];
  const bigL = cloud(175, 296, 300, 155), bigR = cloud(1125, 288, 290, 150);
  const hazeL = cloud(380, 190, 150, 66, 0.35), hazeR = cloud(925, 180, 140, 62, 0.35);
  const puff = cloud(905, 300, 190, 78);
  // Rows of clouds that drift together, each between the edge of the screen and the server cloud. The hazy far
  // clouds are a layer of their own behind the near ones, and move less.
  const rows: { list: Cloud[]; side: number; k: number }[] = [
    { list: [bigL], side: -1, k: 0.8 }, { list: [puff, bigR], side: 1, k: 0.8 },
    { list: [hazeL], side: -1, k: 0.5 }, { list: [hazeR], side: 1, k: 0.5 },
  ];
  // The part of the scene on screen, in scene px (recomputed on resize).
  let view = [0, SW];
  const measure = () => {
    const box = root.getBoundingClientRect(), s = box.width / SW, margin = 8;
    view = [Math.max(0, (margin - box.left) / s), Math.min(SW, (document.documentElement.clientWidth - margin - box.left) / s)];
  };
  measure();
  window.addEventListener("resize", measure);
  const offsets = (w: number) => {
    const out = new Map<Cloud, number>();
    for (const { list, side, k } of rows) {
      const [lo, hi] = side < 0 ? [view[0], serverSpan[0]] : [serverSpan[1], view[1]];
      drift(list.map((c) => c.span), lo, hi, w, k).forEach((o, i) => out.set(list[i], o));
    }
    return out;
  };

  const DANGLE: Dangle[] = (
    [[141, "red"], [152, "gray"], [162, "violet"], [173, "steel"], [184, "red"]] as [number, string][]
  ).map(([x, c]) => ({ x: P0 + x, c, ph: rnd(0, 6.28), sp: rnd(0.6, 1) }));

  // Packets: every few seconds one rides a cable from one rack to another (through the middle rack), and a
  // click on a rack sends one too: to another rack, or down the loose cable under it and off the screen.
  // Lights flicker at random: a map of "rack,x,y" -> [on, off] times.
  const blinks = new Map<string, number[]>();
  let now = 0, nextAuto = 1.5, lastStep = 0;
  function flash(r: number, n = 4, spread = 0.3) {
    for (let k = 0; k < n; k++) {
      const [x, y] = LEDS[r][Math.floor(Math.random() * LEDS[r].length)], on = now + Math.random() * spread;
      blinks.set(r + "," + x + "," + y, [on, on + 0.08 + Math.random() * 0.2]);
    }
  }
  type Packet = { path: (Cell | number)[]; i: number; to: number } | { drop: number; k: number };
  const packets: Packet[] = [];
  function route(l: number, from: number, to: number) {
    const p: (Cell | number)[] = [], d = Math.sign(to - from);
    for (let k = from; k !== to; k += d) {
      if (k !== from) for (let n = 0; n < 6; n++) p.push(k);
      const c = CAB[l][Math.min(k, k + d)];
      p.push(...(d > 0 ? c : [...c].reverse()));
    }
    return p;
  }
  const otherRack = (from: number) => { const to = Math.floor(Math.random() * 2); return to >= from ? to + 1 : to; };
  function sendLink(from: number) {
    const to = otherRack(from);
    packets.push({ path: route(Math.floor(Math.random() * CAB.length), from, to), i: 0, to });
    flash(from);
  }
  function sendDrop(from: number) {
    const cx = RACKS[from].x + 7; // the loose cable hanging closest under this rack
    const drop = DANGLE.reduce((best, d, i) => (Math.abs(d.x - cx) < Math.abs(DANGLE[best].x - cx) ? i : best), 0);
    packets.push({ drop, k: 0 });
    flash(from);
  }
  function updatePackets(t: number, dt: number) {
    if (!still && t > nextAuto) {
      sendLink(Math.floor(Math.random() * 3));
      nextAuto = t + 3 + Math.random() * 5;
    }
    const step = t - lastStep > 0.05;
    if (step) lastStep = t;
    for (let n = packets.length - 1; n >= 0; n--) {
      const pk = packets[n];
      if ("drop" in pk) {
        if ((pk.k += dt * 0.45) >= 1) packets.splice(n, 1);
        continue;
      }
      if (!step) continue;
      const c = pk.path[pk.i];
      if (typeof c === "number" && typeof pk.path[pk.i - 1] !== "number") flash(c, 3, 0.2);
      if (++pk.i >= pk.path.length) {
        flash(pk.to, 6, 0.5);
        packets.splice(n, 1);
      }
    }
  }

  const plot = (g: CanvasRenderingContext2D, bob: number) => (x: number, y: number, c: string) => { g.fillStyle = c; g.fillRect(x, y + bob, 1, 1); };
  function drawCables(g: CanvasRenderingContext2D, t: number, bob: number, w: number) {
    g.clearRect(0, 0, COLS, ROWS);
    const cell = plot(g, bob);
    const lines = DANGLE.map((d) => dangleCells(d, t, 54, w));
    DANGLE.forEach((d, i) => { for (const [x, y] of lines[i]) cell(x, y, ink[d.c]); });
    // packets dropping down a loose cable, with a one-cell tail
    for (const pk of packets) {
      if (!("drop" in pk)) continue;
      const cells = lines[pk.drop], i = Math.min(cells.length - 1, Math.floor(pk.k * cells.length));
      if (i > 0) { g.globalAlpha = 0.45; cell(cells[i - 1][0], cells[i - 1][1], ink.pk); g.globalAlpha = 1; }
      cell(cells[i][0], cells[i][1], ink.pk);
    }
  }
  function drawRacks(g: CanvasRenderingContext2D, t: number, bob: number) {
    g.clearRect(0, 0, COLS, ROWS);
    const cell = plot(g, bob);
    RACK_ART.forEach((rows, i) => rows.forEach((row, ry) => {
      for (let rx = 0; rx < row.length; rx++) {
        const ch = row[rx];
        if (ch === ".") continue;
        let color = ink[ch];
        if (LED_CHARS.includes(ch)) {
          const key = i + "," + rx + "," + ry, b = blinks.get(key), on = b && t >= b[0] && t <= b[1];
          if (b && t > b[1]) blinks.delete(key);
          color = ch === "a" ? (on ? ink.act : ink.actoff) : on ? ink.blink : ink.led;
        }
        cell(RACKS[i].x + rx, rackTop(i) + ry, color);
      }
    }));
    LINKS.forEach(({ gaps, c }, l) => {
      for (const seg of CAB[l]) for (const [x, y] of seg) cell(x, y, ink[c]);
      gaps.forEach(([y], g2) => { cell(RACKS[g2].x + 13, y, ink[c]); cell(RACKS[g2 + 1].x, y, ink[c]); });
    });
    for (const pk of packets) {
      if ("drop" in pk) continue;
      const c = pk.path[pk.i], prev = pk.path[pk.i - 1];
      if (Array.isArray(prev)) { g.globalAlpha = 0.45; cell(prev[0], prev[1], ink.pk); g.globalAlpha = 1; }
      if (Array.isArray(c)) cell(c[0], c[1], ink.pk);
    }
  }

  // t drives packets and lights; ct drives the clouds, wind and sway, and stays still with reduced motion.
  function frame(t: number, dt: number) {
    const ct = still ? 0 : t, w = wind(ct);
    const bob = Math.round(Math.sin(ct * 0.7) * 1.2); // the server cloud floats up and down by a pixel
    if (drawBack && drawFront) {
      const lift = bob * CELL, off = offsets(w);
      // the same cloud is drawn again in front of the racks, below a line that slowly rises over them and
      // settles back (~18 s); the rack bottoms always stay tucked into the cloud
      const sv = place(server, CX, BASE + lift, SERVER_H, 0, ct), cut = 160 + lift + 8 * Math.sin(ct * 0.35);
      const at = (list: Cloud[]) => list.flatMap((c) => place(c.blobs, c.x + off.get(c)!, c.base, c.h, c.haze, ct));
      drawBack([...sv, ...at([bigL, bigR, hazeL, hazeR])], ct);
      drawFront([...sv, ...at([puff])], ct, cut);
    }
    updatePackets(t, dt);
    drawCables(cablesG!, ct, bob, w);
    drawRacks(artG!, t, bob);
  }

  // Each rack is a button over the scene: a click (or Enter/Space) sends a packet from it.
  const VISIBLE_H = SH - 60; // the part of the scene above the fold
  RACKS.forEach((r, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Send a packet from server ${i + 1}`);
    const top = rackTop(i) * CELL - 4;
    Object.assign(b.style, {
      left: `${((r.x * CELL) / SW) * 100}%`, top: `${(top / VISIBLE_H) * 100}%`,
      width: `${((14 * CELL) / SW) * 100}%`, height: `${((160 - top) / VISIBLE_H) * 100}%`,
    });
    b.addEventListener("click", () => {
      (Math.random() < 0.5 ? sendLink : sendDrop)(i);
      flash(i, 7, 0.6); // a burst of random lights on the rack that was clicked
      if (still) raf = requestAnimationFrame(loop); // reduced motion: animate only what the visitor asked for
    });
    hits.appendChild(b);
  });

  // With reduced motion, one still frame; afterwards only packets a visitor sends are animated.
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let last = performance.now(), painted = false, raf = 0;
  function loop(ts: number) {
    const busy = packets.length > 0;
    if (!still || busy) raf = requestAnimationFrame(loop);
    if (painted && ts - last < 33) return; // ~30 fps is plenty
    const dt = Math.min(0.1, (ts - last) / 1000);
    last = ts;
    if (document.hidden || (still && painted && !busy)) return;
    now = ts / 1000;
    frame(now, dt);
    painted = true;
  }
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    themeWatch.disconnect();
    window.removeEventListener("resize", measure);
    hits.replaceChildren();
  };
}
