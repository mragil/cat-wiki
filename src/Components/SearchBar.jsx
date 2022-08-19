import React from 'react'

const SearchBar = ({placeholderText}) => {
  return (
    <div className='flex items-center'>
        <input type="text" className='rounded-full p-4 md:w-64' placeholder={placeholderText} />
        <svg fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-5 h-5 absolute left-56 md:left-94"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
  )
}

export default SearchBar