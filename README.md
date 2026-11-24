# kajgm.github.io &middot; ![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg) [![Node.js CI](https://github.com/kajgm/kajgm.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/kajgm/kajgm.github.io/actions/workflows/node.js.yml) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A personal portfolio website: [kajgm.com](https://kajgm.com/)

## The page

- A pixel-art sky behind the page: a day sky in light mode, a late sunset with twinkling stars in dark mode.
- Painted pixel clouds (a WebGL shader) rise in from below on load and drift with a shared wind. Three server
  racks float on the centre cloud; click a rack to send a packet down its cables.
- Hovering the Canonical logo shows the certifications as a constellation, with a new pattern each time
  (always shown on touch screens). Each badge links to its certification body.
- Clicking the title sends a shooting star.
- Reduced motion shows still frames.

The sky lives in `src/components/SkyScene.tsx` and `src/components/sky/`, styled by `src/app/sky.css`.

## Developed With

- [Next.js](https://nextjs.org/) (static export)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)

## Prerequisites

- [Node 26](https://nodejs.org/en/download) (pinned in `.nvmrc`; `nvm use` picks it up)

## Installation

1. Clone the repository

```
git clone https://github.com/kajgm/kajgm.github.io.git
```

2. Install node modules

```
cd kajgm.github.io/
npm install
```

## Development

Start the development server, then open [http://localhost:3000/](http://localhost:3000/):

```
npm run dev
```

Run the tests and the linter:

```
npm test
npm run lint
```

## Building Static Resources

```
npm run build
```

The static site is written to `out/`.

## Deployment

The site deploys to GitHub Pages by hand: in the Actions tab, select the `publish` workflow and run it
(`workflow_dispatch`).
