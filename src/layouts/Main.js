import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import Header from '../components/Header/Header';
import NavCell from '../components/Header/NavCell';

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
      <DarkModeSwitch
        checked={isDarkMode}
        style={{ margin: '0px', position: 'absolute', right: '50px', top: '110px' }}
        onChange={toggleDarkMode}
        size={40}
      />
      {/*Future entry point of Navigation*/}
      <div id="wrapper">
        <div id="topbar">
          <NavCell />
          <Header text={props.header} subtext={props.subheader} location={props.location}></Header>
        </div>
        {props.children}
      </div>
    </HelmetProvider>
  );
};

export default Main;
