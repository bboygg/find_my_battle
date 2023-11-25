import React from 'react'
import { Link } from 'react-router-dom';
import { EventListHead } from '../../sharedComponents/SharedComponents';
import { useFetchedEvents } from '../../../Spinners/BattleSpinner';

const Battle = () => {
  const {content , action, isFetching} = useFetchedEvents()
  const Event = content
  return (
    <div className={`${isFetching && "after:opacity-40 after:bg-white relative after:absolute after:inset-0 after:z-40"}`}>
      <div>
        <div>
          <h2 className='h2'>Battles</h2>
        </div>
      </div>

      <div className='w-full overflow-scroll md:overflow-visible my-20'>
        <ul className='text-stone-800 bg-white px-10 py-7 min-w-[768px] rounded-sm'>
          <EventListHead />
          {action ? Event?.map((event) => {
            return (
              <li key={event.id} className="even:bg-[#e2e2e2] group py-2 px-2 rounded capitalize cursor-pointer text-sm lg:text-base grid grid-cols-6 gap-x-4">
                <div className='col-span-1'> 
                  {event.date}
                </div>

                <Link to={event.id} className='col-span-3 font-medium hover:underline transition'>
                  {event.name}
                </Link>    

                <div className='col-span-1'>
                  {event.country}
                </div> 

                <div className='col-span-1'>
                  {event.format}
                </div>    
              </li>
            )
          })
        :
        <div className='skeleton w-full lg:h-80 h-4 mb-0.5 rounded-sm'></div>
        }
        </ul>
      </div>
    </div>
  )
}

export default Battle