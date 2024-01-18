import React from 'react';

import Section from '../Template/Section';
import Cell from '../Template/Cell';

import data from '../../data/projects';

const Projects = () => (
  <Section title="Projects">
    {data.map((project) => (
      <Cell data={project} key={project.title} />
    ))}
  </Section>
);

export default Projects;
