import React, {useState, Fragment} from 'react'
import Header from "../Components/whiteHeader"
import Footer from "../Components/mainFooter"
import "../Styles/Learning.css"
import { NavLink } from 'react-router-dom'

const Learning=()=>{

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  const [active, setActive] = useState("");
 
  const handleClick = (event) => {
    setActive(event.target.id);
    
  }
 
  return (
    <div className='learning'>

        <Header/>

        
      <div className='learningSquare'></div>


        <div className='Learning'>


        <div className='Learning1'>

        <div className='learningLine'>
            <div className='Line'></div>
            <p>Learning Center</p> 
        </div>

        <h1>Learning Center</h1>

        </div>


        <div className='learning2'>

        <div className='learningCircle'></div>

        {/* <div className='search'>
        <input placeholder='Searching...' id='search'/>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M106.594 100.137L76.1602 69.7031C80.8828 63.5977 83.4375 56.1328 83.4375 48.2812C83.4375 38.8828 79.7695 30.0703 73.1367 23.4258C66.5039 16.7812 57.668 13.125 48.2812 13.125C38.8945 13.125 30.0586 16.793 23.4258 23.4258C16.7812 30.0586 13.125 38.8828 13.125 48.2812C13.125 57.668 16.793 66.5039 23.4258 73.1367C30.0586 79.7812 38.8828 83.4375 48.2812 83.4375C56.1328 83.4375 63.5859 80.8828 69.6914 76.1719L100.125 106.594C100.214 106.683 100.32 106.754 100.437 106.802C100.553 106.851 100.678 106.875 100.805 106.875C100.931 106.875 101.056 106.851 101.173 106.802C101.289 106.754 101.395 106.683 101.484 106.594L106.594 101.496C106.683 101.407 106.754 101.301 106.802 101.184C106.851 101.068 106.875 100.943 106.875 100.816C106.875 100.69 106.851 100.565 106.802 100.449C106.754 100.332 106.683 100.226 106.594 100.137V100.137ZM66.8437 66.8437C61.875 71.8008 55.2891 74.5312 48.2812 74.5312C41.2734 74.5312 34.6875 71.8008 29.7187 66.8437C24.7617 61.875 22.0312 55.2891 22.0312 48.2812C22.0312 41.2734 24.7617 34.6758 29.7187 29.7187C34.6875 24.7617 41.2734 22.0312 48.2812 22.0312C55.2891 22.0312 61.8867 24.75 66.8437 29.7187C71.8008 34.6875 74.5312 41.2734 74.5312 48.2812C74.5312 55.2891 71.8008 61.8867 66.8437 66.8437Z" fill="white"/>
        </svg>
        </div> */}
      
        </div>
        </div>

        <div>
        
        </div>
        


      <div className='learningFeatures'>


      <div className='buttonContent'>


      <div className={toggleState === 1 ? "buttonContent-inner  active-content" : "buttonContent-inner"}>

        <p> GENERAL LEARNING COMING SOON!!!</p>
        
        <p> GENERAL LEARNING COMING SOON!!!</p>
        
        <p> GENERAL LEARNING COMING SOON!!!</p>

      </div>


      <div className={toggleState === 2 ? "buttonContent-inner active-content" : "buttonContent-inner"}>

        <p> FEATURE LEARNING COMING SOON!!!</p>

        <p> FEATURE LEARNING COMING SOON!!!</p>

        <p> FEATURE LEARNING COMING SOON!!!</p>

      </div>

      <div className={toggleState === 3 ? "buttonContent-inner  active-content" : "buttonContent-inner"}>

        <p> Building an affiliate campaign learning COMING SOON!!!</p>
        
        <p> Building an affiliate campaign learning COMING SOON!!!</p>
        
        <p> Building an affiliate campaign learning COMING SOON!!!</p>

      </div>


      <div className={toggleState === 4 ? "buttonContent-inner active-content" : "buttonContent-inner"}>

        <p> One-time Access Affiliate Sign-up learning COMING SOON!!!</p>
        <p> One-time Access Affiliate Sign-up learning COMING SOON!!!</p>
        <p> One-time Access Affiliate Sign-up learning COMING SOON!!!</p>

      </div>


      <div className={toggleState === 5 ? "buttonContent-inner  active-content" : "buttonContent-inner"}>

        <p> Managing and optimizing affiliate campaign learning COMING SOON!!!</p>
        
        <p> Managing and optimizing affiliate campaign learning COMING SOON!!!</p>

        
        <p> Managing and optimizing affiliate campaign learning COMING SOON!!!</p>

      </div>


      <div className={toggleState === 6 ? "buttonContent-inner active-content" : "buttonContent-inner"}>

        <p> Managing Marketing Assets learning COMING SOON!!!</p>

        
        <p> Managing Marketing Assets learning COMING SOON!!!</p>

        
        <p> Managing Marketing Assets learning COMING SOON!!!</p>

      </div>

      <div className={toggleState === 7 ? "buttonContent-inner  active-content" : "buttonContent-inner"}>

        <p> In-App Messaging Features learning COMING SOON!!!</p>

        <p> In-App Messaging Features learning COMING SOON!!!</p>

        <p> In-App Messaging Features learning COMING SOON!!!</p>

      </div>


      <div className={toggleState === 8 ? "buttonContent-inner active-content" : "buttonContent-inner"}>

        <p> New user onboarding learning COMING SOON!!!</p>

        <p> New user onboarding learning COMING SOON!!!</p>

        <p> New user onboarding learning COMING SOON!!!</p>

        <p> New user onboarding learning COMING SOON!!!</p>

      </div>
      

      <div className={toggleState === 9 ? "buttonContent-inner  active-content" : "buttonContent-inner"}>

        <p> Affiliate Payouts and commission learning COMING SOON!!!</p>


        <p> Affiliate Payouts and commission learning COMING SOON!!!</p>


        <p> Affiliate Payouts and commission learning COMING SOON!!!</p>

        



      </div>


      <div className={toggleState === 10 ? "buttonContent-inner active-content" : "buttonContent-inner"}>

        <p> Troubleshooting learning COMING SOON!!!</p>

        <p> Troubleshooting learning COMING SOON!!!</p>

        <p> Troubleshooting learning COMING SOON!!!</p>
        
        <p> Troubleshooting learning COMING SOON!!!</p>

      </div>


      <div className={toggleState === 11 ? "buttonContent-inner  active-content" : "buttonContent-inner"}>

        <p> Account & Billing learning COMING SOON!!!</p>

        <p> Account & Billing learning COMING SOON!!!</p>

        <p> Account & Billing learning COMING SOON!!!</p>

        <p> Account & Billing learning COMING SOON!!!</p>


        

      </div>


      <div className={toggleState === 12 ? "buttonContent-inner active-content" : "buttonContent-inner"}>

        <p> Advanced technical features learning COMING SOON!!!</p>

        <p> Advanced technical features learning COMING SOON!!!</p>

        <p> Advanced technical features learning COMING SOON!!!</p>

        
        <p> Advanced technical features learning COMING SOON!!!</p>

    



      </div>


      <div className={toggleState === 13 ? "buttonContent-inner  active-content" : "buttonContent-inner"}>

        <p> New features LEARNING COMING SOON!!!</p>

        
        <p> New features LEARNING COMING SOON!!!</p>

        
        <p> New features LEARNING COMING SOON!!!</p>

        <p> New features LEARNING COMING SOON!!!</p>


      </div>


      <div className={toggleState === 14 ? "buttonContent-inner active-content" : "buttonContent-inner"}>

        <p> ANNOUNCEMENTS LEARNING COMING SOON!!!</p>

        <p> ANNOUNCEMENTS LEARNING COMING SOON!!!</p>

        <p> ANNOUNCEMENTS LEARNING COMING SOON!!!</p>

        <p> ANNOUNCEMENTS LEARNING COMING SOON!!!</p>

      </div>

        
      </div>



      <div className='featureButton'>
      <Fragment>
       
        <button 
       key={1}
       style={{
       color: active === "1" ? "#FF00F7" : undefined
       }}
       id={"1"}
       className={toggleState === 1 ? " featureBtn  active-tabs " : "featureBtn"}
        onClick={(e) => {toggleTab(1); handleClick(e) }}> General
      </button>
    
     
       <button 
       key={2}
       style={{
       color: active === "2" ? "#FF00F7" : undefined
       }}
       id={"2"}
       className={toggleState === 2 ? " featureBtn active-tabs" : "featureBtn"}
          onClick={(e) => {toggleTab(2);  handleClick(e) }} > Features
      </button> 

        
      <button 
            key={3}
            style={{
            color: active === "3" ? "#FF00F7" : undefined
            }}
            id={"3"}
       className={toggleState === 3 ? " featureBtn active-tabs" : "featureBtn"}
       onClick={(e) => {toggleTab(3); handleClick(e) }} >Building an affiliate campaign
      </button>
  

      <button
         key={4}
         style={{
         color: active === "4" ? "#FF00F7" : undefined
         }}
         id={"4"} 
      className={toggleState === 4 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(4); handleClick(e)}}>One-time Access Affiliate Sign-up
      </button>
      
      <button 
         key={5}
         style={{
         color: active === "5" ? "#FF00F7" : undefined
         }}
         id={"5"}
      className={toggleState === 5 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(5); handleClick(e)}}>Managing and optimizing affiliate campaign
      </button>


      <button 
         key={6}
         style={{
         color: active === "6" ? "#FF00F7" : undefined
         }}
         id={"6"}
      className={toggleState === 6 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(6); handleClick(e)}}>In-App Messaging Features
      </button>

      
      <button
         key={7}
         style={{
         color: active === "7" ? "#FF00F7" : undefined
         }}
         id={"7"}
       className={toggleState === 7 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(7); handleClick(e)}}>New user onboarding
      </button>

      <button
         key={8}
         style={{
         color: active === "8" ? "#FF00F7" : undefined
         }}
         id={"8"}
       className={toggleState === 8 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(8); handleClick(e)}}>Managing Marketing Assets
      </button>

      <button 
         key={9}
         style={{
         color: active === "9" ? "#FF00F7" : undefined
         }}
         id={"9"}
      className={toggleState === 9 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(9); handleClick(e)}}>Affiliate Payouts and commission
      </button>

      <button
         key={10}
         style={{
         color: active === "10" ? "#FF00F7" : undefined
         }}
         id={"10"}
       className={toggleState === 10 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(10); handleClick(e)}}>Troubleshooting
      </button>

      <button 
         key={11}
         style={{
         color: active === "11" ? "#FF00F7" : undefined
         }}
         id={"11"}
      className={toggleState === 11 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(11); handleClick(e)}}>Account & Billing
      </button>

      <button 
         key={12}
         style={{
         color: active === "12" ? "#FF00F7" : undefined
         }}
         id={"12"}
      className={toggleState === 12 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(12); handleClick(e)}}>Advanced technical features
      </button>

      <button 
         key={13}
         style={{
         color: active === "13" ? "#FF00F7" : undefined
         }}
         id={"13"}
      className={toggleState === 13 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(13); handleClick(e)}}>New features
      </button>

      <button 
         key={14}
         style={{
         color: active === "14" ? "#FF00F7" : undefined
         }}
         id={"14"}
      className={toggleState === 14 ? " featureBtn active-tabs" : "featureBtn"}
        onClick={(e) => {toggleTab(14); handleClick(e) }}>Announcements
      </button>

      </Fragment>
      </div>


      </div>


      <div className='learningFooter'>
      <Footer/>
      </div>

  
    </div>
  )
}

export default Learning