import { useDispatch } from 'react-redux';
import { newBoard } from './redux/boardSlice';

import './App.css';

import Board from './components/Board';
import GuessDisplay from './components/GuessDisplay';
import { Stage } from '@inlet/react-pixi';

function App() {

  const dispatch = useDispatch();

  dispatch( newBoard() );

  return <div className="app">
    <Stage></Stage>
    <Board />
    <GuessDisplay />
  </div>;

}

export default App;
