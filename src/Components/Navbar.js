import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"
import Logo from "../Assets/metricks-white.png"


const Navbar=()=> {

  return (

    <div className='metricks' id='metricks'>
      
      <div className='logo'>
       <img src={Logo} alt='metricksLogo'/>
       <p>METRICKS</p>
      </div>

      <nav className='item'>
        <ul className='ul'>

          <li>
            <Link to="/about" > ABOUT US </Link>
          </li>

          <li>
            <Link to="/blog"> BLOG </Link>
          </li>

          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>

        </ul>

      </nav>

    </div>
  )
}

export default Navbar