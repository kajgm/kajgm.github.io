import personalLogo from './logo.png';
import linkedinLogo from './linkedinlogo.png';
import githubLogo from './githublogo.png';
import emailLogo from './emaillogo.avif';
import './App.css';

function App() {
    return (
        <div className="App">
            <div id="logos-container">
                <img src={personalLogo} id="personal-logo" alt="KGM" />
                <div id="socials-container">
                    <img src={linkedinLogo} id="linkedIn-logo" className="socials-logos" alt="LinkedIn" />
                    <img src={githubLogo} id="github-logo" className="socials-logos" alt="Github" />
                    <img src={emailLogo} id="email-logo" className="socials-logos" alt="Email" />
                </div>
            </div>
            <div className="main-content">
                <div id="name-title">
                    <h1 className="intro-text">Kaj Grant-Mathiasen</h1>
                    <h2 id="about-text" className="intro-text">
                        Student - Computer Engineer - Software Engineer
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default App;
