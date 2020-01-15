import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="front-container">
                <div class="typewriter">
                    <h1>Hi! I'm Bradley Mulick</h1>
                    <a href="#work-display"><button>My Work</button></a>
                </div>
            </div>
            
            <div className="work-container" id="work-display">
                <div className="project-box">
                    <h2>NowOsa</h2>
                    <h5>Wordpress/SEO</h5>
                    <img src = "https://lh4.googleusercontent.com/1ZFzugziayv23KRbNHIGmkK-DCnlm8HM_DjjV_amwdqpjhLiOnh7G-oFs2E" width="1200" height="630" />
                    
                </div>
                <div className="project-box">
                    <h2>CopperMinersRest</h2>
                    <img src = "https://lh5.googleusercontent.com/q6DMXHSTNY5U6E-sMskPkKUY2S0PxafVSovkn0YfkTQPQL8zbZ3PCDhYPYc" width="1200" height="630" />
                </div>
                <div className="project-box">
                    <h2>VTrade</h2>
                    <img src = "https://lh4.googleusercontent.com/HrN6QVt9TNn99F1ANMVXm_n-C9sfG-E17KXJTDpZOJ9vDs39biFdjAYRPcA" width="1200" height="630" />
                </div>
                <div className="project-box">
                    <h2>Jensen Howard Art</h2>
                    <img src = "https://lh4.googleusercontent.com/3pYnMGLTbBgdsWZ1OQK69LL2ydBG8j9URgKOmH5_GnnPP9M1nF6Amsa7Iyw" width="1200" height="630" />
                </div>
            </div>
        </div>
    )
}


export default Home