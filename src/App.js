import Chessboard from './components/Chessboard/Chessboard.component';
import ModeSelector from './components/ModeSelector/ModeSelector';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>Knight Pathfinder</h1>
      </div>
      <Chessboard />
      <ModeSelector />
    </div>
  );
};

export default App;
