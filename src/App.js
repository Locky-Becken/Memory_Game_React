import React, { useEffect, useState } from 'react';
import './App.css';
import LogoAndScore from './components/Logo-and-Score/Logo-and-Score'
import Board from './components/Board/Board'
/* import CardsInformations from './components/Board/cards-informations' */

function App() {


  const [score, setScore] = useState(0)

  const [bestScore, setBestScore] = useState(0)

  function handleBestScore() {
    if(score > bestScore) {setBestScore(score)}
  }

  useEffect(() => {
    handleBestScore()
  },[score])

  return (
    <div className="App">
      <LogoAndScore bestScore={bestScore} score={score} />
      <Board handleBestScore={handleBestScore} setScore={setScore}/>
    </div>
  );
}

export default App;
