import React from "react";
import "./GameBoard.css";

const GameBoard = ({ board, onTileClick, winningLine }) => {
  
  const renderTile = (index) => {
    const value = board[index];
    const isWinningTile = winningLine && winningLine.includes(index);
    
    return (
      <div 
        key={index} 
        onClick={() => onTileClick(index)} 
        className={`tile ${value} ${isWinningTile ? 'winning' : ''}`}
      >
        {value}
      </div>
    );
  };

  return (
    <div className="game-board">
      {board.map((_, index) => renderTile(index))}
    </div>
  );
};

export default GameBoard;
