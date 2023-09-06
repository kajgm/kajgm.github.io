import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import spotfiyLogo from './img/logos/spotify.svg';
import linkedinLogo from './img/logos/linkedin.svg';
import githubLogo from './img/logos/github.svg';
import sapLogo from './img/logos/sap.svg';
import sonyLogo from './img/logos/sony.svg';
import location from './img/location.svg';

import './css/main.css';
import './css/personal-logo.css';
import './css/animations.css';
import './css/extras.css';
import './css/globals.css';

import DateTime from './dateTime';

function Main() {
    const selectedTheme = localStorage.getItem('selectedTheme');

    let themeBool = false;

    if (selectedTheme === 'dark') {
        themeBool = true;
    }

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
        <div className="Main">
            <div id="toggle-container">
                <DarkModeSwitch checked={isDarkMode} style={{ margin: '0px' }} onChange={toggleDarkMode} size={40} />
            </div>

            <div id="top-container">
                <div id="logos-container" className="relative">
                    <a href="https://kajgrant.github.io/">
                        <div id="personal-logo">
                            <div id="personal-logo-bg" className="relative">
                                <p id="personal-logo-text" className="absolute">
                                    KGM
                                </p>
                            </div>
                        </div>
                    </a>
                    <div id="socials-container">
                        <a href="https://open.spotify.com/user/btwz8uoci9s53csetc7jkjezk?si=2978b1c5e8f64d22">
                            <img src={spotfiyLogo} className="socials-logos" alt="Spotify" />
                        </a>
                        <a href="https://www.linkedin.com/in/kaj-grant-mathiasen/">
                            <img src={linkedinLogo} className="socials-logos" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/kajgrant">
                            <img src={githubLogo} className="socials-logos" alt="Github" />
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
                        Student - Computer Engineer - Software Engineer - Videographer - Photographer
                    </p>
                    <a className="no-decoration" href="https://en.wikipedia.org/wiki/Vancouver">
                        <div id="location-time-container" className="no-margin">
                            <img src={location} id="location" className="relative" alt="Location" />
                            <p id="location-text" className="no-margin">
                                Vancouver, BC. Canada -{' '}
                            </p>
                            <DateTime></DateTime>
                        </div>
                    </a>
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
                        <br></br>I'm a 5th year student currently in my last term of my Computer Engineering Degree.{' '}
                        <br></br>I'm passionate about the <strong className="color-reveal">entire</strong> stack... from
                        computer architecture, to reliable back-end infrastructure, and all the way up to brilliant user
                        design. <br></br>
                        <br></br>Currently, I'm looking for a full-time position in a Software Engineering field. I have
                        experience working with large-scale media pipelines, building scalable systems and maintaining
                        core infrastructure.
                    </p>
                </div>
            </div>

            <div id="projects-container" className="content">
                <h1 className="content-headers side-bar no-margin">Projects</h1>
                <div className="projects sub-content">
                    <div className="content-container twty-margin-bottom">
                        <h2 className="project-headers no-margin">
                            <a href="https://github.com/kajgrant/guitar-tuner" className="black-underline">
                                Hardware Accelerated Guitar Tuner
                            </a>
                        </h2>
                        <ul>
                            <p className="bullet-text two-fade-in no-margin">
                                <li>
                                    Involves multithreaded operation to detect note frequency and output live feedback
                                    to a VGA based ui
                                </li>
                                <li>
                                    Designed a custom hardware architecture using the <b>Xilinx Zedboard FPGA</b> for a
                                    guitar tuner program
                                </li>
                                <li>
                                    Interfaced Audio Codecs, FFT blocks, GPIO blocks, and VGA controller with software
                                </li>
                                <li>
                                    Created a custom hardware block in <b>VHDL</b> to perform Harmonic Product Spectrum
                                    calculation
                                </li>
                            </p>
                        </ul>
                    </div>
                    <div className="content-container twty-margin-bottom">
                        <h2 className="project-headers">
                            <a href="https://github.com/kajgrant/rolltech" className="black-underline">
                                <p id="chairable-logo">Chairable</p>, by Roll Technology
                            </a>
                        </h2>
                        <ul>
                            <p className="bullet-text two-fade-in no-margin">
                                <li>An 8-month Simon Fraser University Engineering Capstone project</li>
                                <li>
                                    Utilizes a spherical wheel design for tight maneuvering and a space-efficient
                                    footprint
                                </li>
                                <li>Modular design intended for attachment to a variety of office chair models</li>
                                <li>
                                    Large <b>6200mAh</b> capacity battery and the ability to move a <b>125kg</b> load at
                                    a <b>2.5m/s</b> pace
                                </li>
                            </p>
                        </ul>
                    </div>
                    <div className="content-container">
                        <h2 className="project-headers">
                            <a href="https://github.com/kajgrant/redditsalestracker" className="black-underline">
                                <b id="reddit-color">Reddit</b>SalesTracker
                            </a>{' '}
                            &{' '}
                            <a href="https://github.com/kajgrant/transittracker" className="black-underline">
                                <b id="translink-color">Transit</b>Tracker
                            </a>
                        </h2>
                        <ul>
                            <p className="bullet-text two-fade-in no-margin">
                                <li>
                                    Personal interest projects to interact with the Reddit api and Translink api
                                    platforms
                                </li>
                                <li>
                                    Uses either a command line interface or graphical interface intended for a small
                                    raspberry pi screen
                                </li>
                            </p>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="experience-container" className="content">
                <h1 className="content-headers side-bar no-margin">Experience</h1>
                <div className="experience sub-content">
                    <div className="content-container twty-margin-bottom">
                        <div className="exp-headers-container">
                            <a href="https://www.sap.com/canada/index.html">
                                <img src={sapLogo} id="SAP-logo" className="company-logos relative" alt="SAP" />
                            </a>
                            <div className="exp-headers-text">
                                <h2 className="experience-headers">
                                    <a href="https://www.sap.com/canada/index.html" className="black-underline">
                                        SAP Canada Inc.
                                    </a>
                                </h2>
                                <p className="work-duration-text no-margin">8-Month Internship - Agile Developer</p>
                            </div>
                        </div>
                        <ul>
                            <p className="two-fade-in bullet-text">
                                <li>
                                    Assigned to the core infrastructure team involved with development, maintenance, and
                                    on-call support
                                </li>
                                <li>
                                    Participated in daily stand-ups and scrum meetings to continuously improve
                                    development process
                                </li>
                                <li>
                                    Responded to concurrent <strong>Jira</strong> tickets involving new features or
                                    fixes to existing systems
                                </li>
                                <li>
                                    Tested proposed changes in <strong>Jenkins</strong> voter system, local{' '}
                                    <strong>Docker</strong> and <strong>Kubernetes</strong> cloud environments
                                </li>
                            </p>
                        </ul>
                    </div>
                    <div className="content-container">
                        <div className="exp-headers-container">
                            <a href="https://www.imageworks.com/">
                                <img
                                    src={sonyLogo}
                                    id="Sony-logo"
                                    className="company-logos relative dark-invert"
                                    alt="Sony Pictures Imageworks"
                                />
                            </a>
                            <div className="exp-headers-text">
                                <h2 className="experience-headers">
                                    <a href="https://www.imageworks.com/" className="black-underline">
                                        Sony Pictures Imageworks
                                    </a>
                                </h2>
                                <p className="work-duration-text no-margin">8-Month Internship - Systems Engineer</p>
                            </div>
                        </div>
                        <ul>
                            <p className="two-fade-in bullet-text">
                                <li>
                                    Created several apps in <strong>Python</strong> and <strong>JavaScript</strong> to
                                    assist with production and senior engineer workflows
                                </li>
                                <li>
                                    Given administrative level access to troubleshoot a variety of issues on production
                                    level <strong>Linux</strong> machines
                                </li>
                                <li>
                                    Deployed several projects to assist with the transition of 800+ employees to a
                                    work-from-home workflow
                                </li>
                                <li>
                                    Received a film credit for the Animated Film:{' '}
                                    <a
                                        className="no-decoration black-underline"
                                        href="https://jhmovie.fandom.com/wiki/The_Sea_Beast_(2022_film)/Credits"
                                    >
                                        The Sea Beast
                                    </a>
                                </li>
                            </p>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="media-container" className="content">
                <h1 className="content-headers side-bar no-margin">Media</h1>
                <div id="media-content">
                    <p id="coming-soon">Coming soon...</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
