import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useWindowSize } from "@uidotdev/usehooks";
import Navigation from './navigation/Navigation'
import footerLogo from "./../assets/images/footerLogo.webp"
import { Navigations } from '../data';

const HomeRoute = () => {
  const [showNavLinks, setShowNavLinks] = useState(false)
  const size = useWindowSize();

  // Handle opening and closing of navigation bar in small-screen devices
  const HandleShowNavLinks = () => {
    setShowNavLinks((state)=> !state)
  }

  // Handle closing of navigation bar in small-screen devices, when other part of the page is clicked
  const handleCloseSideBar = () => {
    setShowNavLinks(() => false)
  }

  const footerNavigation = [Navigations[1], Navigations[3], Navigations[4]]

  // Handle closing of navigation bar if the screen width changes
  useEffect (() => {
    if(size.width >  640) {
      handleCloseSideBar()
    }
  }, [size])

  return (
    <div className='relative'>
      <header className='fixed top-0 inset-x-0'>
        <Navigation 
          showNavLinks={showNavLinks}
          handleCloseSideBar={handleCloseSideBar} 
          HandleShowNavLinks={HandleShowNavLinks}
        />
      </header>

      <main className='max-w-7xl mx-auto mt-28' onClick={handleCloseSideBar}>
        <div className='mx-5'>
          <Outlet />
        </div>
      </main>

      <footer className='mt-16 bg-white grid md:grid-flow-col md:justify-between items-center lg:px-20 md:px-10 px-3 text-center md:text-left text-black'>
        <div className='grid sm:grid-cols-2 max-w-lg items-center mx-auto md:mx-0'>
          <div>            
            <img src={footerLogo} alt="footerLogo"/>
          </div>

          <ul className='mx-4 mb-16 sm:mb-0'>
            {footerNavigation.map((nav) => {
              return (
                <li key={nav.id} className='inline-block mx-1.5 p-0.5 cursor-pointer hover:text-customBlue transition'>
                  <Link to={nav.url}>
                    {nav.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <small>Copyright&#169; 2023 Find My Battle</small>
      </footer>
    </div>
  )
}

export default HomeRoute
