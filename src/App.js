import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "../src/pages/HomePage"
import About from "../src/pages/About"



const App = () => {
  return (

    <Router>
      <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />

      </Routes>
    </Router>

  )
}

export default App;
