import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "../src/pages/HomePage"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"
import Tools from "../src/pages/Tools"
import Learning from "../src/pages/Learning"
import Terms from "../src/pages/termsOfService"
import Privacy from "./pages/Privacy";



const App = () => {
  return (

    <Router>
      <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      {/* <Route path='/tools' element={<Tools/>} /> */}
      <Route path='/learning' element={<Learning/>} />
      <Route path='/termsOfService' element={<Terms/>} />
      <Route path='/privacy' element={<Privacy/>} />

      </Routes>
    </Router>

  )
}

export default App;
