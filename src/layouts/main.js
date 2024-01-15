import { useEffect, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import createPersistedState from 'use-persisted-state';

import '../static/css/main.css';
import '../static/css/globals.css';
import '../static/css/extras.css';
import '../static/css/animations.css';
import '../static/css/colors.css';
import '../static/css/scrollbar.css';

import Logo from '../components/Header/Logo';
import Header from '../components/Header/Header';
import Socials from '../components/Header/Socials';

const useColorSchemeState = createPersistedState('colorScheme');

const Main = (props) => {
  const systemPrefersDark = useMediaQuery({
    query: '(prefers-color-scheme: dark)',
  });

  const [isDarkMode, setDarkMode] = useColorSchemeState();
  const isChecked = useMemo(
    () => (isDarkMode === undefined ? !!systemPrefersDark : isDarkMode),
    [isDarkMode, systemPrefersDark]
  );

  useEffect(() => {
    if (isChecked) {
      document.querySelector('body').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  }, [isChecked]);

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Kaj Grant-Mathiasen" defaultTitle="Kaj Grant-Mathiasen" defer={false}>
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description} />
      </Helmet>
      <div className="Main relative">
        <div id="toggle-container">
          <DarkModeSwitch checked={isChecked} style={{ margin: '0px' }} onChange={setDarkMode} size={40} />
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
