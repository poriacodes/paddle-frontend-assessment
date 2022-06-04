import React from 'react'
import "../Styles/Form.css"

const Form=()=>{

  return (
    <>
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
    </>
  )
}

export default Form