import sapLogo from './img/logos/sap.svg';
import sonyLogo from './img/logos/sony.svg';

import './styles/main.css';
import './styles/globals.css';
import './styles/extras.css';

const Experience = () => {
    return (
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
                            <p className="work-duration-text no-margin">8-Month Co-Op - Agile Developer || 2022</p>
                        </div>
                    </div>
                    <ul>
                        <p className="bullet-text two-fade-in no-margin">
                            <li>
                                Assigned to the core infrastructure team involved with development, maintenance, and
                                on-call support
                            </li>
                            <li>
                                Participated in daily stand-ups and scrum meetings to continuously improve development
                                process
                            </li>
                            <li>
                                Responded to concurrent <strong>Jira</strong> tickets involving new features or fixes to
                                existing systems
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
                            <p className="work-duration-text no-margin">8-Month Co-Op - Systems Engineer || 2020</p>
                        </div>
                    </div>
                    <ul>
                        <p className="bullet-text two-fade-in no-margin">
                            <li>
                                Created several apps in <strong>C</strong>, <strong>Python</strong>, and{' '}
                                <strong>JavaScript</strong> to assist with production and senior engineer workflows
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
    );
};
export default Experience;
