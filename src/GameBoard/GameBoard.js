import "./GameBoard.css";
import React, { useState, useEffect } from "react";

const GameBoard = () => {
  // Varables for X & O
  const xClass = "x";
  const oClass = "o";

  // Usestate for clicking between true and false
  const [isX, setIsX] = useState(true);

  // UseState for adding click value to div
  const [play0, addClass0] = useState("");
  const [play1, addClass1] = useState("");
  const [play2, addClass2] = useState("");
  const [play3, addClass3] = useState("");
  const [play4, addClass4] = useState("");
  const [play5, addClass5] = useState("");
  const [play6, addClass6] = useState("");
  const [play7, addClass7] = useState("");
  const [play8, addClass8] = useState("");

  // Click to toggle between X and O
  const ToggleXO0 = (e) => {
    e.preventDefault();
    addClass0(isX ? xClass : oClass);
    console.log(play0);
    setIsX(!isX);
  };
  const ToggleXO1 = (e) => {
    e.preventDefault();
    addClass1(isX ? xClass : oClass);
    console.log(play1);
    setIsX(!isX);
  };
  const ToggleXO2 = (e) => {
    e.preventDefault();
    addClass2(isX ? xClass : oClass);
    console.log(play2);
    setIsX(!isX);
  };
  const ToggleXO3 = (e) => {
    e.preventDefault();
    addClass3(isX ? xClass : oClass);
    console.log(play3);
    setIsX(!isX);
  };
  const ToggleXO4 = (e) => {
    e.preventDefault();
    addClass4(isX ? xClass : oClass);
    console.log(play4);
    setIsX(!isX);
  };
  const ToggleXO5 = (e) => {
    e.preventDefault();
    addClass5(isX ? xClass : oClass);
    console.log(play5);
    setIsX(!isX);
  };
  const ToggleXO6 = (e) => {
    e.preventDefault();
    addClass6(isX ? xClass : oClass);
    console.log(play6);
    setIsX(!isX);
  };
  const ToggleXO7 = (e) => {
    e.preventDefault();
    addClass7(isX ? xClass : oClass);
    console.log(play7);
    setIsX(!isX);
  };
  const ToggleXO8 = (e) => {
    e.preventDefault();
    addClass8(isX ? xClass : oClass);
    console.log(play8);
    setIsX(!isX);
  };

  // Determine Winner
  
  function winningNumbers(){
    const winnerX = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
      const winnerO = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
      ]
  }

  // Add Point to Player 1 or 2

  // Restart Game

  return (
    <>
      <div className="gameBoard">
        <div onClick={ToggleXO0} className={`gameCell ${play0}`}>1</div>

        <div onClick={ToggleXO1} className={`gameCell ${play1}`}></div>

        <div onClick={ToggleXO2} className={`gameCell ${play2}`}></div>

        <div onClick={ToggleXO3} className={`gameCell ${play3}`}></div>

        <div onClick={ToggleXO4} className={`gameCell ${play4}`}></div>

        <div onClick={ToggleXO5} className={`gameCell ${play5}`}></div>

        <div onClick={ToggleXO6} className={`gameCell ${play6}`}></div>

        <div onClick={ToggleXO7} className={`gameCell ${play7}`}></div>

        <div onClick={ToggleXO8} className={`gameCell ${play8}`}></div>
      </div>
      <div className="winner">
        <div className="winner-text">You Win!</div>
        <button className="restart-game-button">Restart Game</button>
      </div>
    </>
  );
};
export default GameBoard;
