import './App.css';
import './Bootstrap/bootstrap.min.css';
import Path from './Routes/Path';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state)=> state.counter.value);
  console.log(count);
  return (
    <>
      <Path />
    </>
  );
}

export default App;
