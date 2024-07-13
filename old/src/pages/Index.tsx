import { Main } from 'features/layout';
import { About } from 'features/about';
import { Projects } from 'features/projects';
import { Experience } from 'features/experience';

const Index = () => {
  return (
    <Main>
      <About />
      <Projects />
      <Experience />
    </Main>
  );
};

export default Index;
