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
  let oTurn;
  let i = 9;
  
  function switchTurns() {
    oTurn = !oTurn
  }
  

  const [play1, addClass1] = useState(oTurn);
  const [play2, addClass2] = useState(oTurn);
  const [play3, addClass3] = useState(oTurn);
  const [play4, addClass4] = useState(oTurn);
  const [play5, addClass5] = useState(oTurn);
  const [play6, addClass6] = useState(oTurn);
  const [play7, addClass7] = useState(oTurn);
  const [play8, addClass8] = useState(oTurn);
  const [play9, addClass9] = useState(oTurn);

  const boardCell1 = document.querySelectorAll(".gb1");
  const boardCell2 = document.querySelectorAll(".gb2");
  const boardCell3 = document.querySelectorAll(".gb3");
  const boardCell4 = document.querySelectorAll(".gb4");
  const boardCell5 = document.querySelectorAll(".gb5");
  const boardCell6 = document.querySelectorAll(".gb6");
  const boardCell7 = document.querySelectorAll(".gb7");
  const boardCell8 = document.querySelectorAll(".gb8");
  const boardCell9 = document.querySelectorAll(".gb9");

  console.log(boardCell1);
  const dataGamecell1 = useRef(boardCell1[0]);
  const dataGamecell2 = useRef(boardCell2[0]);
  const dataGamecell3 = useRef(boardCell3[0]);
  const dataGamecell4 = useRef(boardCell4[0]);
  const dataGamecell5 = useRef(boardCell5[0]);
  const dataGamecell6 = useRef(boardCell6[0]);
  const dataGamecell7 = useRef(boardCell7[0]);
  const dataGamecell8 = useRef(boardCell8[0]);
  const dataGamecell9 = useRef(boardCell9[0]);
  console.log(dataGamecell2);

  

  const add1 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark1(currentClass);
    switchTurns();
  };
  const add2 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark2(currentClass);
    switchTurns();
  };
  const add3 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark3(currentClass);
    switchTurns();
  };
  const add4 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark4(currentClass);
    switchTurns();
  };
  const add5 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark5(currentClass);
    switchTurns();
  };
  const add6 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark6(currentClass);
    switchTurns();
  };
  const add7 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark7(currentClass);
    switchTurns();
  };
  const add8 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark8(currentClass);
    switchTurns();
  };
  const add9 = (e) => {
    e.preventDefault();
    console.log(e);
    const cell = e.target.className;
    let currentClass = oTurn ? oClass : xClass;
    placeMark9(currentClass);
    switchTurns();
  };

  function placeMark1(currentClass) {
    return addClass1(currentClass);
  }
  function placeMark2(currentClass) {
    return addClass2(currentClass);
  }
  function placeMark3(currentClass) {
    return addClass3(currentClass);
  }
  function placeMark4(currentClass) {
    return addClass4(currentClass);
  }
  function placeMark5(currentClass) {
    return addClass5(currentClass);
  }
  function placeMark6(currentClass) {
    return addClass6(currentClass);
  }
  function placeMark7(currentClass) {
    return addClass7(currentClass);
  }
  function placeMark8(currentClass) {
    return addClass8(currentClass);
  }
  function placeMark9(currentClass) {
    return addClass9(currentClass);
  }


  // Play game

  // Add Point to Player 1 or 2

  // Restart Game

  return (
    <>
      <div className="gameBoard">
        <div className="gb1">
          <div
            ref={dataGamecell1}
            onClick={add1}
            className={`gameCell ${play1}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb2">
          <div
            ref={dataGamecell2}
            onClick={add2}
            className={`gameCell ${play2}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb3">
          <div
            ref={dataGamecell3}
            onClick={add3}
            className={`gameCell ${play3}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb4">
          <div
            ref={dataGamecell4}
            onClick={add4}
            className={`gameCell ${play4}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb5">
          <div
            ref={dataGamecell5}
            onClick={add5}
            className={`gameCell ${play5}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb6">
          <div
            ref={dataGamecell6}
            onClick={add6}
            className={`gameCell ${play6}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb7">
          <div
            ref={dataGamecell7}
            onClick={add7}
            className={`gameCell ${play7}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb8">
          <div
            ref={dataGamecell8}
            onClick={add8}
            className={`gameCell ${play8}`}
            data-gamecell
          ></div>
        </div>
        <div className="gb9">
          <div
            ref={dataGamecell9}
            onClick={add9}
            className={`gameCell ${play9}`}
            data-gamecell
          ></div>
        </div>
      </div>
      <div className="winner">
        <div className="winner-text">You Win!</div>
        <button className="restart-game-button">Restart Game</button>
      </div>
    </>
  );
};
export default GameBoard;
