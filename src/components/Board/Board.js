import React, { useState } from 'react'
import MemoryCard from '../Memory-Card/Memory-card'
import CardsInformations from './cards-informations'
import './board.css'

function Board(props) {

    const [cardArray, setCardArray] = useState(CardsInformations)

    Array.prototype.shuffleCards = function() {
        let indice = this.length
        while(indice) {
            const indiceAleatorio = Math.floor(Math.random() * indice--);
            [this[indice], this[indiceAleatorio]] = [this[indiceAleatorio], this[indice]];
        }
        return this
    }

    const handleClick = (e) => {
        setCardArray(oldCardArray => [...oldCardArray.shuffleCards()])
        props.handleBestScore()
        if(e.clicked === false){
            e.clicked = true
            props.setScore(prevScore => prevScore + 1)
            console.log(props.score)
        }
        else{
            for(let i = 0; i < cardArray.length; i++){
                cardArray[i].clicked = false
            }
            props.setScore(0)
        }
    }

    const cardsToDisplay =  cardArray.map( card => <MemoryCard setClicked = {() => handleClick(card)}  key={CardsInformations.id} cardInfo = {card} /> )

    return (
        <div className='board'>
            <div className='board-content'>
                {cardsToDisplay}
            </div>
        </div>
    );
}

export default Board