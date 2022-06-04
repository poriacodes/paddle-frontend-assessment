import React from 'react'
import Header from "../Components/Header"
import "../Styles/About.css"
import dottedImg from "../Assets/dottedDesign.png"
import Footer from "../Components/mainFooter"

const About=()=> {

  return (

    <div className='aboutUs'>


      <Header/>


      <div className='square'></div>


      <div className='AboutUs'>


      <div className='AboutUs1'>

        <div className='aboutLine'>
          <div className='line'></div>
          <p>ABOUT US</p> 
        </div>

        <h1>Built for Saas<br/>and E-commerce </h1>

      </div>


      <div className='AboutUs2'>
        
        <div className='aboutCircle'></div>

        <div className='aboutContent'>Our tools are easy to set up and use with a user <br/> friendly dashboard that enables you to set up, 
        <br/> launch, automate and manage multi-affiliate<br/> campaigns in 5 minutes.</div>

      </div>

      </div>

      <h1 className='aboutUsContent'>Metricks was developed because just like <br/> you, we needed a product that could give <br/> us good value.</h1>


      <div className='aboutUs3'>


      <div className='aboutUs3_1'>


        <div className='whyUs'>

        <div className='one'><span>01</span></div>

        <div className='h1'>WHY US?</div>

        </div>

       <div className='pride1'> <p  className='pride'>We pride ourselves in our ability to innovate and <br/> create world-class tools that provide reliable and <br/> efficient touchpoints between advertisers and <br/> affiliates.</p></div>


        <div className='dottedLines'>
          <img src={dottedImg} alt="" />
        </div>

      </div>


      <div className='aboutUs3_2'>


      <div className='square2'></div>
      

      <div className='gwY'>

        
      <div className='gwYOne'>

      <div className='one'><span>01</span></div>

      <div className='h1'>GROWING WITH YOU</div>

      </div>

      <div  className='leverage1'><p className='leverage'>Leveraging the best technology, we have developed an all-in- <br/>one affiliate marketing tracking software, a genius tool to help<br/> you track, automate and optimize your influencer campaigns,<br/> all from one dashboard.</p></div>

      <div  className='leverage1'><p className='leverage'>Our team of experts are constantly brainstorming, testing and <br/> developing new solutions with only one thing in mind - your <br/> business growth. Your success is our success and by giving you <br/> the tools you need to scale, we grow as well.</p></div>


      </div>

      </div>

      </div>

      <div className='square3'></div>

      <div className='question'>

        <div className='questionContent'>
          <h1>Got a Question?</h1>
          <div className='questionP'><p>See how Metricks can help your business grow with best Affiliate Marketing Tracking <br/> Software.</p></div>

          <div className='contactArrow'>
            <p>Contact Us</p>
            <svg width="121" height="121" viewBox="0 0 121 121" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.88065 60.0464C7.88697 59.0518 8.2881 58.1005 8.99581 57.4017C9.70352 56.7029 10.6598 56.3139 11.6544 56.3202L100.1 56.8816L76.6478 33.1373C75.9482 32.4287 75.5586 31.4711 75.565 30.4753C75.5713 29.4795 75.9729 28.527 76.6815 27.8274C77.3901 27.1277 78.3477 26.7382 79.3435 26.7445C80.3393 26.7508 81.2918 27.1525 81.9914 27.8611L111.8 58.0509C112.147 58.4014 112.422 58.817 112.608 59.2738C112.794 59.7306 112.888 60.2196 112.885 60.7128C112.882 61.2061 112.782 61.6938 112.59 62.1482C112.398 62.6026 112.118 63.0147 111.767 63.3608L81.5769 93.1698C80.8683 93.8694 79.9108 94.2589 78.915 94.2526C77.9192 94.2463 76.9667 93.8447 76.267 93.1361C75.5674 92.4275 75.1778 91.4699 75.1842 90.4741C75.1905 89.4783 75.5921 88.5258 76.3007 87.8262L100.052 64.3814L11.6068 63.8201C10.6122 63.8138 9.66094 63.4126 8.96215 62.7049C8.26337 61.9972 7.87434 61.0409 7.88065 60.0464V60.0464Z" fill="#FF00F7"/>
            </svg>
          </div>

        </div>

      </div>

      <div className='aboutFooter'>
      <Footer/>
      </div>

    </div>

  )
}

export default About