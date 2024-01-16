import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import Logo from '../components/Header/Logo';
import Header from '../components/Header/Header';
import Socials from '../components/Header/Socials';

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
    <HelmetProvider>
      <Helmet titleTemplate="%s | Kaj Grant-Mathiasen" defaultTitle="Kaj Grant-Mathiasen" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
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
            <Header>Kaj Grant-Mathiasen</Header>
          </div>
          {props.children}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Main;
