import React, { useState, useRef } from "react";
import "./Player2.css";

const Player2 = ({ name2 }) => {
    var [name2, addPlayer2Name] = useState(['']);
    var player2Name = useRef();
    
    function focus(){
        player2Name.current.focus()
        player2Name.current.value = ""
    }

    return (
    <div className="player2">
      <img src="Images/p2.png" className="player2-image" alt="Player 2" />
      <input ref={player2Name} value={name2} type="text" 
      className="player2Input" 
      onChange={ e => addPlayer2Name(e.target.value)}/>
      <button className="player2Submit" onClick={focus}>
        Add Name
      </button>
      <div className="player2Name">{name2}</div>
    </div>
  );
};

export default Player2;

