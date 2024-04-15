import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
       setSuggestions(searchCache[searchQuery]);
      } else{
        getSearchSuggestions()
       }
    }, 200);
    
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async() => {
    console.log("API Call", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    //update cache
    dispatch(cacheResults(
      {
        [searchQuery] : json[1],
      })
  );
  }

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
        <div>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'
        value={searchQuery}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
        onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>
          🔍
          </button>
        </div>
        {showSuggestions && (
             <div className='bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
             <ul>
               {suggestions.map(s=> <li key={s}>
                 🔍{s}
               </li>)}
             </ul>
           </div>
        )}
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