import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Callback from './components/Callback';

const App = () => {
  const [count, setCount] = useState(0);
  
  const func = useCallback(() => { }, []);

  return (
    <>
      <Callback func={func} />
      <button onClick={() => setCount(prev => prev+1)}>Increment</button>
      <h1>{count}</h1>
    </>
  )
}

export default App;