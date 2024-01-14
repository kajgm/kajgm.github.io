import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

//import resume from '../../public/assets/publicResume.pdf';

import data from '../data/socials';

import '../static/css/main.css';
import '../static/css/globals.css';
import '../static/css/extras.css';
import '../static/css/animations.css';
import '../static/css/colors.css';
import '../static/css/personal-logo.css';
import '../static/css/scrollbar.css';

import DateTime from '../components/dateTime';

const Main = (props) => {
  const selectedTheme = localStorage.getItem('selectedTheme');
  const themeBool = selectedTheme === 'dark' ? true : false;

  const [isDarkMode, setDarkMode] = React.useState(themeBool);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  if (isDarkMode) {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  } else {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  }

  return (
    <div className="Main relative">
      <div id="toggle-container">
        <DarkModeSwitch checked={isDarkMode} style={{ margin: '0px' }} onChange={toggleDarkMode} size={40} />
      </div>

      <div className="homepage relative">
        <div id="top-container">
          <div id="logos-container" className="relative">
            <div id="personal-logo">
              <a href="https://kajgrant.github.io/">
                <div id="personal-logo-bg" className="relative">
                  <p id="personal-logo-text" className="absolute">
                    KGM
                  </p>
                </div>
              </a>
            </div>

            <div id="socials-container">
              <a href="https://www.linkedin.com/in/kaj-grant-mathiasen/">
                <img src={data[1].image} className="socials-logos relative" alt="LinkedIn" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src={data[0].image} className="socials-logos relative" alt="Spotify" />
              </a>
              <a href="https://github.com/kajgrant">
                <img src={data[2].image} className="socials-logos relative" alt="Github" />
              </a>
            </div>
          </div>

          <div id="main-header" className="relative">
            <a className="no-decoration" href="https://kajgrant.github.io/">
              <h1 id="name-title" className="no-margin">
                Kaj Grant-Mathiasen
              </h1>
            </a>
            <p id="subheader-text" className="no-margin">
              Computer Engineer - Software Engineer - Videographer - Photographer
            </p>

            <div id="location-time-container" className="no-margin">
              <a className="no-decoration" id="location-time-container" href="https://en.wikipedia.org/wiki/Vancouver">
                <img src={data[3].image} id="location" className="relative" alt="Location" />
                <p id="location-text" className="no-margin">
                  Vancouver, BC. Canada -{' '}
                </p>
              </a>
              <DateTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
