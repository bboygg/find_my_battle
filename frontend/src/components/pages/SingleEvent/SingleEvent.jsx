import React, { useEffect, useState } from 'react'
import { Button, EventDisplayText } from '../../sharedComponents/SharedComponents';
import { useFetchedEventById } from '../../../Spinners/BattleSpinner';
import { Link } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';

const SingleEvent = () => {
  const [short, setShort] = useState(15)
  const {singleEvent , eventAction, isFetching} = useFetchedEventById() 
  const Event = singleEvent
  const size = useWindowSize();


  useEffect (() => {
    if(size.width < 856 ) {
      setShort(() => 20)
    } else if (size.width < 1092) {
      setShort(() => 30)
    } else {
      setShort(() => 40)
    }
  }, [size])

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
            <a href={Event.link} target='_blank' rel='noreferrer' className='sm:text-2xl  text-base max-w-4xl grid grid-cols-2 capitalize my-4 cursor-pointer group'>
              <span>website</span> <span className='p-2 group-hover:underline group-hover:text-sky-400 transition'>{Event.link.substring(0, short)}</span>
            </a>
            <EventDisplayText text={"Genre"} event={Event.genre.join(",")}/>
            <EventDisplayText text={"Format"} event={Event.format.join(" ,")}/>
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

      <Link to={"/battles"} className='text-center py-3 block'>
        <Button text={"All Battles"} color={"bg-customBlue text-white"}/>
      </Link>
    </section>
  )
}

export default SingleEvent
