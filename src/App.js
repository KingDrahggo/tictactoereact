import Header from './Header/Header';
import Player1 from './Player1/Player1';
import Player2 from './Player2/Player2';
import GameBoard from './GameBoard/GameBoard';


function App() {
  
  return (
    <div className='app-container'>
    <Header />
    <Player1 />
    <Player2 />
    <GameBoard />
    </div>
  );
}

export default App;
