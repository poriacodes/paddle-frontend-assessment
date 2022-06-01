import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"
import Logo from "../Assets/metricks-white.png"
import { ReactComponent as CloseMenu } from "../Assets/Cancel.svg";
import { ReactComponent as MenuIcon } from "../Assets/Menu.svg";
import Timer from '../Components/Timer';






const Navbar=()=> {

  //mobile responsiveness

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (

    <div className='metricks'>

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

    
    <div className='circle'></div>

    <div className='hero'>

      <h1>SOMETHING AWESOME IS <br/> COMING SOON</h1>

      <div className='circle2'></div>

      <p>Your all-in-one affiliate marketing tracking software <span>track, automate</span> and <br/> <span>optimize</span> your campaign</p>

      
      <div className='date-countdown'>
      <Timer />
      </div>

      <div className='mainName'>

      <form className='otherName'>
      
      <input type="text" id="fName" name="name" placeholder="First Name."/>
      
      <input type="text" id="lName" name="name"  placeholder="Last Name."/>

      </form>

      </div>


      <div className='mainBtn'>

        <div className='mainBtn1'><input type="text" id='mainBtn1' name="name" placeholder="Enter your email address..."/></div>
        <div className='mainBtn2'>JOIN OUR WAITING LIST</div>

      </div>

      <div className='circle3'></div>
      

      <div className='footer'>

        <div className='socialMedia'>

         <Link to=""> 
          <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_351_2)">
          <path d="M129.147 37.7787C129.147 26.3529 120.742 17.1615 110.358 17.1615C96.2912 16.5039 81.9455 16.25 67.2849 16.25H62.7146C48.0896 16.25 33.7185 16.5039 19.6521 17.1641C9.29274 17.1641 0.888446 26.4062 0.888446 37.832C0.25368 46.8686 -0.0154604 55.9076 -0.000225995 64.9467C-0.0256166 73.9857 0.262144 83.0333 0.863055 92.0893C0.863055 103.515 9.26735 112.783 19.6267 112.783C34.4041 113.468 49.5623 113.773 64.9744 113.747C80.4119 113.798 95.5278 113.477 110.322 112.783C120.707 112.783 129.111 103.515 129.111 92.0893C129.72 83.0248 130 73.9857 129.974 64.9213C130.032 55.8822 129.756 46.8347 129.147 37.7787ZM52.5584 89.8549V39.9623L89.3748 64.8959L52.5584 89.8549Z" fill="#777777"/>
          </g>
          <defs>
          <clipPath id="clip0_351_2">
          <rect width="130" height="130" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          </Link>

          <Link to="">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M102 6H18C11.4 6 6 11.4 6 18V102C6 108.606 11.4 114 18 114H60V72H48V57.15H60V44.85C60 31.866 67.272 22.746 82.596 22.746L93.414 22.758V38.388H86.232C80.268 38.388 78 42.864 78 47.016V57.156H93.408L90 72H78V114H102C108.6 114 114 108.606 114 102V18C114 11.4 108.6 6 102 6Z" fill="#777777"/>
          </svg>
          </Link>

          <Link to="">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 14.19C5 11.7527 5.96823 9.41516 7.69169 7.6917C9.41515 5.96824 11.7527 5.00001 14.19 5.00001H105.8C107.008 4.99804 108.204 5.23433 109.321 5.69535C110.437 6.15636 111.452 6.83306 112.306 7.68669C113.161 8.54033 113.839 9.55413 114.301 10.6701C114.763 11.786 115.001 12.9821 115 14.19V105.8C115.001 107.008 114.764 108.205 114.303 109.321C113.841 110.438 113.164 111.452 112.31 112.307C111.456 113.161 110.442 113.839 109.326 114.301C108.209 114.763 107.013 115.001 105.805 115H14.19C12.9827 115 11.7873 114.762 10.672 114.3C9.55668 113.838 8.54336 113.16 7.68992 112.307C6.83649 111.453 6.15966 110.439 5.69811 109.323C5.23657 108.208 4.99934 107.012 5 105.805V14.19ZM48.54 46.94H63.435V54.42C65.585 50.12 71.085 46.25 79.35 46.25C95.195 46.25 98.95 54.815 98.95 70.53V99.64H82.915V74.11C82.915 65.16 80.765 60.11 75.305 60.11C67.73 60.11 64.58 65.555 64.58 74.11V99.64H48.54V46.94ZM21.04 98.955H37.08V46.25H21.04V98.95V98.955ZM39.375 29.06C39.4052 30.4334 39.1609 31.7989 38.6562 33.0766C38.1515 34.3542 37.3968 35.5182 36.4362 36.5002C35.4756 37.4822 34.3285 38.2624 33.0623 38.795C31.7961 39.3277 30.4362 39.6021 29.0625 39.6021C27.6888 39.6021 26.3289 39.3277 25.0627 38.795C23.7965 38.2624 22.6494 37.4822 21.6888 36.5002C20.7282 35.5182 19.9735 34.3542 19.4688 33.0766C18.9641 31.7989 18.7198 30.4334 18.75 29.06C18.8094 26.3643 19.9219 23.799 21.8494 21.9134C23.7769 20.0279 26.3661 18.9721 29.0625 18.9721C31.7589 18.9721 34.3481 20.0279 36.2756 21.9134C38.2031 23.799 39.3156 26.3643 39.375 29.06V29.06Z" fill="#777777"/>
          </svg>
          </Link>

          <Link to="">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M89.923 0.131409H30.0771C13.5891 0.131409 0.174805 13.5006 0.174805 29.9332V90.0664C0.174805 106.498 13.5891 119.868 30.0771 119.868H89.923C106.411 119.868 119.825 106.498 119.825 90.0664V29.933C119.825 13.5006 106.411 0.131529 89.923 0.131529V0.131409ZM108.75 90.0661C108.75 100.412 100.305 108.83 89.9232 108.83H30.0772C19.6956 108.83 11.2498 100.412 11.2498 90.0661V51.2284H34.9074C33.1802 54.8815 32.2088 58.9568 32.2088 63.2545C32.2088 78.8645 44.9504 91.5622 60.6123 91.5622C76.2739 91.5622 89.0157 78.8645 89.0157 63.2545C89.0157 58.9568 88.0444 54.8814 86.3169 51.2284H108.75V90.0661H108.75ZM48.8214 63.2548C48.8214 56.776 54.1106 51.504 60.6124 51.504C67.1145 51.504 72.4034 56.7761 72.4034 63.2548C72.4034 69.7349 67.1145 75.0059 60.6124 75.0059C54.1107 75.0058 48.8214 69.7349 48.8214 63.2548V63.2548ZM108.75 40.1909H77.0496C72.4054 36.8947 66.7351 34.9475 60.6124 34.9475C54.4898 34.9475 48.8187 36.8947 44.1757 40.1909H11.2498V29.9332C11.2498 19.5864 19.6956 11.1691 30.0772 11.1691H89.9232C100.305 11.1691 108.75 19.5864 108.75 29.9332V40.1909H108.751H108.75ZM96.7497 17.8633H86.4837C84.6559 17.8633 83.1613 19.3535 83.1613 21.1746V31.4065C83.1613 33.2275 84.6558 34.7178 86.4837 34.7178H96.7497C98.5774 34.7178 100.072 33.2275 100.072 31.4065V21.1746C100.072 19.3535 98.5776 17.8633 96.7497 17.8633Z" fill="#777777"/>
          </svg>
          </Link>

          <Link to="">
          <svg width="105" height="120" viewBox="0 0 105 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M93.75 7.5H11.25C5.03906 7.5 0 12.5391 0 18.75V101.25C0 107.461 5.03906 112.5 11.25 112.5H93.75C99.9609 112.5 105 107.461 105 101.25V18.75C105 12.5391 99.9609 7.5 93.75 7.5ZM82.2891 44.7188C82.3359 45.375 82.3359 46.0547 82.3359 46.7109C82.3359 67.0312 66.8672 90.4453 38.6016 90.4453C29.8828 90.4453 21.7969 87.9141 15 83.5547C16.2422 83.6953 17.4375 83.7422 18.7031 83.7422C25.8984 83.7422 32.5078 81.3047 37.7812 77.1797C31.0312 77.0391 25.3594 72.6094 23.4141 66.5156C25.7813 66.8672 27.9141 66.8672 30.3516 66.2344C23.3203 64.8047 18.0469 58.6172 18.0469 51.1406V50.9531C20.0859 52.1016 22.4766 52.8047 24.9844 52.8984C22.876 51.496 21.1476 49.5934 19.9534 47.3605C18.7593 45.1276 18.1365 42.6338 18.1406 40.1016C18.1406 37.2422 18.8906 34.6172 20.2266 32.3438C27.7969 41.6719 39.1641 47.7656 51.9141 48.4219C49.7344 37.9922 57.5391 29.5312 66.9141 29.5312C71.3437 29.5312 75.3281 31.3828 78.1406 34.3828C81.6094 33.7266 84.9375 32.4375 87.8906 30.6797C86.7422 34.2422 84.3281 37.2422 81.1406 39.1406C84.2344 38.8125 87.2344 37.9453 90 36.75C87.9141 39.8203 85.2891 42.5391 82.2891 44.7188Z" fill="#777777"/>
          </svg>
          </Link>

        </div>

        <div className='terms'>
          <h4>Terms of service</h4>

          <h4>Privacy Policy</h4>
        </div>
        
        <div className='Copyright'>
        <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
        </div>

        <div className='Copyright2'>
        <p>Copyright 2021 @ Peddle Technologies. <br/> All Rights Reserved.</p>
        </div>
      
              
      </div>
  
    </div>


    </div>
  )
}

export default Navbar