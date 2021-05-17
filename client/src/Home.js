import React, { useState, useEffect } from "react";
import './home.css'
import './buttons.css'
import Typing from 'react-typing-animation';
import iphoneScreen from './images/liquid-screen-phone.png'
import ucbeekeeper from './images/ucbeekeeper.png'
import nowosa2 from './images/nowosa2.png'
import ifishit from './images/ifishit.png'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import Loading from './components/Loading'



const Home = () => {

    return (
        <div className="home-container">


            <div className="front-container">
                <div className='socials-box'>
                    <div className="social-icon">
                        <a href="https://github.com/BradleyMulick" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="github" /> </a>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/bradley-mulick/" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/material-sharp/48/000000/linkedin.png" alt="linked in" /> </a>
                    </div>

                </div>
                <div class="typewriter">

                    <Typing>
                        <h1 className="title-text">
                            Hello, World!<br />
                            I'm Bradley Mulick
                        </h1>

                    </Typing>


                    <a href="#work-display"><button class="button-three">Projects</button></a>
                    <a href="/about"><button class="button-three">My Skills</button></a>
                    {/* <a href="https://docs.google.com/document/d/1gh6Y1HLdbYXL55bVx5L-MRAfj0JzO4tX09CNmILgmzo/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><button class="button-three">Resume</button></a> */}
                    <Typing>
                        <div>
                            <Typing.Delay ms={2530} />
                            <h1 className="title-text">Fullstack Web Developer</h1>
                        </div>
                    </Typing>



                </div>

            </div>
            <a href="#work-display"><img className="down-arrow" src="https://img.icons8.com/officel/50/000000/expand-arrow.png" alt="arrow" /></a>
            <hr className="front-divider" />
            <h2 className='projects-box-title' id="work-display">Projects</h2>
            <div className="work-container" >

                <div className="project-box">
                    <a href="http://www.nowosa.com" target="_blank" rel="noopener noreferrer">
                        <h2>Utah County Beekeepers Association</h2>
                        <h5>Gatsby</h5>
                        <hr />
                        {/* <img src="https://drive.google.com/thumbnail?id=1Hqv4T7-MlwypkD8j5J-4kXTCUh1Wh-SQ" alt="not here" width="1200" height="630" /> */}
                        <img src={ucbeekeeper} alt="Logo" style={{ width: '100%', height: 'auto' }} />
                    </a>
                </div>
                <div className="project-box">
                    <h2>Liquid Money</h2>
                    <h5>React Native/ Firebase</h5>
                    <hr />
                    <img src={iphoneScreen} alt="Logo" style={{ width: 'auto', height: '90%' }} />
                </div>
                <div className="project-box">
                    <a href="http://www.nowosa.com" target="_blank" rel="noopener noreferrer">
                        <h2>NowOsa</h2>
                        <h5>React (MERN)</h5>
                        <hr />
                        {/* <img src="https://lh4.googleusercontent.com/1ZFzugziayv23KRbNHIGmkK-DCnlm8HM_DjjV_amwdqpjhLiOnh7G-oFs2E" alt="not here" width="1200" height="630" /> */}
                        <img src={nowosa2} alt="Logo" style={{ width: '100%', height: 'auto' }} />
                    </a>
                </div>
                <div className="project-box">
                    <a href="http://www.jensenhowardart.com" target="_blank" rel="noopener noreferrer">
                        <h2>Jensen Howard Art</h2>
                        <h5>React (MERN)</h5>
                        <hr />
                        <img src="https://lh4.googleusercontent.com/3pYnMGLTbBgdsWZ1OQK69LL2ydBG8j9URgKOmH5_GnnPP9M1nF6Amsa7Iyw" alt="not here" width="1200" height="630" />
                    </a>
                </div>
                <div className="project-box">
                    <a href="http://www.copperminersrest.com" target="_blank" rel="noopener noreferrer">
                        <h2>Copper Miners Rest</h2>
                        <h5>Vanilla Javascript</h5>
                        <hr />
                        <img src="https://lh5.googleusercontent.com/q6DMXHSTNY5U6E-sMskPkKUY2S0PxafVSovkn0YfkTQPQL8zbZ3PCDhYPYc" alt="not here" width="1200" height="630" />
                    </a>
                </div>
                <div className="project-box">
                    <a href="https://vtrade.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h2>VTrade</h2>

                        <h5>React (MERN)</h5>
                        <hr />
                        <img src="https://lh4.googleusercontent.com/HrN6QVt9TNn99F1ANMVXm_n-C9sfG-E17KXJTDpZOJ9vDs39biFdjAYRPcA" alt="not here" width="1200" height="630" />
                    </a>
                </div>
                <div className="project-box">
                    <a href="https://vtrade.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <h2>iFish it</h2>

                        <h5>Wordpress, WooCommerce, PHP</h5>
                        <hr />
                        <img src={ifishit} alt="Logo" style={{ width: '100%', height: 'auto' }} />
                    </a>
                </div>

            </div>

        </div>
    )
}


export default Home