import React from 'react'
import { contactObj } from '../../../data'
import { Button, SocialMediaIcons } from '../../sharedComponents/SharedComponents'

const Contact = () => {
  return (
    <div className='px-4 max-w-5xl mx-auto'>
      <div className="text-center text-white pt-16">

        <>
          <h2 className="h2">
            Contact
          </h2>

          <p className="sm:text-lg lg:text-2xl mb-10">
          Got a question or have some feedback? Feel free to reach out to us – we're here to help!
          </p>
        </>

        <ul className='grid gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 mt-8 mb-12'>
          {contactObj.map((data) => {
            return (
              <li key={data.id}>
                <data.icon className='inline-block text-4xl text-customGreen hover:text-customBlue cursor-pointer transition-colors duration-200 ease-linear'/>
                <h3 className="my-2 font-bangers text-2xl">{data.title}</h3>
                <p className="inline-block">{data.text}</p>
              </li>
            )
          })}
        </ul>

        <form className='px-2' id='form'>

          <span className='grid sm:grid-cols-2 gap-x-2'>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="Your Email"/>
          </span>

          <input type="text"  placeholder="Your Subject"/>
          <textarea placeholder="Your Message"/>

          <div className='text-right uppercase'>
            <Button text={"Send Message"} color={"bg-customBlue"}/>
          </div>
        </form>

        <div className='my-8'>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  )
}

export default Contact
