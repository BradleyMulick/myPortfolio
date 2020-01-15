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
                <img src='/images/nowosa-website.png' />
                </div>
                <div className="project-box">
                    <h2>Project 2</h2>
                </div>
                <div className="project-box">
                    <h2>Project 3</h2>
                </div>
                <div className="project-box">
                    <h2>Project 4</h2>
                </div>
            </div>
        </div>
    )
}


export default Home