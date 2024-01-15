const data = [
  {
    title: 'Chairable, by Roll Technology',
    image: '/img/rolltech.svg',
    role: 'SFU Engineering Capstone',
    duration: 'May 2023 - Dec 2023',
    link: 'https://github.com/kajgrant/rolltech',
    description: [
      'Designed a modular attachment for office chairs using a spherical wheel for enhanced powered movement',
      'Led a team of 5 students to produce a minimum viable product and publicly demonstrate system capabilities',
      'Built an enclosed electrical circuit with 14+ motor control, communication, logic, and safety elements',
      'Devised a mechanical system with machined steel and 3D printed components to control a 2200W motor',
    ],
    skills: ['C++', 'SolidWorks', 'KiCad', 'Soldering', 'Electrical Design', 'Photoshop'],
  },
  {
    title: 'FPGA Accelerated Gaussian Elimination Algorithm',
    image: '/img/xilinx.svg',
    role: 'ENSC 453/894 Final Project',
    duration: 'Sept 2023 - Dec 2023',
    link: 'https://github.com/kajgrant/gaussian-acceleration',
    description: [
      'Minimized execution time via buffering, tiling, memory, compute, and ping-pong data transfer enhancements',
      'Incorporated Intel Intrinsics and OpenMP CPU optimizations to achieve a speedup factor greater than 8.4',
      'Streamlined CUDA-based algorithm based on underlying GPU architecture to gain a speedup factor of 2.1',
      'Performed comparison and analysis of naive, CPU (Intel i9-10900X), FPGA (AMD Alevo U50), and GPU (Nvidia A4000) implementations',
    ],
    skills: ['C', 'Cuda', 'Intel Intrinsics', 'OpenMp', 'Xilinx Vitis'],
  },
  {
    title: 'Hardware Accelerated Guitar Tuner',
    image: '/img/frequency.svg',
    role: 'ENSC 452/894 Final Project',
    duration: 'Jan 2023 - May 2023',
    link: 'https://github.com/kajgrant/guitar-tuner',
    description: [
      'Designed a custom ARM based architecture using the Xilinx Zedboard FPGA for a guitar tuner program',
      'Interfaced 9+ Audio Codecs, FFT blocks, GPIO blocks, and VGA controllers with C-based software',
      'Created an optimized hardware block in VHDL to perform the Harmonic Product Spectrum calculation',
      'Reduced latency to less than 1s between live auto stream input and corresponding VGA display output',
    ],
    skills: ['C', 'VHDL', 'Vivado', 'Xilinx Vitis', 'Frequency Theory'],
  },
  {
    title: 'RISC-V Execution Unit',
    image: '/img/riscv.svg',
    role: 'ENSC 350 Final Project',
    duration: 'Jan 2022 - May 2022',
    link: 'https://github.com/kajgrant/ExU',
    description: [
      'Designed a VHDL based execution unit capable of executing the full RISC-V instruction set',
      'Implemented barrel shifters, a 64-bit adder, and a logic unit to correctly respond to input signals',
      'Synthesized on the Cyclone IV FPGA and performed timing analysis using ModelSim waveforms',
    ],
    skills: ['RISC-V', 'VHDL', 'Quartus', 'Modelsim'],
  },
  {
    title: 'RedditSalesTracker',
    image: '/img/reddit.svg',
    role: 'Personal interest project',
    duration: 'Jan 2023 - Present',
    link: 'https://github.com/kajgrant/transittracker',
    description: [
      'Personal interest projects to interact with the Reddit API and Translink API platforms',
      'Uses either a command line interface or graphical interface intended for a small raspberry pi screen',
    ],
    skills: ['Python', 'APIs'],
  },
  {
    title: 'TransitTracker',
    image: '/img/translinkbuses.svg',
    role: 'Personal interest project',
    duration: 'Feb 2023 - Present',
    link: 'https://github.com/kajgrant/transittracker',
    description: [
      'Personal interest projects to interact with the Reddit API and Translink API platforms',
      'Uses either a command line interface or graphical interface intended for a small raspberry pi screen',
    ],
    skills: ['Python', 'APIs'],
  },
];

export default data;
