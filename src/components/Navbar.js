import React from 'react'
import PropTypes from 'prop-types'
import logo from '../assets/logo/logo.png';

export default function Navbar(props) {
  return (
    <>
        <nav className='navbar shadow-xl z-[1] top-0 font-Poppins text-[18px] text-black mb-20'>
          <div className='conatiner mx-auto w-full'>
            <div className='flex items-center justify-around w-full'>
          <a href="#0"><img src={logo} alt="" className='w-[12rem] md:w-[20rem]' /></a>
          <div>
            <ul className='flex items-center space-x-4'>
                <li className='lg:block py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out'> <a href="#home">{props.features}</a></li>
                <li className='lg:block hidden py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out'> <a href="#tokenomics">{props.pricing}</a></li>
                <li className='lg:block hidden py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out'> <a href="#taxes">{props.aboutUs}</a></li>
                <li className='lg:block hidden py-10 cursor-pointer hover:text-black transition-all duration-200 ease-in-out'> <a href="#roadmap">{props.signIn}</a></li>
                <li className='lg:block hidden text-black bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 shadow-lg shadow-teal-500/50 font-medium rounded-lg px-5 py-2.5 text-center mr-2'> <a href="#buy">{props.signUp}</a></li>
            </ul>
            </div>
            </div>
          </div>
        </nav>
    </>
  )

}
Navbar.propTypes = {
  about: PropTypes.string.isRequired,
  age: PropTypes.number
};

Navbar.defaultProps = {
  about: "add ",
  age: PropTypes.number
};