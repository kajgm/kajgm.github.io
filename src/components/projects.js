import React from 'react';

import '../static/css/main.css';
import '../static/css/globals.css';
import '../static/css/extras.css';

import Section from './Template/Section';

const Projects = () => (
  <Section sectionType="projects-container" title="Projects">
    <div className="content-container twty-margin-bottom">
      <h2 className="project-headers no-margin">
        <a href="https://github.com/kajgrant/guitar-tuner" className="black-underline">
          Hardware Accelerated <b id="guitar-color">Guitar</b> <b id="tuner-color">Tuner</b>
        </a>
      </h2>
      <ul>
        <p className="bullet-text two-fade-in no-margin">
          <li>Involves multithreaded operation to detect note frequency and output live feedback to a VGA based ui</li>
          <li>
            Designed a custom hardware architecture using the <b>Xilinx Zedboard FPGA</b> for a guitar tuner program
          </li>
          <li>Interfaced Audio Codecs, FFT blocks, GPIO blocks, and VGA controller with software</li>
          <li>
            Created a custom hardware block in <b>VHDL</b> to perform Harmonic Product Spectrum calculation
          </li>
        </p>
      </ul>
    </div>
    <div className="content-container twty-margin-bottom">
      <h2 className="project-headers">
        <a href="https://github.com/kajgrant/rolltech" className="black-underline">
          <b id="chair-color">Chair</b>
          <b id="able-color">able</b>, by Roll Technology
        </a>
      </h2>
      <ul>
        <p className="bullet-text two-fade-in no-margin">
          <li>An 8-month Simon Fraser University Engineering Capstone project</li>
          <li>Utilizes a spherical wheel design for tight maneuvering and a space-efficient footprint</li>
          <li>Modular design intended for attachment to a variety of office chair models</li>
          <li>
            Large <b>7000mAh</b> capacity battery and the ability to move a <b>125kg</b> load at a <b>2.5m/s</b> pace
          </li>
        </p>
      </ul>
    </div>
    <div className="content-container twty-margin-bottom">
      <h2 className="project-headers">
        <a href="https://github.com/kajgrant/gaussian-acceleration" className="black-underline">
          FPGA Accelerated <b id="gauss-color">Gaussian</b> <b id="elim-color">Elimination</b> Algorithm
        </a>
      </h2>
      <ul>
        <p className="bullet-text two-fade-in no-margin">
          <li>
            {' '}
            Optimized the common Gaussian Elimination Algorithm using buffering, tiling, memory, compute, and ping-pong
            data transfer enhancements
          </li>
          <li>
            {' '}
            Incorporated <b>Intel Intrinsics</b> and <b>OpenMP</b> CPU optimizations to achieve a speedup factor {'>'}{' '}
            8.4
          </li>
          <li>
            {' '}
            Streamlined exisiting <b>CUDA</b>-based algorithm based on underlying GPU architecture to gain a speedup
            factor {'>'} 2
          </li>
          <li>
            {' '}
            Performed comparison and analysis of naive, CPU (Intel i9-10900X), FPGA (AMD Alevo U50), and GPU (Nvidia
            A4000) implementations
          </li>
        </p>
      </ul>
    </div>
    <div className="content-container twty-margin-bottom">
      <h2 className="project-headers">
        <a href="https://github.com/kajgrant/redditsalestracker" className="black-underline">
          <b id="reddit-color">Reddit</b>SalesTracker
        </a>{' '}
        &{' '}
        <a href="https://github.com/kajgrant/transittracker" className="black-underline">
          <b id="translink-color">Transit</b>Tracker
        </a>
      </h2>
      <ul>
        <p className="bullet-text two-fade-in no-margin">
          <li>Personal interest projects to interact with the Reddit api and Translink api platforms</li>
          <li>Uses either a command line interface or graphical interface intended for a small raspberry pi screen</li>
        </p>
      </ul>
    </div>
    <div className="content-container">
      <h2 className="project-headers">
        <a href="https://github.com/kajgrant/ExU" className="black-underline">
          <b id="risc-color">RISC</b>-<b id="v-color">V</b> Execution Unit
        </a>
      </h2>
      <ul>
        <p className="bullet-text two-fade-in no-margin">
          <li>
            Designed a <b>VHDL</b> based execution unit capable of executing the full <b>RISC-V</b> instruction set
          </li>
          <li>Implemented barrel shifters, a 64-bit adder, and a logic unit to correctly respond to input signals</li>
          <li>
            Synthesized on the <b>Cyclone IV FPGA</b> and performed timing analysis using <b>ModelSim</b> waveforms
          </li>
        </p>
      </ul>
    </div>
  </Section>
);

export default Projects;
