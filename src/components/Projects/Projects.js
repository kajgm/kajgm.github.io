import React from 'react';

import Section from '../Template/Section';
import ProjectCard from './ProjectCard';

import data from '../../data/projects';

const Projects = () => (
  <Section sectionType="projects-container" title="Projects">
    {data.map((project) => (
      <ProjectCard data={project} key={project.title} />
    ))}
  </Section>
);

export default Projects;
