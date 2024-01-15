import React from 'react';
import Main from '../layouts/Main';

import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

const Index = () => (
  <Main description={"Hi I'm Kaj. I'm a recent Computer Engineering graduate based in Vancouver Canada. Let's talk!"}>
    <About />
    <Projects />
    <Experience />
  </Main>
);

export default Index;
