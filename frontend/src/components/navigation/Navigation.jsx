import React from 'react'
import { Navigations } from '../../data'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = ({handleCloseSideBar, HandleShowNavLinks, showNavLinks}) => {
  return (
    <nav className='bg-slate-50 py-3 relative h-10 sm:h-auto'>
      <ul className={`px-8 sm:static sm:py-0 py-10 bg-inherit fixed top-0 sm:translate-x-0 sm:opacity-100 sm:visible transition
        ${showNavLinks ? "translate-x-0 opacity-100 visible" : "-translate-x-full opacity-0 invisible"}`}>
        {Navigations.map((nav) => {
          return (
            <li key={nav.id} className='sm:inline-block mx-2 py-1 px-px text-lg cursor-pointer font-medium relative after:absolute after:inset-x-0 after:bg-customBlue after:h-0.5 after:top-full
            after:w-0 after:opacity-0 hover:after:w-[60%] hover:after:opacity-100 transitionAfter' onClick={handleCloseSideBar}>
              <NavLink to={nav.url} end className={({ isActive }) => isActive ?  "text-customBlue" :  "text-customBlack"}>
                {nav.name}
              </NavLink>
            </li>
          )
        })}
      </ul>

      <button className="text-slate-800 sm:hidden text-2xl cursor-pointer hover:bg-customBlue transition rounded-sm absolute top-1.5 right-2  p-0.5 shadow-md shadow-black" onClick={HandleShowNavLinks}>
          {showNavLinks ? <FaTimes className="gird items-center rounded-sm"/> : <FaBars className="gird items-center rounded-sm"/>}
        </button>   
    </nav>
  )
}

export default Navigation
