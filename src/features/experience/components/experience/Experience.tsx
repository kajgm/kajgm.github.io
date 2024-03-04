import React from 'react';
import { Section, Cell } from '@features/layout';
import { experienceData } from '@data/experience';

export function Experience() {
  return (
    <Section title="Experience">
      {experienceData.map((workplace) => (
        <Cell {...workplace} key={workplace.title} />
      ))}
    </Section>
  );
}
