import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="grid items-center h-screen w-full text-center">    
      <div className="text-[199%] font-josefin font-semibold">    
        <p>Sorry The Page You are Looking For does Not Exit!</p>    
        <Link to={"/"} className="text-4xl text-teal-400 hover:text-teal-500 cursor-pointer 
          transition-colors duration-200 ease-linear">
          Home
        </Link> 
      </div> 
    </div>
  )
}

export default NotFound
