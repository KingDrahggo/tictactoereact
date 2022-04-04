import "./GameBoard.css";
import React, {useState} from "react";


const GameBoard = () => {
// Start game
//  const gameCellElements = document.querySelectorAll('[data-gameCell]');
//  console.log(gameCellElements); 

//  gameCellElements.forEach(gameCell=>{
//      gameCell.addEventListener('click', handleClick, {once: true})
//  })

//  function handleClick(e){
//      console.log('clicked')
//  }

    const xClass = "x";
    const oClass = "o";
    let oTurn ;
    console.log(oTurn)

    const [play, addClass] = useState(oTurn);

    const add = (e) => {
      const cell = e.target
      const currentClass = oTurn ? oClass : xClass;
      placeMark(cell,currentClass)
      e.preventDefault()
      switchTurns()
    }

    function placeMark(cell,currentClass){
        addClass(currentClass)
    }
   
    function switchTurns(){
        oTurn =!oTurn
    }
// Play game

// Add Point to Player 1 or 2

// Restart Game

    return (
    
    <>
    <div className="gameBoard">
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
      <div onClick={add} className={`gameCell ${play}`} data-gamecell></div>
    </div>
    <div className="winner">
        <div className="winner-text">You Win!</div>
        <button className="restart-game-button">Restart Game</button>
    </div>
    </>
  );
};
export default GameBoard;
