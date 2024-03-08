import { Main } from 'features/layout';
import { About } from 'features/about';
import { Projects } from 'features/projects';
import { Experience } from 'features/experience';

const Index = () => {
  return (
    <Main description={"Hi I'm Kaj. I'm a recent Computer Engineering graduate based in Vancouver Canada. Let's talk!"}>
      <About />
      <Projects />
      <Experience />
    </Main>
  );
};

export default Index;
