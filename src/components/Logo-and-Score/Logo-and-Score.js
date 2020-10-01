import React from 'react'
import './logoAndScore.css'

function LogoAndScore(props) {
    return(
    <div>
        <header>
            <h1>Memory Card</h1>
            <div className='score'>
                <p>Score: {props.score}</p>
                <p>Best Score: {props.bestScore}</p>
            </div> 
        </header>
    </div>
    );
}

export default LogoAndScore