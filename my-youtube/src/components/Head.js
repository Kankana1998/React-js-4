import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { toggleMenu } from '../utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSearchSuggestions = async() => {
    if(!searchQuery) return;
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1] || []);

    //update cache
    dispatch(cacheResults({
      [searchQuery] : json[1] || [],
    }));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
       setSuggestions(searchCache[searchQuery]);
      } else if(searchQuery){
        getSearchSuggestions()
       } else {
        setSuggestions([]);
       }
    }, 200);
    
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery, searchCache]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchQuery.trim()) {
      // Handle search action
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>MyYouTube - Watch, Discover, and Share Videos</title>
        <meta name="description" content="Discover and watch millions of videos. Browse trending content, explore channels, and enjoy a seamless video streaming experience." />
      </Helmet>
      <header className='sticky top-0 z-50 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-xl border-b border-gray-200/60 shadow-lg shadow-gray-900/5'>
        <div className='flex items-center justify-between px-4 md:px-6 py-3.5 gap-4'>
          {/* Left Section - Menu & Logo */}
          <div className='flex items-center gap-3 md:gap-4 flex-shrink-0'>
            <button
              onClick={toggleMenuHandler}
              className='p-2.5 rounded-xl hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 transition-all duration-300 active:scale-95 hover:shadow-md group'
              aria-label='Toggle menu'
            >
              <svg className='w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-transform group-hover:scale-110' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
            <a href='/' className='flex items-center gap-2 group'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:blur-xl'></div>
                <div className='absolute inset-0 bg-gradient-to-br from-red-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
                <img 
                  className='h-8 md:h-9 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 drop-shadow-md' 
                  alt='youtube-logo'
                  src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                />
              </div>
            </a>
          </div>

          {/* Center Section - Search */}
          <div className='flex-1 max-w-2xl relative' ref={searchRef}>
            <form onSubmit={handleSearch} className='flex items-center'>
              <div className='relative flex-1 w-full group'>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-l-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm'></div>
                <input 
                  className='relative w-full px-5 md:px-7 py-3 md:py-3.5 border-2 border-gray-200 rounded-l-full focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-500 transition-all duration-300 text-sm md:text-base bg-white/80 backdrop-blur-sm focus:bg-white shadow-sm focus:shadow-lg placeholder:text-gray-400' 
                  type='text'
                  placeholder='Search videos...'
                  value={searchQuery}
                  onFocus={() => setShowSuggestions(true)}
                  onChange={(e) => setsearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    type='button'
                    onClick={() => setsearchQuery('')}
                    className='absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100 transition-all duration-200 opacity-70 hover:opacity-100'
                  >
                    <svg className='w-4 h-4 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                )}
              </div>
              <button 
                type='submit'
                className='px-5 md:px-7 py-3 md:py-3.5 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 border-2 border-l-0 border-gray-200 rounded-r-full transition-all duration-300 active:scale-95 hover:shadow-lg group relative overflow-hidden'
                aria-label='Search'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <svg className='relative z-10 w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </button>
            </form>
            
            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className='absolute top-full mt-3 w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden animate-slide-up z-50'>
                <div className='absolute inset-0 bg-gradient-to-br from-white to-gray-50/50'></div>
                <ul className='relative py-2'>
                  {suggestions.slice(0, 8).map((s, index) => (
                    <li key={index} className='animate-fade-in' style={{ animationDelay: `${index * 0.03}s` }}>
                      <button
                        onClick={() => {
                          setsearchQuery(s);
                          setShowSuggestions(false);
                        }}
                        className='w-full px-5 py-3 text-left hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent transition-all duration-200 flex items-center gap-3 group relative'
                      >
                        <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200'></div>
                        <svg className='w-4 h-4 text-gray-400 group-hover:text-red-600 transition-all duration-200 group-hover:scale-110' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                        </svg>
                        <span className='text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-200'>{s}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Section - User */}
          <div className='flex items-center gap-3 flex-shrink-0'>
            <button className='p-2 rounded-xl hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 transition-all duration-300 relative group hover:shadow-lg active:scale-95'>
              <div className='absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-2 border-white shadow-lg animate-pulse'></div>
              <div className='absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gradient-to-br from-red-400 to-red-500 rounded-full border-2 border-white opacity-75 group-hover:opacity-100 transition-opacity'></div>
              <img 
                className='h-9 w-9 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-red-300 transition-all duration-300 group-hover:scale-110 shadow-md group-hover:shadow-xl' 
                alt='user'
                src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
              />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Head