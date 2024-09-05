import './App.css';
import Navbar from './components/Navbar';
import Hook from './components/useState';
import Count from './components/Count';
import Form from './components/Form';
import Multiple from './components/Multiple';
import Time from './components/Time';

function App() {
  return (
    <> 
      <Navbar username="shifa" />
      <Hook />
      <Count />
      <Form />
      <Time />
      <Multiple />
    </>  
  );
}

export default App;