import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { EventListHead } from '../../sharedComponents/SharedComponents';
import { useFetchedEvents } from '../../../Spinners/BattleSpinner';
import SearchComponent from '../../searchComponent/SearchComponent';

const Battle = () => {
  const [oneEvent, setOneEvent] = useState([])
  const [search, setSearch] = useState("")
  const [openSearch, setOpenSearch] = useState(false) // open search input when the search icon is clicked
  const {content , action, isFetching} = useFetchedEvents()
  const Event = content


  // open search input when clicked
  const handleButtonClick = () => {
    if(search === "") {
      setOpenSearch(() => true)
    }
  }

   // hadle setting search input values
   const handleSearchInPut = (event) => {
    setSearch(() => event.target.value.trim())
  }

// handel submission of Tittle and name 
const handleSubmit = (event) => {
  event.preventDefault()
  setOneEvent(() => [])

if (action) {

  if (search !== "" && openSearch) {
    Event.filter(event => 
      (event?.name?.startsWith(search) || event?.name === search?.toLocaleLowerCase() || event?.name === search?.toLocaleUpperCase()) 
      && setOneEvent((list) => [...list, event]))

    setOpenSearch(() => false)
    setSearch(() => "")
  } else {
    setOneEvent(() => Event)
  }
}
}

useEffect(() => {
  if(action) {

    setOneEvent(() => Event)
  }
}, [Event, action])

  return (
    <div className={`${isFetching && "after:opacity-40 after:bg-white relative after:absolute after:inset-0 after:z-40"} pb-60`}>
      <div>
        <div>
          <h2 className='h2'>Battles</h2>
        </div>
      </div>

      <div>
        <SearchComponent 
          handleSubmit={handleSubmit}
          search={search}
          handleButtonClick={handleButtonClick}
          openSearch={openSearch}
          handleSearchInPut={handleSearchInPut}
        />
      </div>

      <div className='w-full overflow-scroll md:overflow-visible my-20'>
        <ul className='text-stone-800 bg-white px-10 py-7 min-w-[768px] rounded-sm'>
          <EventListHead />
          {action ? oneEvent?.map((event) => {
            return (
              <li key={event.id} className="even:bg-[#e2e2e2] group py-2 px-2 rounded capitalize cursor-pointer text-sm lg:text-base grid grid-cols-9 gap-x-4">
                <div className='col-span-1'> 
                  {event.date.substring(0, 10)}
                </div>

                <Link to={event.id} className='col-span-3 font-medium hover:underline transition'>
                  {event.name}
                </Link>    

                <div className='col-span-2'>
                  {event.country}
                </div> 

                <div className='col-span-2'>
                  {event.format.join(",")}
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