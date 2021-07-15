import { useDispatch } from 'react-redux';
import { newBoard } from './redux/boardSlice';
import './App.css';
import Board from './components/Board';

function App() {

  const dispatch = useDispatch();

  dispatch( newBoard() );

  return <div className="app">
    <Board />
  </div>;

}

export default App;
