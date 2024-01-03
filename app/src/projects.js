import './styles/main.css';
import './styles/globals.css';
import './styles/animations.css';
import './styles/extras.css';

const Projects = () => {
    return (
        <div>
            <h1 className="content-headers side-bar no-margin">Projects</h1>
            <div className="projects sub-content">
                <div className="content-container twty-margin-bottom">
                    <h2 className="project-headers no-margin">
                        <a href="https://github.com/kajgrant/guitar-tuner" className="black-underline">
                            Hardware Accelerated <b id="guitar-color">Guitar</b> <b id="tuner-color">Tuner</b>
                        </a>
                    </h2>
                    <ul>
                        <p className="bullet-text two-fade-in no-margin">
                            <li>
                                Involves multithreaded operation to detect note frequency and output live feedback to a
                                VGA based ui
                            </li>
                            <li>
                                Designed a custom hardware architecture using the <b>Xilinx Zedboard FPGA</b> for a
                                guitar tuner program
                            </li>
                            <li>Interfaced Audio Codecs, FFT blocks, GPIO blocks, and VGA controller with software</li>
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
                            <b id="chair-color">Chair</b>
                            <b id="able-color">able</b>, by Roll Technology
                        </a>
                    </h2>
                    <ul>
                        <p className="bullet-text two-fade-in no-margin">
                            <li>An 8-month Simon Fraser University Engineering Capstone project</li>
                            <li>
                                Utilizes a spherical wheel design for tight maneuvering and a space-efficient footprint
                            </li>
                            <li>Modular design intended for attachment to a variety of office chair models</li>
                            <li>
                                Large <b>7000mAh</b> capacity battery and the ability to move a <b>125kg</b> load at a{' '}
                                <b>2.5m/s</b> pace
                            </li>
                        </p>
                    </ul>
                </div>
                <div className="content-container twty-margin-bottom">
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
                                Personal interest projects to interact with the Reddit api and Translink api platforms
                            </li>
                            <li>
                                Uses either a command line interface or graphical interface intended for a small
                                raspberry pi screen
                            </li>
                        </p>
                    </ul>
                </div>
                <div className="content-container">
                    <h2 className="project-headers">
                        <a href="https://github.com/kajgrant/ExU" className="black-underline">
                            <b id="risc-color">RISC</b>-<b id="v-color">V</b> Execution Unit
                        </a>
                    </h2>
                    <ul>
                        <p className="bullet-text two-fade-in no-margin">
                            <li>
                                Designed a <b>VHDL</b> based execution unit that could execute the <b>RISC-V</b>{' '}
                                instruction set
                            </li>
                            <li>
                                Implemented barrel shifters, 64-bit adder, and logic unit to correctly respond to input
                                signals
                            </li>
                            <li>
                                Synthesized on the <b>Cyclone IV FPGA</b> and performed timing analysis using{' '}
                                <b>ModelSim</b> waveforms
                            </li>
                        </p>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;
