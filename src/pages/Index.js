import React from 'react';
import Main from '../features/layout/main/Main';
import About from '../features/about/components/about/About';
import Projects from '../features/projects/components/Projects';
import Experience from '../features/experience/components/experience/Experience';

const Index = () => (
  <Main description={"Hi I'm Kaj. I'm a recent Computer Engineering graduate based in Vancouver Canada. Let's talk!"}>
    <About />
    <Projects />
    <Experience />
  </Main>
);

export default Index;
