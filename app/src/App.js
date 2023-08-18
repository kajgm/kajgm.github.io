import logo from './logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="Main-Content">
                <div id="Name-Title">
                    <h1 className="Intro-Text">Kaj Grant-Mathiasen</h1>
                    <h2 id="About-Text" className="Intro-Text">
                        Student - Computer Engineer - Software Engineer
                    </h2>
                </div>
            </div>
            <img src={logo} id="App-logo" alt="logo" />
        </div>
    );
}

export default App;
