import React from 'react'
import Logo from "./../../../assets/images/logo.png"

const Battle = () => {
  return (
    <div>
      <div className='bg-black'>
        <div className='grid grid-cols-5 max-w-xl mx-auto items-center max-h-28'>
          <img src={Logo} alt="logo" className='col-span-1 max-h-24 max-w-[96px]'/>
          <h1 className='text-green-500 text-6xl col-span-4 font-bold font-lora italic'>Find My Battle</h1>
        </div>
      </div>
    </div>
  )
}

export default Battle