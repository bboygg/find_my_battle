import React from 'react'
import Logo from "./../../../assets/images/logo-trans.png"

const Battle = () => {
  return (
    <div>
      <div>
        <div className='grid grid-cols-5 max-w-xl mx-auto items-center max-h-28'>
          <img src={Logo} alt="logo" className='col-span-1 max-h-24 max-w-[100px]'/>
          <h2 className='text-customGreen text-7xl col-span-4 font-bangers'>Find My Battle</h2>
        </div>
      </div>
    </div>
  )
}

export default Battle