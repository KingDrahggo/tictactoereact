import "./GameBoard.css";
import React, { useState, useEffect } from "react";

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
  let oTurn = "";
  

  const [play1, addClass1] = useState(oTurn);
  const [play2, addClass2] = useState(oTurn);
  const [play3, addClass3] = useState(oTurn);
  const [play4, addClass4] = useState(oTurn);
  const [play5, addClass5] = useState(oTurn);
  const [play6, addClass6] = useState(oTurn);
  const [play7, addClass7] = useState(oTurn);
  const [play8, addClass8] = useState(oTurn);
  const [play9, addClass9] = useState(oTurn);

  // const boardCell1 = document.querySelectorAll(".gb1");
  // const boardCell2 = document.querySelectorAll(".gb2");
  // const boardCell3 = document.querySelectorAll(".gb3");
  // const boardCell4 = document.querySelectorAll(".gb4");
  // const boardCell5 = document.querySelectorAll(".gb5");
  // const boardCell6 = document.querySelectorAll(".gb6");
  // const boardCell7 = document.querySelectorAll(".gb7");
  // const boardCell8 = document.querySelectorAll(".gb8");
  // const boardCell9 = document.querySelectorAll(".gb9");

  // console.log(boardCell1);
  // const dataGamecell1 = useRef(boardCell1[0]);
  // const dataGamecell2 = useRef(boardCell2[0]);
  // const dataGamecell3 = useRef(boardCell3[0]);
  // const dataGamecell4 = useRef(boardCell4[0]);
  // const dataGamecell5 = useRef(boardCell5[0]);
  // const dataGamecell6 = useRef(boardCell6[0]);
  // const dataGamecell7 = useRef(boardCell7[0]);
  // const dataGamecell8 = useRef(boardCell8[0]);
  // const dataGamecell9 = useRef(boardCell9[0]);
  // console.log(dataGamecell1);
  // console.log(dataGamecell2);
  // console.log(dataGamecell3);
  function switchTurns() {
   let newTurn = oTurn? xClass : oClass;
   console.log(newTurn)
  }
 


  // const add1 = (e) => {
  //   console.log(e);
  //   console.log(oTurn)
  //   let cell = e.target.className + oTurn;
  //   console.log(cell)
  //   switchTurns();
  //   addClass1(play1 === oTurn ? oClass : xClass);

  //   console.log(oTurn)
  // };

  // const add2 = (e) => {
  //   console.log(e);
  //   console.log(oTurn)
  //   let cell = e.target.className + oTurn;
  //   console.log(cell)
  //   console.log(oTurn)
  //   addClass2(play2 === oTurn ? oClass : xClass);

  //   console.log(oTurn)
  // };

  // const add3 = (e) => {
  //   console.log(e);
  //   let cell = e.target.className;
  //   console.log(oTurn)
  //   addClass3(play3 === oTurn ? oClass : xClass);
  //   console.log(oTurn)
  //   // switchTurns();
  // };
  // const add4 = (e) => {
  //   console.log(e);
  //   let cell = e.target.className;
  //   let currentClass = oTurn ? oClass : xClass;
  //   addClass4(cell + currentClass);
  //   switchTurns();
  // };
  // const add5 = (e) => {
  //   console.log(e);
  //   let cell = e.target.className;
  //   let currentClass = oTurn ? oClass : xClass;
  //   addClass5(cell + currentClass);
  //   switchTurns();
  // };
  // const add6 = (e) => {
  //   console.log(e);
  //   let cell = e.target.className;
  //   let currentClass = oTurn ? oClass : xClass;
  //   addClass6(cell + currentClass);
  //   switchTurns();
  // };
  // const add7 = (e) => {
  //   console.log(e);
  //   let cell = e.target.className;
  //   let currentClass = oTurn ? oClass : xClass;
  //   addClass7(cell + currentClass);
  //   switchTurns();
  // };
  // const add8 = (e) => {
  //   console.log(e);
  //   let cell = e.target.className;
  //   let currentClass = oTurn ? oClass : xClass;
  //   addClass8(cell + currentClass);
  //   switchTurns();
  // };
  // const add9 = (e) => {
  //   console.log(e);
  //   let cell = e.target.className;
  //   console.log(cell)
  //   let currentClass = oTurn ? oClass : xClass;
  //   addClass9(cell + currentClass);
  //   switchTurns();
  // };

  // function placeMark1(currentClass) {
  //   return addClass1(currentClass);
  // }
  // function placeMark2(currentClass) {
  //   return addClass2(currentClass);
  // }
  // function placeMark3(currentClass) {
  //   return addClass3(currentClass);
  // }
  // function placeMark4(currentClass) {
  //   return addClass4(currentClass);
  // }
  // function placeMark5(currentClass) {
  //   return addClass5(currentClass);
  // }
  // function placeMark6(currentClass) {
  //   return addClass6(currentClass);
  // }
  // function placeMark7(currentClass) {
  //   return addClass7(currentClass);
  // }
  // function placeMark8(currentClass) {
  //   return addClass8(currentClass);
  // }
  // function placeMark9(currentClass) {
  //   return addClass9(currentClass);
  // }

  // Play game

  // Add Point to Player 1 or 2

  // Restart Game

  return (
    <>
      <div className="gameBoard">
        <div
          onClick={() => {
          
            addClass1(oTurn ? oClass : xClass);
            switchTurns();
          }}
          className={`gameCell ${play1}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass2(oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play2}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass3(play3 === oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play3}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass4(play4 === oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play4}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass5(play5 === oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play5}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass6(play6 === oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play6}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass7(play7 === oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play7}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass8(play8 === oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play8}`}
          data-gamecell
        ></div>

        <div
          onClick={() => {
            switchTurns();
            addClass9(play9 === oTurn ? oClass : xClass);
          }}
          className={`gameCell ${play9}`}
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
