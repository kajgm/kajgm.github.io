import spotfiyLogo from './img/logos/spotify.svg';
import linkedinLogo from './img/logos/linkedin.svg';
import githubLogo from './img/logos/github.svg';
import './css/main.css';
import './css/personal-logo.css';
import './css/animations.css';
import './css/underlines.css';
import './css/globals.css';

function Main() {
    return (
        <div className="Main">
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
                        <a href="https://open.spotify.com/user/btwz8uoci9s53csetc7jkjezk?si=2978b1c5e8f64d22">
                            <img src={spotfiyLogo} id="spotify-logo" className="socials-logos relative" alt="Spotify" />
                        </a>
                        <a href="https://www.linkedin.com/in/kaj-grant-mathiasen/">
                            <img
                                src={linkedinLogo}
                                id="linkedIn-logo"
                                className="socials-logos relative"
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="https://github.com/kajgrant">
                            <img src={githubLogo} id="github-logo" className="socials-logos relative" alt="Github" />
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
                </div>
            </div>

            <div id="content-container" className="relative">
                <div id="about-container" className="content">
                    <h1 className="content-headers side-bar no-margin" id="about">
                        <u className="black-underline">About</u>
                    </h1>
                    <div className="sub-content">
                        <p id="about-text" className="two-fade-in no-margin">
                            Hi, I'm <strong id="kaj-text">Kaj</strong>.{' '}
                            <i id="hidden-kaj"> - pronounced like Kai and rhymes with 🥧</i>
                            <br></br>
                            <br></br>I'm a 5th year student currently in my last term of my Computer Engineering Degree.{' '}
                            <br></br>I'm passionate about the <strong>entire</strong> stack... from computer hardware,
                            to reliable back-end infrastructure, and all the way up to{' '}
                            <u className="color-underline">brilliant</u> user design. Currently, I'm looking for a
                            full-time position in a Software Engineering field. I have experience working with
                            large-scale media pipelines, building scalable systems and maintaining core infrastructure.
                        </p>
                    </div>
                </div>
                <div id="projects-container" className="content">
                    <h1 className="content-headers side-bar no-margin">
                        <u className="black-underline">Projects</u>
                    </h1>
                    <div className="projects sub-content">
                        <h2 className="project-headers">
                            <a href="https://github.com/kajgrant/guitar-tuner" className="color-link">
                                Hardware Accelerated Guitar Tuner
                            </a>
                        </h2>
                        <p className="two-fade-in project-text">
                            A Zedboard FPGA based guitar tuner that uses a Fast Fourier Transform core and a custom-made
                            Harmonic Product Spectrum core. Involves multithreaded operation to detect note frequency
                            and output feedback to a VGA based ui.
                        </p>
                        <h2 className="project-headers">
                            <a href="https://github.com/kajgrant/rolltech" className="color-link">
                                <p id="chairable-logo">Chairable</p>, by Roll Technology
                            </a>
                        </h2>
                        <p className="two-fade-in project-text">
                            A Simon Fraser University Engineering Capstone project that utilizes spherical wheel
                            technology to move the standard office chair.
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
                        <p className="two-fade-in project-text">
                            Personal interest projects to interact with the Reddit api and Translink api platforms.
                        </p>
                    </div>
                </div>
                <div id="media-container" className="content">
                    <h1 className="content-headers side-bar no-margin">
                        <u className="black-underline">Media</u>
                    </h1>
                    <div id="media-content">
                        <p id="coming-soon">Coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
