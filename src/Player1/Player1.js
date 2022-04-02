import React, { useState, useRef } from "react";
import "./Player1.css";

const Player1 = ({ name1 }) => {
    var [name1, addPlayer1Name] = useState(['']);
    var player1Name = useRef();
  
    
    function focus(){
        player1Name.current.focus()
        player1Name.current.value = ""
    }

    return (
    <div className="player1">
      <img src="Images/p1.png" className="player1-image" alt="Player 1" />
      <input ref={player1Name} value={name1} type="text" 
      className="player1Input" 
      onChange={ e => addPlayer1Name(e.target.value)}/>
      <button className="player1Submit" onClick={focus}>
        Add Name
      </button>
      <div className="player1Name">{name1}</div>
    </div>
  );
};

export default Player1;
