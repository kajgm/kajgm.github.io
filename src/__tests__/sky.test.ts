import { drift } from "../components/sky/scene";
import { CERTS, pattern } from "../components/sky/constellation";

describe("Wind drift", () => {
  // two clouds between walls at 0 and 1000: gaps of 100, 200 and 300
  const spans = [[100, 300], [500, 700]];
  const moved = (w: number) => drift(spans, 0, 1000, w, 0.8, 1e9).map((o, i) => [spans[i][0] + o, spans[i][1] + o]);

  it.each([1, 0.5, -0.5, -1])("never lets clouds touch each other or the walls (wind %p)", (w) => {
    const [a, b] = moved(w);
    expect(a[0]).toBeGreaterThan(0);
    expect(b[0]).toBeGreaterThan(a[1]);
    expect(b[1]).toBeLessThan(1000);
  });

  it("moves downwind, and not at all without wind", () => {
    expect(drift(spans, 0, 1000, 1).every((o) => o > 0)).toBe(true);
    expect(drift(spans, 0, 1000, -1).every((o) => o < 0)).toBe(true);
    expect(drift(spans, 0, 1000, 0).every((o) => o === 0)).toBe(true);
  });

  it("keeps a cloud that is already past a wall from moving further out", () => {
    expect(drift([[-50, 200]], 0, 1000, -1)).toEqual([-0]);
  });
});

describe("Constellation pattern", () => {
  it.each([false, true])("places every certification once and links neighbours (vertical %p)", (vertical) => {
    const { order, pts, edges } = pattern(vertical);
    expect(order.map(([code]) => code).sort()).toEqual(CERTS.map(([code]) => code).sort());
    expect(order[0][0]).toBe("COA");
    expect(order[6][0]).toBe("CCP");
    expect(new Set(pts.map(String)).size).toBe(7);
    for (let i = 0; i < 6; i++) expect(edges).toContainEqual([i, i + 1]);
  });
});
