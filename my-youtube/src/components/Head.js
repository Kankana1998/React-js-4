import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';

const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
      <img className='h-8 cursor-pointer'
      alt='menu'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'
      onClick={() => toggleMenuHandler()}
      />
      <img className='h-8 mx-2'
      alt='youtube-logo'
      src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
      />
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8'
        alt='user'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        />
      </div>
    </div>
   
  )
}

export default Head