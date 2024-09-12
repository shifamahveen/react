import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';

const App = () => {
  const NotFound = () => <h2>Not Found</h2>

  return (
    <>
    {/* bannerbear */}
      <Router>
        <nav className='mb-5'>
            <Link to="/" className='fs-4 p-4'>Home</Link> |
            <Link to="/about" className='fs-4 p-4'>About</Link> |
            <Link to="/contact" className='fs-4 p-4'>Contact</Link> |
            <Link to="/user/1" className='fs-4 p-4'>User</Link> 
        </nav>
      
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </>
    
  )
}
export default App;