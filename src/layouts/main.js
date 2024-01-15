import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import '../static/css/main.css';
import '../static/css/globals.css';
import '../static/css/extras.css';
import '../static/css/animations.css';
import '../static/css/colors.css';
import '../static/css/scrollbar.css';

import Logo from '../components/Template/Logo';
import Header from '../components/Template/Header';
import Socials from '../components/Template/Socials';

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
            <Logo>KGM</Logo>
            <Socials />
          </div>
          <Header />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Main;
