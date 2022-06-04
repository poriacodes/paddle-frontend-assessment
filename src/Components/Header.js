import React , { useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Header.css"
import Logo from "../Assets/metricks-white.png"
import { ReactComponent as CloseMenu } from "../Assets/Cancel.svg";
import { ReactComponent as MenuIcon } from "../Assets/Menu.svg";

const Header =()=> {

      //mobile responsiveness

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (


<div className="header">

<a href className='logo'>
 <img src={Logo} alt='metricksLogo'/>
 <p>METRICKS</p>
</a>

<nav className='item'>

  <ul className={click ? "ul active" : "ul"}>

    <li 
       className="option"
          onClick={() => {
            closeMobileMenu();
    }}>

      <Link to="/about" > ABOUT US </Link>
    </li>

    <li
     className="option"
     onClick={() => {
       closeMobileMenu();
    }} >
      <Link to="/blog"> BLOG </Link>
    </li>

    <li
      className="option"
      onClick={() => {
        closeMobileMenu();
     }}>
   <Link to="/contact"> <button> CONTACT US </button> </Link> 
    </li>

  </ul>

</nav>


<div className="mobile-menu" onClick={handleClick}>
      {click ? (
        <CloseMenu className="menu-icon" />
      ) : (
        <MenuIcon className="menu-icon" />
      )}
    </div>

</div>


  )
}

export default Header