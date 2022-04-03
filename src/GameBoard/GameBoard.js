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
    let oTurn = true;
    console.log(oTurn)

    if(oTurn === true){
        oTurn = oClass
        // oTurn = false;
        console.log(oTurn)
    } if (oTurn === false) {
        oTurn = xClass
        console.log(oTurn)
    }
    const [play, addClass] = useState(xClass);

    const add = (e) => {
        // e.preventDefault();
        const cell = e.target
    
        console.log(cell)
        
    }
   
    // function placeMark(cell, currentClass){
    //     cell.classList.add(currentClass)
    // }

    // function changeTurns(){
    //     if(oTurn === true){
    //        return oTurn === false
    //     } else {
    //         return oTurn === true
    //     }
    // }
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
