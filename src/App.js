import { useDispatch } from 'react-redux';
import { newBoard } from './redux/boardSlice';

import './App.css';

import Board from './components/Board';
import GuessDisplay from './components/GuessDisplay';

function App() {

  const dispatch = useDispatch();

  dispatch( newBoard() );

  return <div className="app">
    <Board />
    <GuessDisplay />
  </div>;

}

export default App;
