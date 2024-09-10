import { useState, useMemo } from 'react';
import './App.css';

const App = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function calcNum(num) {
    console.log("Calculating...");
    return Math.pow(num, 2);
  }

  // const result = calcNum(number);
  const result = useMemo(() => {
    calcNum(number)
  }, [number]);

  return (
    <>
      <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
      <h1>{result}</h1>
      <button onClick={() => setCount(prev => prev+1)}>Increment</button>
      <h1>{count}</h1>
    </>
  )
}

export default App;