import React from 'react'
import logo from "./../../../assets/images/logo.png"

const Index = () => {
  return (
    <article>
      {/* ==== Hero section === */}
      <section className='border-4 border-solid border-teal-500 rounded-xl p-12 text-white'>
        <h2 className='text-7xl text-green-500 font-lora uppercase italic font-extrabold tracking-tighter'>don't miss out your battle</h2>

        <div className='grid grid-cols-2 items-center'>
          <div>
            <p>
              Welcome to Find your battle, your ultimate source for breaking battle updates in Korea and beyond! We're dedicated to keeping 
              breaking enthusiasts informed about upcoming B-boy battles, jams, cyphers, and championships. You'll never miss a beat, staying
              on top of the freshest breaking events happening in your area.
            </p>
            <button></button>
          </div>

          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
       
      </section>
    </article>
  )
}

export default Index
