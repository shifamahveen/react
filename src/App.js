import './App.css';
import useCustom from './components/Custom';

// React Router ->react-router-dom
const App = () => {
  const [name, setName] = useCustom('username', '');

  return (
    <>
      <input type='text' value={name} 
      onChange={(e) => setName(e.target.value)} />
      <h1>{name}</h1>
    </>
  )
}
export default App;