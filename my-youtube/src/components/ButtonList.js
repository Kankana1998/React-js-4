import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const categories = ["All", "Gaming", "Songs", "Live", "Football", "Cricket", "Cooking", "Music", "Comedy", "News"];

  return (
    <div className='z-40 bg-white  px-4 md:px-8 py-3'>
      <div className='flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide'>
        {categories.map((category, index) => (
          <Button key={index} name={category} />
        ))}
      </div>
    </div>
  )
}

export default ButtonList