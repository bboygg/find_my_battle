import React from 'react'
import logo from "./../../../assets/images/logo-trans.png"
import { EventList } from '../../../data'
import { Button } from '../../sharedComponents/SharedComponents'

const Index = () => {
  return (
    <article className='text-white'>

      {/* ==== Hero section === */}
      <section className='border-4 border-solid border-customBlue rounded-xl pt-10 px-4 my-20'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-customGreen font-bangers uppercase'>Don't miss out your battle</h1>

        <div className='grid md:grid-cols-2 items-center my-6 md:mb-0 md:mt-0'>
          <div className='md:p-2 order-last md:order-first'>
            <p className='text-sm 2xl:text-lg font-montserrat sm:text-base'>
              Welcome to Find Your Battle, your ultimate source for breaking battle updates in Korea and beyond! We're dedicated to keeping breaking enthusiasts informed about upcoming B-boy battles, jams, cyphers, and championships. You'll never miss a beat, staying on top of the freshest breaking events happening in your area.
            </p>
            <button className='mt-20 bg-customBlue font-montserrat rounded-md px-5 py-2 hover:bg-customGreen transition uppercase'>
              Learn More
            </button>
          </div>

          <div className='order-first md:order-last'>
            <img src={logo} alt="logo" className='max-h-72 max-w-[288px] mx-auto md:max-h-full md:max-w-full'/>
          </div>
        </div>       
      </section>

      {/* ==== Featured Battles ==== */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto text-center mt-10 mb-20'>
          <h2 className='text-customGreen text-7xl col-span-4 font-bangers'>FEATURED BATTLES</h2>
          <p className='sm:text-lg lg:text-2xl font-montserrat'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
        </div>

        <div className='w-full overflow-scroll md:overflow-visible'>
          <ul className='text-stone-800 font-montserrat bg-white px-10 py-7 min-w-[768px]'>
            {EventList?.map((event) => {
              return (
                <li key={event.id} className="even:bg-[#e2e2e2] group py-2 px-2 rounded capitalize cursor-pointer text-sm lg:text-base grid grid-cols-6 gap-x-4 first:font-semibold first:text-lg first:font-round">
                  <div className='col-span-1'> 
                    {event.date}
                  </div>

                  <div className='col-span-2'>
                    {event.name}
                  </div>    

                  <div className='col-span-1'>
                    {event.location}
                  </div> 

                  <div className='col-span-1'>
                    {event.Genre}
                  </div>   

                  <div className='col-span-1'>
                    {event.Format}
                  </div>    
                </li>
              )
            })}
          </ul>
        </div>

        <div className='text-center mt-24 font-montserrat '>
          <Button color={"bg-customBlue "} text={"Browse battles"}/>
        </div>
      </section>

      {/* ==== Join Today/ Contact === */}
      <section className='py-16 lg:grid lg:grid-flow-col lg:justify-between mx-auto text-center lg:text-left'>
        <p className='sm:text-2xl text-lg font-montserrat col-span-2 max-w-2xl mx-auto pr-2.5 lg:mx-0'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>

        <div className='col-span-1 grid grid-cols-2 gap-4 max-w-xs mx-auto mt-12 lg:mt-0'>
          <div>
            <Button color={"text-white  font-montserrat bg-customBlue hover:text-white"} text={"join today"}/>
          </div>
          <div>
            <Button color={"text-customBlue  font-montserrat bg-white hover:text-white"} text={"contact us"}/>
          </div>
        </div>
      </section>
    </article>
  )
}

export default Index
