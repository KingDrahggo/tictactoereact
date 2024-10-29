import React, { useState } from "react";
import "./GameBoard.css";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(true); // Toggle between X and O
  const [winner, setWinner] = useState(null); // Winner state

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return 'x' or 'o'
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = isX ? 'x' : 'o';
      setBoard(newBoard);
      setIsX(!isX);

      // Check if there's a winner
      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
      }
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setWinner(null);
    setIsX(true);
  };

  return (
    <div>
      <div className="gameBoard">
        {board.map((value, index) => (
          <div key={index} onClick={() => handleClick(index)} className={`gameCell ${value}`}></div>
        ))}
      </div>

      {winner && (
        <div className="winner show">
          <div className="winner-text">{`Player ${winner.toUpperCase()} Wins!`}</div>
          <button className="restart-game-button" onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;

