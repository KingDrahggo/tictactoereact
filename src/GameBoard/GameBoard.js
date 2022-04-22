import "./GameBoard.css";
import React, { useState, useRef } from "react";

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
  let changeTurns = xClass || oClass;
  console.log(changeTurns)


  const [play, addClass] = useState(changeTurns);
  // const [play2, addClass2] = useState(changeTurns);
  // const [play3, addClass3] = useState(changeTurns);
  // const [play4, addClass4] = useState(changeTurns);
  // const [play5, addClass5] = useState(changeTurns);
  // const [play6, addClass6] = useState(changeTurns);
  // const [play7, addClass7] = useState(changeTurns);
  // const [play8, addClass8] = useState(changeTurns);
  // const [play9, addClass9] = useState(changeTurns);
  // console.log(changeTurns + play1)
  // console.log(changeTurns + play2)

  let gb1 = useRef()
  let gb2 = useRef()
  console.log(gb1)
  console.log(gb2)
  
  function switchTurns(e) {
    e.nativeEvent.stopPropagation();
    let onClick = e.type
    let cell = e.target.className
    if(onClick === "click"){
      e.preventDefault();
      console.log("clicked")
      addClass(cell + play === changeTurns ? oClass : xClass)
      onClick = true
      console.log(onClick)
    } 
    if(onClick === true){
      e.preventDefault();
      console.log("clicked opposite")
      addClass(cell + play === changeTurns ? xClass : oClass)
      onClick = false
      console.log(onClick)
    }
    console.log(onClick)
    console.log(e)
    console.log(changeTurns)
  }

//  function switchToX (changeTurns){
//   if (changeTurns) {
//     changeTurns = " "
//     console.log(changeTurns);
//     changeTurns = changeTurns + xClass
//     console.log (changeTurns)
//     return changeTurns
//    }
//  }

//  function switchToO(changeTurns){
//   if (changeTurns) {
//     changeTurns = " "
//     console.log(changeTurns);
//     changeTurns = changeTurns + oClass
//     console.log (changeTurns)
//     return changeTurns
//    }
//  }

 


  // Play game

  // Add Point to Player 1 or 2

  // Restart Game

  return (
    <>
      <div className="gameBoard">
        <div
         ref={gb1}
          onClick={switchTurns}
          className={`gameCell ${play}`}
        ></div>

        <div
          ref={gb2}
          onClick={switchTurns}
          className={`gameCell ${play}`}
        ></div>

        <div
         onClick={switchTurns}
         className={`gameCell ${play}`}
         data-gamecell
        ></div>

        <div
         onClick={switchTurns}
         className={`gameCell ${play}`}
         data-gamecell
        ></div>

        <div
          onClick={switchTurns}
          className={`gameCell ${play}`}
          data-gamecell
        ></div>

        <div
          onClick={switchTurns}
          className={`gameCell ${play}`}
          data-gamecell
        ></div>

        <div
          onClick={switchTurns}
          className={`gameCell ${play}`}
          data-gamecell
        ></div>

        <div
          onClick={switchTurns}
          className={`gameCell ${play}`}
          data-gamecell
        ></div>

        <div
          onClick={switchTurns}
          className={`gameCell ${play}`}
          data-gamecell
        ></div>
      </div>
      <div className="winner">
        <div className="winner-text">You Win!</div>
        <button className="restart-game-button">Restart Game</button>
      </div>
    </>
  );
};
export default GameBoard;
