# kajgrant.github.io

A simple personal portfolio website.
[kajgm.com](https://kajgm.com/)

## Developed With

- [Node 18.12.1](https://nodejs.org/en)
- [React 18.2.0](https://react.dev/)
- [Webpack 5.89.0](https://webpack.js.org/)

## Prerequisites

Please ensure the following software is installed on your system:

- [Node 16.x](https://nodejs.org/en/download)

## Install

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

## Run

To start the development server use the following command:

```
npm start
```

Your default browser will automatically open to the development server homepage.

> The address should be [http://localhost:3000/](http://localhost:3000/)

## Build

To build the static resources for local or custom CDN deployment, run the following commands:

```
npm run predeploy
npm run build
```

This will generate a static version which can be found in `kajgrant.github.io/build/`.

## Deployment

To build and deploy the static content, head over to the Actions tab. Then select the `Deploy to Github Pages` tab and execute the `workflow_dispatch` event trigger.

## Acknowledgements

Huge thank you to [Michael D'Angelo](https://github.com/mldangelo/) for his excellently documented [website](https://mldangelo.com/). I have referenced several things including the overall project organizational structure as well as the deployment workflow.
