import React from 'react'
import './memoryCard.css'



function MemoryCard(props) {
    
    return(
        <div onClick={props.setClicked} className='card-container'>
            <img src= {props.cardInfo.personagemImagem} alt='personagem' />
            <div className='personagem-info'>
                <p>Name: {props.cardInfo.personagemName}</p>
                <p>Anime: {props.cardInfo.personagemFrom}</p>
            </div>
        </div>
    );
}

export default MemoryCard