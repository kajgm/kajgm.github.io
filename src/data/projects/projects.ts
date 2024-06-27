export const projectsData = [
  {
    title: 'StockTracker',
    image: '/images/content/stocktracker.svg',
    invert: true,
    role: 'Personal Interest Project',
    duration: 'May 2024 - Present',
    link: 'https://github.com/kajgrant/stocktracker',
    bulletpoints: [
      'A full-stack stock and cryptocurrency price tracker focusing on minimal design principles',
      'Intended for use on a 3.5" raspberry pi screen or within a web browser',
      'Capable of displaying thousands of unique tickers with both live and delayed price estimates',
      'Retrives data from the Coinbase Websocket and Finanical Modeling Prep REST API platforms',
    ],
    skills: ['TypeScript', 'Vue', 'Vite', 'Node.js', 'Docker', 'Websockets', 'APIs'],
  },
  {
    title: 'Chairable, by Roll Technology',
    image: '/images/content/rolltech.svg',
    role: 'SFU Engineering Capstone',
    duration: 'May 2023 - Dec 2023',
    link: 'https://github.com/kajgrant/rolltech',
    bulletpoints: [
      'Designed a modular attachment for office chairs using a spherical wheel for enhanced powered movement',
      'Led a team of 5 students to produce a minimum viable product and publicly demonstrate system capabilities',
      'Built an enclosed electrical circuit with 14+ motor control, communication, logic, and safety elements',
      'Devised a mechanical system with machined steel and 3D printed components to control a 2200W motor',
    ],
    skills: ['C++', 'SolidWorks', 'KiCad', 'Soldering', 'Electrical Design', 'Photoshop'],
  },
  {
    title: 'CUDA & FPGA Accelerated Gaussian Elimination Algorithm',
    image: '/images/content/xilinx.svg',
    role: 'ENSC 453/894 Final Project',
    duration: 'Sept 2023 - Dec 2023',
    link: 'https://github.com/kajgrant/gaussian-acceleration',
    bulletpoints: [
      'Minimized execution time via buffering, tiling, memory, compute, and ping-pong data transfer enhancements',
      'Achieved an 8.4 speedup factor using Intel Intrinsics and OpenMP optimizations on the CPU-based platform',
      'Doubled performance of CUDA algorithm based on analysis of underlying GPU architecture and cache layout',
      'Compared CPU (Intel i9-10900X), FPGA (AMD Alevo U50), and GPU (Nvidia A4000) implementations',
    ],
    skills: ['C', 'Cuda', 'Intel Intrinsics', 'OpenMp', 'Xilinx Vitis'],
  },
  {
    title: 'TransitTracker',
    image: '/images/content/translinkbuses.svg',
    role: 'Personal Interest Project',
    duration: 'Feb 2023',
    link: 'https://github.com/kajgrant/transittracker',
    bulletpoints: [
      'Personal interest project to explore interactions with the Translink API platform',
      'Uses either a command line interface or graphical interface intended for a small raspberry pi screen',
      'Continuously displays current bus schedules and the time remaining till arrival of chosen bus routes',
      'Includes animated features, a user interface designed for quick comprehension, and robust error handling',
    ],
    skills: ['Python', 'APIs'],
  },
  {
    title: 'Hardware Accelerated Guitar Tuner',
    image: '/images/content/frequency.svg',
    invert: true,
    role: 'ENSC 452/894 Final Project',
    duration: 'Jan 2023 - May 2023',
    link: 'https://github.com/kajgrant/guitar-tuner',
    bulletpoints: [
      'Designed a dual core ARM-based architecture using the Xilinx Zedboard FPGA for a custom guitar tuner',
      'Streamlined data transfer logic to achieve 1Hz accuracy and an input to output latency of less than 1 second',
      'Interfaced 9+ Audio Codecs, FFT blocks, GPIO blocks, and VGA controllers with C-based software',
      'Created an optimized hardware block in VHDL to perform the Harmonic Product Spectrum calculation',
    ],
    skills: ['C', 'VHDL', 'Vivado', 'Xilinx Vitis', 'Frequency Theory'],
  },
  {
    title: 'RISC-V Execution Unit',
    image: '/images/content/riscv.svg',
    role: 'ENSC 350 Final Project',
    duration: 'Jan 2022 - May 2022',
    link: 'https://github.com/kajgrant/ExU',
    bulletpoints: [
      'Designed a VHDL based execution unit capable of executing the full RISC-V instruction set',
      'Implemented barrel shifters, a 64-bit adder, and a logic unit to correctly respond to input signals',
      'Synthesized on the Cyclone IV FPGA and performed timing analysis using ModelSim waveforms',
    ],
    skills: ['RISC-V', 'VHDL', 'Quartus', 'Modelsim'],
  },
];
