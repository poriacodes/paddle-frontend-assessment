import React, {useState} from 'react'
import {MenuItems} from "../Components/Menuitems"
import "../Styles/Dropdown.css"
import { Link } from 'react-router-dom'

const Dropdown=()=>{
    const [click, setClick] = useState (false)

    const handleClick =()=> setClick(click)

  return (
    <>
      <div onClick={handleClick}  className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
          {MenuItems.map((item, index) =>{
              return(
                  <div className='li' key={index}>
                      <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>
                          {item.title}
                      </Link>
                  </div>
              )
          })}
         
      </div>  
    </>
  )
}

export default Dropdown