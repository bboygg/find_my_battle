import React from 'react'
import { FaSistrix } from 'react-icons/fa'

const SearchComponent = ({handleSubmit, search, handleButtonClick, openSearch, handleSearchInPut}) => {
  let searchIcon = <FaSistrix className="inline-block"/>

  return (  
    <form id="search-form" role="search" className='my-4 grid grid-cols-10 bg-neutral-200 p-3 mb-10'
      onSubmit={handleSubmit}>

      <input 
        id="s" 
        type="search" 
        placeholder='Search by name starting with capital letter' 
        name='s'
        ria-label="Search posts"
        className={`bg-neutral-50 focus:outline-none m-0 col-span-9 caret-[#f70d28] placeholder:text-stone-800 text-stone-800
          focus:border-none border-none transition-all duration-300 ease-linear  ${openSearch ? "w-full visible" : "invisible w-3"}
          shadow-inner text-center lg:text-left rounded-none`}
          value={search}
          onChange={handleSearchInPut}/>

      <button type="submit" 
        className='font-black col-span-1 m-0 p-0 text-sm md:text-lg text-neutral-100 bg-customBlue
        hover:bg-customGreen' onClick={handleButtonClick}>{searchIcon}</button>
    </form>
  )
}

export default SearchComponent
