import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import TextForm from '../components/TextForm'
import Footer from '../components/Footer'
import Alert from '../components/Alert'





export default function Home() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
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
    < TextForm showAlert={showAlert} heading="Transform your text into the specified format" sheading="Text Summary"/>
    {/* <button onClick={toggleDarkMode}> hello</button> */}
    <Alert alert={alert}/>
    <Footer/>

    </body>
  )
}

