import personalLogo from './logo.png';
import emailLogo from './emaillogo.png';
import linkedinLogo from './linkedinlogo.png';
import githubLogo from './githublogo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div id="top-container" className="w-full">
                <div id="logos-container" className="relative">
                    <img src={personalLogo} id="personal-logo" alt="KGM" />
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
                <div id="about-container">
                    <h1 className="side-bar relative" id="about">
                        About
                    </h1>
                    <div className="content relative">
                        <p>
                            Hi, I'm Kaj.<br></br>
                            <br></br>I'm a 5th year student currently in my last term of my Computer Engineering Degree.{' '}
                            <br></br>I am passionate about the <strong>entire</strong> stack... from computer hardware,
                            to reliable back-end infrastructure, and all the way up to brilliant user design. Currently,
                            I'm looking for a full time position in a Software Engineering field. I have experience
                            working with large-scale media pipelines, building scalable systems, and maintaining core
                            infrastructure.
                        </p>
                    </div>
                </div>
                <h1 className="side-bar" id="projects">
                    Projects
                </h1>
                <h1 className="side-bar" id="media">
                    Media
                </h1>
            </span>
        </div>
    );
}

export default App;
