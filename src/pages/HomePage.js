import React from 'react'
import Header from "../Components/Header"
import ComingSoon from "../Components/ComingSoon"
import Timer from "../Components/Timer"
import Form from "../Components/Form"
import Footer from '../Components/HomeFooter'


const HomePage = () => {
    
    return (
        
        <div>   
            <Header />
            <ComingSoon/>
            <Timer/>
            <Form/>
            <Footer/>
         
        </div>
    )
}

export default HomePage