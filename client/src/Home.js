import React, { useState } from "react";
import './home.css'
import './buttons.css'
import Typing from 'react-typing-animation';
import { SRLWrapper } from "simple-react-lightbox";


const Home = () => {
    
    return (
        <div className="home-container">
                <div className="social-links">
                    <a href="https://github.com/BradleyMulick"><img src="https://img.icons8.com/nolan/50/github.png" /></a>
                    <a href="https://www.linkedin.com/in/bradley-mulick-b2550b195/"><img src="https://img.icons8.com/officel/50/000000/linkedin.png" /></a>
                </div>
                    
            <div className="front-container">
                <div class="typewriter">
                    
                    <Typing>
                        <h1 className="title-text">
                            Hello world! <br/>
                            My name is Bradley Mulick
                        </h1>
                    </Typing> 
                    
                    
                    <a href="#work-display"><button class="button-three">Past Work</button></a>
                    <a href="/about"><button class="button-three">My Skills</button></a>
                    <Typing>
                        <div>
                            <Typing.Delay ms={3330} />
                            <h1 className="title-text">I'm a Web Developer</h1>
                        </div>
                    </Typing>
                    
                    
                    
                </div>
            </div>
            
            
            <div className="work-container" id="work-display">
                <a href="http://www.jensenhowardart.com" target="_blank" rel="noopener noreferrer">
                <div className="project-box">
                    <h2>Jensen Howard Art</h2>
                    <h5>Javascript(React)MERN</h5>
                    <img src = "https://lh4.googleusercontent.com/3pYnMGLTbBgdsWZ1OQK69LL2ydBG8j9URgKOmH5_GnnPP9M1nF6Amsa7Iyw" alt="not here" width="1200" height="630" />
                    
                </div>
                </a>
                <a href="http://www.nowosa.com" target="_blank" rel="noopener noreferrer">
                <div className="project-box">
                    <h2>NowOsa</h2>
                    <h5>Wordpress</h5>
                    <img src = "https://lh4.googleusercontent.com/1ZFzugziayv23KRbNHIGmkK-DCnlm8HM_DjjV_amwdqpjhLiOnh7G-oFs2E" alt="not here" width="1200" height="630" />
                    
                </div>
                </a>
                <a href="http://www.copperminersrest.com" target="_blank" rel="noopener noreferrer">
                <div className="project-box">
                    <h2>CopperMinersRest</h2>
                    <h5>Vanilla Javascript</h5>
                    <img src = "https://lh5.googleusercontent.com/q6DMXHSTNY5U6E-sMskPkKUY2S0PxafVSovkn0YfkTQPQL8zbZ3PCDhYPYc" alt="not here" width="1200" height="630" />
                </div>
                </a>
                <a href="https://vtrade.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <div className="project-box">
                    <h2>VTrade</h2>
                    
                    <h5>Javascript(React)</h5>
                    <img src = "https://lh4.googleusercontent.com/HrN6QVt9TNn99F1ANMVXm_n-C9sfG-E17KXJTDpZOJ9vDs39biFdjAYRPcA" alt="not here" width="1200" height="630" />
                </div>
                </a>
            </div>
            
        </div>
    )
}


export default Home