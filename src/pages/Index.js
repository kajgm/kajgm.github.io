import React from 'react';
import Main from '../layouts/Main';

import Projects from '../components/projects';
import Experience from '../components/experience';

const Index = () => (
  <div>
    <Main>
      <div id="about-container" className="content">
        <h1 className="content-headers side-bar no-margin">About</h1>
        <div className="sub-content">
          <p id="about-text" className="two-fade-in no-margin">
            Hi, I'm{' '}
            <strong className="bounce-text no-margin" id="kaj-text">
              Kaj
            </strong>
            . <i id="hidden-kaj"> - pronounced like Kai (and rhymes with pie 🥧) </i>
            <br></br>
            <br></br>I'm a recent Computer Engineering graduate based in Vancouver, BC and Toronto, ON. <br></br>I'm
            passionate about the <strong className="color-reveal">entire</strong> stack... from computer architecture,
            to reliable back-end infrastructure, and all the way up to brilliant user design. <br></br>
            <br></br>Currently, I'm looking for a full-time position in a Software Engineering field. I have experience
            working with large-scale media pipelines, building scalable systems and maintaining core infrastructure.
          </p>
        </div>
      </div>
    </Main>
    <Projects />
    <Experience />
  </div>
);

export default Index;
