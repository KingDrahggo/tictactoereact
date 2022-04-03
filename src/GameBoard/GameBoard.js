import "./GameBoard.css";

const GameBoard = () => {
// Start game

// Play game

// Add Point to Player 1 or 2

// Restart Game


  
    return (
    
    <>
    <div className="gameBoard">
      <div className="gameCell"></div>
      <div className="gameCell"></div>
      <div className="gameCell"></div>
      <div className="gameCell"></div>
      <div className="gameCell"></div>
      <div className="gameCell"></div>
      <div className="gameCell"></div>
      <div className="gameCell"></div>
      <div className="gameCell"></div>
    </div>
    <div className="winner">
        <div className="winner-text">You Win!</div>
        <button className="restart-game-button">Restart Game</button>
    </div>
    </>
  );
};
export default GameBoard;
