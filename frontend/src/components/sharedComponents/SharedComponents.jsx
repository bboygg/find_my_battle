import { socialIcons } from "../../data"

export const Button = ({color, text}) => {
  return (
    <button className={`${color} px-7 py-2.5 rounded-md hover:bg-customGreen transition capitalize`}>
      {text}
    </button>
  )
}

export const SocialMediaIcons = () => {

  return (
    <ul className='list-none m-0 p-0'>
      {socialIcons.map((icon) => {

        return (
          <li key={icon.id} className='inline-block mx-2'>
            <a href={icon.link} target="_blank" rel="noreferrer" className="inline-block px-2 py-2 rounded-full bg-white group border border-solid hover:bg-pink-400 active:bg-pink-700 transition-colors duration-200 ease-linear">
              <icon.icon className="text-lg text-stone-700 grid items-center group-hover:text-white transition-colors duration-200 ease-linear" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}


export const EventDisplayText = ({text, event}) => {

  return (
    <div className='sm:text-2xl text-lg max-w-xl grid grid-cols-2 capitalize my-4'>
      <span>{text}</span> <span>{event}</span>
    </div>
  )
}


export const EventListHead = ({index}) => {

  return (   
    <li className="even:bg-[#e2e2e2] group py-2 px-2 rounded uppercase cursor-pointer lg:text-base grid grid-cols-6 gap-x-4 text-xl">
      <div className='col-span-1'> 
        date
      </div>

      <div className={index ? "col-span-2" : "col-span-3"}>
        Name
      </div>    

      <div className='col-span-1'>
        location
      </div> 

      {index && <div className='col-span-1'>
        Genre
      </div>}

      <div className='col-span-1'>
        Format
      </div>    
    </li>
  )
}
