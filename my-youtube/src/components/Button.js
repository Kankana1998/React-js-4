import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../utils/categorySlice'

const Button = ({name}) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((store) => store.category.selectedCategory);
  const isActive = selectedCategory === name;

  const handleClick = () => {
    dispatch(setCategory(name));
  };

  return (
    <button 
      onClick={handleClick}
      className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive 
          ? 'bg-gray-900 text-white shadow-md hover:bg-gray-800' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95'
      }`}
    >
      {name}
    </button>
  )
}

export default Button