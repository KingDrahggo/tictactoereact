import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import GameBoard from './GameBoard/GameBoard';
import PlayerCard from './components/PlayerCard';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState({ x: 0, o: 0 });
  const [playerNames, setPlayerNames] = useState({ x: 'Player 1', o: 'Player 2' });
  const [winner, setWinner] = useState(null); // 'x', 'o', 'draw', or null
  const [winningLine, setWinningLine] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  };

  const handleTileClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'x' : 'o';
    setBoard(newBoard);

    const winResult = checkWinner(newBoard);
    if (winResult) {
      setWinner(winResult.winner);
      setWinningLine(winResult.line);
      setScores(prev => ({ ...prev, [winResult.winner]: prev[winResult.winner] + 1 }));
    } else if (!newBoard.includes(null)) {
      setWinner('draw');
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setWinningLine(null);
    setXIsNext(true); // Always X starts? Or winner starts? Let's stick to X starts for simplicity
  };

  const handleNameChange = (symbol, newName) => {
    setPlayerNames(prev => ({ ...prev, [symbol]: newName }));
  };

  return (
    <div className="app-container">
      <Header />
      
      <div className="game-area">
        <div className="player-section">
          <PlayerCard 
            name={playerNames.x} 
            score={scores.x} 
            symbol="X" 
            isActive={!winner && xIsNext} 
            onNameChange={(name) => handleNameChange('x', name)}
          />
        </div>

        <div className="board-section">
          <div className="status-display">
            {winner === 'draw' && <span className="status-text draw">IT'S A DRAW!</span>}
            {winner && winner !== 'draw' && <span className={`status-text win ${winner}`}>{playerNames[winner]} WINS!</span>}
            {!winner && <span className="status-text turn">{xIsNext ? `${playerNames.x}'s Turn` : `${playerNames.o}'s Turn`}</span>}
          </div>
          
          <GameBoard 
            board={board} 
            onTileClick={handleTileClick} 
            winningLine={winningLine}
          />
          
          <button className="reset-button" onClick={resetGame}>
            {winner ? 'PLAY AGAIN' : 'RESET BOARD'}
          </button>
        </div>

        <div className="player-section">
          <PlayerCard 
            name={playerNames.o} 
            score={scores.o} 
            symbol="O" 
            isActive={!winner && !xIsNext} 
            onNameChange={(name) => handleNameChange('o', name)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
