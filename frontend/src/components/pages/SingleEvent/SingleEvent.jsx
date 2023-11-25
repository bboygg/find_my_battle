import React from 'react'
import { Button, EventDisplayText } from '../../sharedComponents/SharedComponents';
import { useFetchedEventById } from '../../../Spinners/BattleSpinner';

const SingleEvent = () => {
  const {singleEvent , eventAction, isFetching} = useFetchedEventById() 
  const Event = singleEvent

  return (
    <section className={`${isFetching && "after:opacity-40 after:bg-white relative after:absolute after:inset-0 after:z-40"}`}>
      <div className='border-4 border-solid border-customBlue rounded-xl px-4 md:px-12 xl:px-20 lg:px-16 py-20 my-20'>
        {eventAction ? 
        <>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-customGreen font-bangers mb-10 uppercase'>{Event.name}</h1>

          <div className='text-white mt-20'>
            <EventDisplayText text={"date"} event={Event.date.substring(0, 10)}/>
            <EventDisplayText text={"country"} event={Event.country}/>
            <EventDisplayText text={"city"} event={Event.city}/>
            <EventDisplayText text={"location"} event={Event.address}/>
            <EventDisplayText text={"registration period"} event={`${Event.reg_start.substring(0, 10)} to ${Event.reg_end.substring(0, 10)}`}/>
            <EventDisplayText text={"website"} event={Event.link.substring(0, 40)}/>
            <EventDisplayText text={"Genre"} event={Event.genre}/>
            <EventDisplayText text={"Format"} event={Event.format}/>
            <EventDisplayText text={"description"}/>

            <p className='text-lg lg:text-2xl font-montserrat pt-2'>
              {Event.description}
            </p>
          </div>
        </>
        :
        <div className='skeleton w-full lg:h-72 h-4 mb-0.5 rounded-sm'></div>
        }
      </div>

      <div className='text-center py-3'>
        <Button text={"All Battles"} color={"bg-customBlue text-white"}/>
      </div>
    </section>
  )
}

export default SingleEvent
