import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import resumeLogo from './img/logos/resume.svg';
import linkedinLogo from './img/logos/linkedin.svg';
import githubLogo from './img/logos/github.svg';
import location from './img/location.svg';

import resume from './res/resume.pdf';

import './styles/main.css';
import './styles/globals.css';
import './styles/extras.css';
import './styles/animations.css';
import './styles/colors.css';
import './styles/personal-logo.css';
import './styles/scrollbar.css';

import DateTime from './dateTime';
import Projects from './projects';
import Experience from './experience';

function Main() {
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
                                <img src={linkedinLogo} className="socials-logos relative" alt="LinkedIn" />
                            </a>
                            <a href={resume} target="_blank" rel="noreferrer">
                                <img src={resumeLogo} className="socials-logos relative" alt="Spotify" />
                            </a>
                            <a href="https://github.com/kajgrant">
                                <img src={githubLogo} className="socials-logos relative" alt="Github" />
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
                            <a
                                className="no-decoration"
                                id="location-time-container"
                                href="https://en.wikipedia.org/wiki/Vancouver"
                            >
                                <img src={location} id="location" className="relative" alt="Location" />
                                <p id="location-text" className="no-margin">
                                    Vancouver, BC. Canada -{' '}
                                </p>
                            </a>
                            <DateTime />
                        </div>
                    </div>
                </div>

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
                            <br></br>I'm a recent Computer Engineering graduate based in Vancouver, BC and Toronto, ON.{' '}
                            <br></br>I'm passionate about the <strong className="color-reveal">entire</strong> stack...
                            from computer architecture, to reliable back-end infrastructure, and all the way up to
                            brilliant user design. <br></br>
                            <br></br>Currently, I'm looking for a full-time position in a Software Engineering field. I
                            have experience working with large-scale media pipelines, building scalable systems and
                            maintaining core infrastructure.
                        </p>
                    </div>
                </div>

                <Projects />
                <Experience />
            </div>
        </div>
    );
}

export default Main;
