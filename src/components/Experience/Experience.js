import React from 'react';

import Section from '../Template/Section';
import Cell from '../Template/Cell';

import data from '../../data/experience';

const Experience = () => (
  <Section sectionType="experience-container" title="Experience">
    {data.map((workplace) => (
      <Cell data={workplace} key={workplace.title} />
    ))}
  </Section>
);

export default Experience;
