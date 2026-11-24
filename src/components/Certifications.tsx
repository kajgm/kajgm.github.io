"use client";

import { useEffect, useRef } from "react";
import { Canonical } from "./img/Canonical";
import { startConstellation } from "./sky/constellation";
import { openstackData } from "../data/svg/openstack";
import { kubernetesData1, kubernetesData2 } from "../data/svg/kubernetes";
import { AWSData1, AWSData2, AWSData3 } from "../data/svg/aws";

// Icons the constellation draws with <use>, and the glow behind each badge at night.
function Defs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <symbol id="i-openstack" viewBox="0 -2.5 256 256">
          <path fill="#DA1A32" d={openstackData} />
        </symbol>
        <symbol id="i-kubernetes" viewBox="0 0 722.846 701.966">
          <g transform="translate(-6.326 -174.752)">
            <path fill="#326ce5" d={kubernetesData1} />
            <path fill="#fff" stroke="#fff" strokeWidth=".25" d={kubernetesData2} />
          </g>
        </symbol>
        <symbol id="i-aws" viewBox="0 0 304 182">
          <path fill="currentColor" d={AWSData1} />
          <path fill="#f90" d={AWSData2} />
          <path fill="#f90" d={AWSData3} />
        </symbol>
        <radialGradient id="glow">
          <stop offset="0" style={{ stopColor: "var(--star)", stopOpacity: 0.35 }} />
          <stop offset="1" style={{ stopColor: "var(--star)", stopOpacity: 0 }} />
        </radialGradient>
      </defs>
    </svg>
  );
}

// The current role, and the certifications as a constellation that appears when the Canonical logo is hovered
// (always shown on touch screens).
export function Certifications() {
  const work = useRef<HTMLElement>(null);
  useEffect(() => startConstellation(work.current!), []);
  return (
    <section ref={work} className="work">
      <span className="canon" title="Hover to show certifications">
        <Canonical className="block h-full w-full" />
      </span>
      <p className="role" data-testid="content">
        Cloud Engineer I @ <b>Canonical</b>
      </p>
      <div className="reveal">
        <p className="caption">Certifications</p>
        <svg className="chart chart-d" viewBox="0 0 760 190" role="group" aria-label="Certifications" />
        <svg className="chart chart-m" viewBox="0 0 360 470" role="group" aria-label="Certifications" />
      </div>
      <Defs />
    </section>
  );
}
