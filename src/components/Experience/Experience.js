import React from 'react';

import Section from '../Template/Section';

import data from '../../data/experience';
import ExperienceCard from './ExperienceCard';

const Experience = () => (
  <Section sectionType="experience-container" title="Experience">
    {data.map((workplace) => (
      <ExperienceCard data={workplace} key={workplace.title} />
    ))}
  </Section>
);

export default Experience;
