import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import TextForm from '../components/TextForm'
import Footer from '../components/Footer'



export default function Home() {

  // const [myStyle, setmyStyle ] = useState({
  //   color: 'red',
  //   backgroundColor: "cyan"
  // })

  // const toggleDarkMode = () => {
  //   console.log(toggleDarkMode)
  //   if(toggleDarkMode == "white") {
  //     setmyStyle({
  //       color: 'green',
  //       backgroundColor: "green"
  //     })
  //   }

  //     else{
  //     setmyStyle({
  //       color: 'red',
  //       backgroundColor: "pink"
  //     })
  //   }
  // }



  return (
    <body>
    <Navbar features="Features" pricing="Pricing" aboutUs="About Us" signIn="Sign In" signUp="Sign Up" />
    < TextForm heading="Transform your text into the specified format" sheading="Text Summary"/>
    {/* <button onClick={toggleDarkMode}> hello</button> */}
    <Footer/>
    </body>
  )
}

