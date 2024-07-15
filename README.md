# kajgrant.github.io &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/kajgrant/kajgrant.github.io/blob/master/LICENSE) [![Node.js CI](https://github.com/kajgrant/kajgrant.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/kajgrant/kajgrant.github.io/actions/workflows/node.js.yml) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A simple personal portfolio website: [kajgm.com](https://kajgm.com/)

## Developed With

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)

## Prerequisites

Please ensure node is installed:

- [Node >= 18.18.0](https://nodejs.org/en/download)

## Installation

Follow these steps to install and run the development environment:

1. Clone the repository

```
git clone git@github.com:kajgrant/kajgrant.github.io.git
```

2. Install node modules

```
cd kajgrant.github.io/
npm install
```

## Running development server

To start the development server use the following command:

```
npm run dev
```

Your default browser will automatically open to the development server homepage.

> The address should be [http://localhost:3000/](http://localhost:3000/)

## Building Static Resources

To build the static resources for local or custom CDN deployment, run the following commands:

```
npm run build
```

This will generate a static version which can be found in `kajgrant.github.io/.next/`.

## Deployment

To build and deploy the static content, head over to the Actions tab. Then select the `Deploy to Github Pages` tab and execute the `workflow_dispatch` event trigger.
