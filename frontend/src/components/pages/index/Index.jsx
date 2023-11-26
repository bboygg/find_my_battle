import React from 'react'
import logo from "./../../../assets/images/logo-trans.png"
import { Button, EventListHead } from '../../sharedComponents/SharedComponents'
import { Link } from 'react-router-dom'
import MailchimpForm from '../mailChimpForm'
import { useFetchedEvents } from '../../../Spinners/BattleSpinner'

const Index = () => {
  const {content , action, isFetching} = useFetchedEvents()
  const Event = content
 
  return (
    <article className={`text-white ${isFetching && "after:opacity-40 after:bg-white relative after:absolute after:inset-0 after:z-40"}`}>

      {/* ==== Hero section === */}
      <section className='border-4 border-solid border-customBlue rounded-xl px-4 md:px-12 xl:px-20 lg:px-16 py-20 my-20'>
  <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center text-customGreen font-bangers mb-10 uppercase'>
    Don't miss out on your battle
  </h1>

  <div className='grid md:grid-cols-2 items-center my-6 md:mb-0 md:mt-0'>
    <div className='md:p-2 order-last md:order-first'>
      <p className='text-lg 2xl:text-xl sm:text-base mt-6 md:mt-0'>
        Welcome to Find Your Battle, your ultimate source for breaking battle updates in Korea and beyond! We're dedicated to keeping breaking enthusiasts informed about upcoming B-boy battles, jams, cyphers, and championships. You'll never miss a beat, staying on top of the freshest breaking events happening in your area.
      </p>
      <br />
      <Link to={"/about"} className='mt-20 rounded-md py-2.5 hover:bg-customGreen transition uppercase'>
        <Button color={"bg-customBlue"} text={"Learn More"} />
      </Link>
    </div>

    <div className='order-first md:order-last'>
      <img src={logo} alt="logo" className='max-h-48 max-w-[200px] mx-auto md:max-h-full md:max-w-full'/>
    </div>
  </div>
</section>

      {/* ==== Featured Battles ==== */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto text-center mt-10 mb-20'>
          <h2 className='h2'>UPCOMING BATTLES</h2>
        </div>

        <div className='w-full overflow-scroll md:overflow-visible'>
          <ul className='text-stone-800 bg-white px-10 py-7 min-w-[768px] rounded-sm'>
            <EventListHead index={true}/>
            {action ? Event.slice(0, 10)?.map((event) => {
              return (
                <li key={event.id} className="even:bg-[#e2e2e2] group py-2 px-2 rounded capitalize cursor-pointer text-sm lg:text-base grid grid-cols-9 gap-x-4">
                  <div className='col-span-1'> 
                    {event.date.substring(0, 10)}
                  </div>

                  <Link to={`battles/${event.id}`} className='col-span-2 font-medium hover:underline transition'>
                    {event.name}
                  </Link>    

                  <div className='col-span-2'>
                    {event.country},{event.city}
                  </div> 

                  <div className='col-span-2'>
                    {event.genre.join(",")}
                  </div>   

                  <div className='col-span-2'>
                    {event.format.join(",")}
                  </div>    
                </li>
              )
            })
            :
            <div className='skeleton w-full lg:h-72 h-4 mb-0.5 rounded-sm'></div>
            }
          </ul>
        </div>

        <Link to={"/battles"} className='text-center mt-24 block'>
          <Button color={"bg-customBlue "} text={"Browse battles"}/>
        </Link>
      </section>

      {/* ==== Join Today/ Contact === */}
      <section className='py-16 lg:grid lg:grid-flow-col lg:justify-between mx-auto text-center lg:text-left'>
        <p className='sm:text-2xl text-lg col-span-2 max-w-2xl mx-auto pr-2.5 lg:mx-0'>
        Stay tuned for the latest and most exciting events in the world of breaking culture.
        </p>

        <div className='col-span-1 grid grid-cols-2 gap-4 max-w-xs mx-auto mt-12 lg:mt-0'>
          <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSfY_zPo-FXo3ZEyoFf_TXkb1pWcNkEwR8bMcJJ-hlZHovKPuw/viewform"}>
            <Button color={"text-white bg-customBlue hover:text-white"} text={"Add Battle"}/>
          </Link>
          <Link to={"/contact"}>
            <Button color={"text-customBlue bg-white hover:text-white"} text={"contact us"}/>
          </Link>
        </div>
      </section>
      {/* === E-MAIL Subscription === */}
      <MailchimpForm />
    </article>
  )
}

export default Index
