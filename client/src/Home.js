import React from "react";
import './home.css'
import './buttons.css'
import Typing from 'react-typing-animation';



const Home = () => {
    
    return (
        <div className="home-container">
                
                    
            <div className="front-container">
                <div className='socials-box'>
                    <a href="https://github.com/BradleyMulick" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="github" /> </a> <br/>
                    <a href="https://www.linkedin.com/in/bradley-mulick/" target="_blank" rel="noopener noreferrer"> <img src="https://img.icons8.com/material-sharp/48/000000/linkedin.png" alt="linked in" /> </a>
                </div>
                <div class="typewriter">
                    
                    <Typing>
                        <h1 className="title-text">
                            HELLO WORLD!<br/>
                            I'm Bradley Mulick
                        </h1>
                    </Typing> 
                    
                    
                    <a href="#work-display"><button class="button-three">Projects</button></a>
                    <a href="/about"><button class="button-three">My Skills</button></a>
                    <Typing>
                        <div>
                            <Typing.Delay ms={2530} />
                            <h1 className="title-text">Web Developer</h1>
                        </div>
                    </Typing>
                    
                    
                    
                </div>
                
            </div>
            <a href="#work-display"><img className="down-arrow" src="https://img.icons8.com/officel/50/000000/expand-arrow.png" alt="arrow" /></a>
            <hr className="front-divider"/>
            <h2 className='projects-box-title'>Projects</h2>   
            <div className="work-container" id="work-display">
                <div className="project-box">
                <a href="http://www.jensenhowardart.com" target="_blank" rel="noopener noreferrer">
                    <h2>Jensen Howard Art</h2>
                    <h5>Javascript(React)MERN</h5>
                    <hr/>
                    <img src = "https://lh4.googleusercontent.com/3pYnMGLTbBgdsWZ1OQK69LL2ydBG8j9URgKOmH5_GnnPP9M1nF6Amsa7Iyw" alt="not here" width="1200" height="630" />
                </a>
                </div>
                <div className="project-box">
                <a href="http://www.nowosa.com" target="_blank" rel="noopener noreferrer">
                    <h2>NowOsa</h2>
                    <h5>Wordpress</h5>
                    <hr/>
                    <img src = "https://lh4.googleusercontent.com/1ZFzugziayv23KRbNHIGmkK-DCnlm8HM_DjjV_amwdqpjhLiOnh7G-oFs2E" alt="not here" width="1200" height="630" />
                </a>
                </div>
                <div className="project-box">
                <a href="http://www.copperminersrest.com" target="_blank" rel="noopener noreferrer">
                    <h2>Copper Miners Rest</h2>
                    <h5>Vanilla Javascript</h5>
                    <hr/>
                    <img src = "https://lh5.googleusercontent.com/q6DMXHSTNY5U6E-sMskPkKUY2S0PxafVSovkn0YfkTQPQL8zbZ3PCDhYPYc" alt="not here" width="1200" height="630" />
                </a>
                </div>
                <div className="project-box">
                <a href="https://vtrade.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <h2>VTrade</h2>
                    
                    <h5>Javascript(React)</h5>
                    <hr/>
                    <img src = "https://lh4.googleusercontent.com/HrN6QVt9TNn99F1ANMVXm_n-C9sfG-E17KXJTDpZOJ9vDs39biFdjAYRPcA" alt="not here" width="1200" height="630" />
                </a>
                </div>
            </div>
            
        </div>
    )
}


export default Home