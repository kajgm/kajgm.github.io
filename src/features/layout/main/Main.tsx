import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Links } from 'features/ui';
import { Header } from 'features/layout';

type MainProps = {
  title?: string;
  header?: string;
  subheader?: string;
  description?: string;
  children?: React.ReactNode;
};

export function Main({ title, header, subheader, description, children }: MainProps) {
  const selectedTheme = localStorage.getItem('selectedTheme');
  const themeBool = selectedTheme === 'dark' ? true : false;

  const [isDarkMode, setDarkMode] = React.useState(themeBool);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  const themeStr = isDarkMode ? 'dark' : 'light';
  document.querySelector('body')!.setAttribute('theme', themeStr);
  localStorage.setItem('selectedTheme', themeStr);

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Kaj Grant-Mathiasen" defaultTitle="Kaj Grant-Mathiasen" defer={false}>
        {title && <title>{title}</title>}
        <meta name="description" content={description} />
      </Helmet>
      <DarkModeSwitch
        checked={isDarkMode}
        style={{ margin: '0px', position: 'absolute', right: '50px', top: '75px' }}
        onChange={toggleDarkMode}
        size={40}
        id="theme-toggle"
      />
      {/*Future entry point of Navigation*/}
      <div id="wrapper">
        <div id="topbar">
          <Links />
          <Header text={header} subheader={subheader}></Header>
        </div>
        {children}
      </div>
    </HelmetProvider>
  );
}
