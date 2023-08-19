import personalLogo from './logo.png';
import emailLogo from './emaillogo.png';
import linkedinLogo from './linkedinlogo.png';
import githubLogo from './githublogo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div id="logos-container">
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
            <div className="main-content">
                <div id="name-title">
                    <h1 className="intro-text">Kaj Grant-Mathiasen</h1>
                    <p id="about-text" className="intro-text">
                        Student - Computer Engineer - Software Engineer
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
