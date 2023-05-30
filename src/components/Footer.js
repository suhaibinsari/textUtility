import React from 'react'
export default function Footer() {
  return (
    <>
      <footer className="navbar text-black  bottom-0 left-0 z-20 w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 ">
          <span className="text-sm sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">Text Utility</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
              <li>
                  <a href="#0" className="mr-4 hover:underline md:mr-6">About Us</a>
              </li>
              <li>
                  <a href="#0" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
              </li>
              <li>
                  <a href="#0" className="mr-4 hover:underline md:mr-6">Pricing</a>
              </li>
          </ul>
      </footer>
    </>
  )
}
