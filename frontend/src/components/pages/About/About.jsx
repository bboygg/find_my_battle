import React from 'react'
import { SocialMediaIcons } from '../../sharedComponents/SharedComponents'

const About = () => {
  return (
    <div>
      <div className='max-w-4xl mx-auto pt-20 pb-24'>
        <h2 className='h2'>About</h2>
        <p className='text-lg lg:text-2xl text-center'>
          Find My Battle is your ultimate source for breaking battle updates in Korea and beyond! We're dedicated to keeping breaking enthusiasts 
          informed about upcoming B-boy battles, jams, cyphers, and championships.  With Find My Battle you'll never miss a beat, staying on top 
          of the freshest breaking events happening in your area. Not just limited to Korea, we have bold plans to expand globally, connecting 
          breaking communities worldwide. For event organizers, our platform provides tools to manage dates seamlessly, ensuring every battle is 
          a success. Join Find My Batle now and be part of the breaking revolution—where the future of breaking starts, and borders are meant 
          to be broken!
        </p>

        <div className='mt-24 text-center'>
          <SocialMediaIcons />
        </div>
      </div>     
    </div>
  )
}

export default About
