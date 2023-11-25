import React from 'react'
import Logo from "./../../../assets/images/logo.png"
import { EventList } from '../../../data'
import { Link } from 'react-router-dom'

const Battle = () => {
  return (
    <div>
      <div className='bg-black'>
        <div className='grid grid-cols-5 max-w-xl mx-auto items-center max-h-28'>
          <img src={Logo} alt="logo" className='col-span-1 max-h-24 max-w-[96px]'/>
          <h1 className='text-green-500 text-4xl sm:text-6xl col-span-4 font-bold font-lora italic'>Find My Battle</h1>
        </div>
      </div>

      <div className='w-full overflow-scroll md:overflow-visible my-20'>
          <ul className='text-stone-800 font-poppins bg-white px-10 py-7 min-w-[768px]'>
            {EventList?.map((event) => {
              return (
                <li key={event.id} className="even:bg-[#e2e2e2] group py-2 px-2 rounded capitalize cursor-pointer text-sm lg:text-base grid grid-cols-6 gap-x-4 first:font-semibold first:text-lg first:font-round">
                  <div className='col-span-1'> 
                    {event.date}
                  </div>

                  <Link to={event.name} className='col-span-3 font-semibold hover:underline transition'>
                    {event.name}
                  </Link>    

                  <div className='col-span-1'>
                    {event.location}
                  </div> 

                  <div className='col-span-1'>
                    {event.Format}
                  </div>    

                  {/* <span className='text-sm text-stone-400 italic capitalize hidden group-hover:block'>{event.name}</span>*/}
                </li>
              )
            })}
          </ul>
        </div>

    </div>
  )
}

export default Battle