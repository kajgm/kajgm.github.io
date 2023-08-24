import emailLogo from './img/logos/emaillogo.png';
import linkedinLogo from './img/logos/linkedinlogo.png';
import githubLogo from './img/logos/githublogo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div id="content">
                <div id="top-container">
                    <div id="logos-container" className="relative">
                        <div id="personal-logo">
                            <div id="personal-logo-bg" className="relative">
                                <p id="personal-logo-text" className="absolute">
                                    KGM
                                </p>
                            </div>
                        </div>
                        <div id="socials-container">
                            <a href="mailto:kajgrant@gmail.com">
                                <img src={emailLogo} id="email-logo" className="socials-logos" alt="Email" />
                            </a>
                            <a href="https://www.linkedin.com/in/kaj-grant-mathiasen/">
                                <img src={linkedinLogo} id="linkedIn-logo" className="socials-logos" alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/kajgrant">
                                <img src={githubLogo} id="github-logo" className="socials-logos" alt="Github" />
                            </a>
                        </div>
                    </div>

                    <div id="name-title" className="relative">
                        <a className="intro-text" href="https://kajgrant.github.io/">
                            <h1 className="intro-text">Kaj Grant-Mathiasen</h1>
                        </a>
                        <p id="subheader-text" className="intro-text">
                            Student - Computer Engineer - Software Engineer - Videographer - Photographer
                        </p>
                    </div>
                </div>

                <span className="main-page relative">
                    <div id="about-container" className="content-container">
                        <h1 className="side-bar" id="about">
                            <u className="black-underline">About</u>
                        </h1>
                        <div className="sub-content">
                            <p id="about-text" className="fade-text">
                                Hi, I'm Kaj.<br></br>
                                <br></br>I'm a 5th year student currently in my last term of my Computer Engineering
                                Degree. <br></br>I'm passionate about the <strong>entire</strong> stack... from computer
                                hardware, to reliable back-end infrastructure, and all the way up to{' '}
                                <u className="color-underline">brilliant</u> user design. Currently, I'm looking for a
                                full-time position in a Software Engineering field. I have experience working with
                                large-scale media pipelines, building scalable systems and maintaining core
                                infrastructure.
                            </p>
                        </div>
                    </div>
                    <div id="projects-container" className="content-container">
                        <h1 className="side-bar" id="projects">
                            <u className="black-underline">Projects</u>
                        </h1>
                        <div className="projects sub-content">
                            <h2 className="project-headers">
                                <a href="https://github.com/kajgrant/guitar-tuner" className="color-link">
                                    Hardware Accelerated Guitar Tuner
                                </a>
                            </h2>
                            <p className="fade-text">
                                A Zedboard FPGA based guitar tuner that uses a Fast Fourier Transform core and a custom
                                Harmonic Product Spectrum core. Involves multithreaded operation to detect note
                                frequency and output feedback to a VGA based ui.
                            </p>
                            <h2 className="project-headers">
                                <a href="https://github.com/kajgrant/rolltech" className="color-link">
                                    <p id="chairable-logo">Chairable</p>, by Roll Technology
                                </a>
                            </h2>
                            <p className="fade-text">
                                An SFU Engineering Capstone project that utilizes spherical wheel technology to move the
                                standard office chair.
                            </p>
                            <h2 className="project-headers">
                                <a href="https://github.com/kajgrant/redditsalestracker" className="color-link">
                                    RedditSalesTracker
                                </a>{' '}
                                &{' '}
                                <a href="https://github.com/kajgrant/transittracker" className="color-link">
                                    TransitTracker
                                </a>
                            </h2>
                            <p className="fade-text">
                                Personal interest projects to interact with the Reddit api and Translink api platforms.
                            </p>
                        </div>
                    </div>
                    <div id="media-container" className="content-container">
                        <h1 className="side-bar" id="media">
                            <u className="black-underline">Media</u>
                        </h1>
                        <div id="media-content">
                            <p className="coming-soon">Coming soon...</p>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default App;
