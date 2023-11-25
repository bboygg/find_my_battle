import React from 'react'
import { useParams } from 'react-router-dom';
import { EventList } from '../../../data';
import { Button, EventDisplayText } from '../../sharedComponents/SharedComponents';

const SingleEvent = () => {
  let { userId } = useParams();
  const Event = EventList.find((event) => event.name === userId)
  return (
    <section>
      <div className='border-4 border-solid border-customBlue rounded-xl px-4 md:px-12 xl:px-20 lg:px-16 py-20 my-20'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-customGreen font-bangers mb-10 uppercase'>{Event.name}</h1>

        <div className='text-white mt-20'>
          <EventDisplayText text={"date"} event={Event.date}/>
          <EventDisplayText text={"country"} event={Event.country}/>
          <EventDisplayText text={"city"} event={Event.city}/>
          <EventDisplayText text={"location"} event={Event.location}/>
          <EventDisplayText text={"registration period"} event={Event.registration_period}/>
          <EventDisplayText text={"website"} event={Event.website}/>
          <EventDisplayText text={"Genre"} event={Event.Genre}/>
          <EventDisplayText text={"Format"} event={Event.Format}/>
          <EventDisplayText text={"description"}/>

          <p className='text-lg lg:text-2xl font-round font-montserrat pt-2'>
            {Event.description}
          </p>
        </div>
      </div>

      <div className='text-center py-3'>
        <Button text={"All Battles"} color={"bg-teal-500 text-white"}/>
      </div>
    </section>
  )
}

export default SingleEvent
