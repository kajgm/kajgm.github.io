import { Cell, Section } from 'features/layout/';
import { projectsData } from 'data/projects';

export function Projects() {
  return (
    <Section title="Projects">
      {projectsData.map((project) => (
        <Cell {...project} key={project.title} />
      ))}
    </Section>
  );
}
