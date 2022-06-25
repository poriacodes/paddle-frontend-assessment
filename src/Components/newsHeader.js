import React , { useState, useRef} from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Styles/newsHeader.css"
import Logo from "../Assets/metricks-purple.png"
import { ReactComponent as CloseMenu } from "../Assets/cancelPurple.svg";
import { ReactComponent as MenuIcon } from "../Assets/menuPurple.svg";
import Dropdown from "../Components/Dropdown"


const newsHeader =()=> {

      //mobile responsiveness

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false); 


  const [dropdown, setDropdown] = useState (false);
  const onMouseEnter = () => {
    if(window.innerWidth < 960 ){
      setDropdown(false);
    }else{
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960 ){
      setDropdown(false);
    }else{
      setDropdown(false);
    }
  }

  //dropdown

  return (


<div className="header">

<Link to="/" className='newslogo'>
 <img src={Logo} alt='metricksLogo'/>
 <p>METRICKS</p>
</Link>



<nav className='newsitem'>

  <ul className="ul">

    <li 
       className="option">

      <NavLink to="/about" > ABOUT US </NavLink>
    </li>

    <li
     className="option"
     onMouseEnter={onMouseEnter}
     onMouseLeave={onMouseLeave}
     onClick={() => {
       closeMobileMenu();
    }} >

      <NavLink to=""> LEARNING
       <span className='blog'><svg width="100" height="70" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.9216 69.9764C48.2555 69.9809 46.641 69.1676 45.3581 67.6775L2.57587 17.7034C1.11972 16.0069 0.204009 13.569 0.0301722 10.9261C-0.143664 8.28322 0.438616 5.65176 1.64892 3.61065C2.85922 1.56954 4.5984 0.285965 6.48386 0.0422933C8.36932 -0.201378 10.2466 0.614814 11.7027 2.31132L49.9216 47.0882L88.1404 3.9105C88.8698 3.08027 89.709 2.46028 90.6098 2.08615C91.5107 1.71203 92.4554 1.59115 93.3897 1.73047C94.3239 1.86979 95.2294 2.26656 96.0539 2.89797C96.8784 3.52938 97.6058 4.38299 98.1942 5.40973C98.8472 6.43741 99.3418 7.64305 99.6469 8.95111C99.952 10.2592 100.061 11.6415 99.9674 13.0114C99.8737 14.3813 99.5792 15.7093 99.1023 16.9123C98.6254 18.1152 97.9764 19.1672 97.196 20.0022L54.4137 68.2772C53.094 69.5317 51.5124 70.13 49.9216 69.9764V69.9764Z" fill="white"/>
</svg>

       </span>
      </NavLink>

      {/* {dropdown && <Dropdown/>} */}
    
    </li>

   <li className="option" id='newsoption'>
   <NavLink to="/contact"> <button> CONTACT US </button> </NavLink> 
    </li> 

  </ul>

</nav>


{/* mobile */}

<nav className='mobileItem'>

  <ul className={click ? "mobileUl mobileActive" : "mobileUl"}>

    <li 
       className="mobileOption"
          onClick={() => {
            closeMobileMenu();
    }}>

      <Link to="/about" > ABOUT US </Link>
    </li>

    {/* <li
     className="mobileOption"
     onClick={() => {
       closeMobileMenu();
    }} >
      <Link to="/news"> TOOLS </Link>
    
    </li> */}

    <li
     className="mobileOption"
     onClick={() => {
       closeMobileMenu();
    }} >
      <Link to="/learning"> LEARNING </Link>
    
    </li>

    <li
      className="mobileOption"

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

export default newsHeader