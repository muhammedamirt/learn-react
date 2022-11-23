import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import About from './component/about'
import Contact from './component/contact'
import Home from './component/home'


function App() {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />}> </Route>
          <Route exact path='/contact' element={<Contact />}> </Route>
          <Route exact path='/About' element={<About />}> </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
