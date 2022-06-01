import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "../src/pages/HomePage"
import About from "../src/pages/About"
import Blog from "../src/pages/Blog"
import Contact from "../src/pages/Contact"
import Modal from "../src/pages/Modal"



const App = () => {
  return (

    <Router>
      <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />

      </Routes>
    </Router>

  )
}

export default App;
