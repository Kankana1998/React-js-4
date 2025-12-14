import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setCategory } from '../utils/categorySlice';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const selectedCategory = useSelector(store => store.category.selectedCategory);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HomeIcon = () => (
    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
    </svg>
  );

  const ShortsIcon = () => (
    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z' />
    </svg>
  );

  const VideosIcon = () => (
    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' />
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
    </svg>
  );

  const LiveIcon = () => (
    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
    </svg>
  );

  const menuItems = [
    { icon: HomeIcon, label: 'Home', path: '/' },
    { icon: ShortsIcon, label: 'Shorts', path: '/shorts' },
    { icon: VideosIcon, label: 'Videos', path: '/videos' },
    { icon: LiveIcon, label: 'Live', path: '/live' },
  ];

  const subscriptions = [
    { name: 'Music', color: 'bg-pink-500' },
    { name: 'Games', color: 'bg-blue-500' },
    { name: 'Gaming', color: 'bg-purple-500' },
    { name: 'Movies', color: 'bg-red-500' },
  ];

  const handleCategoryClick = (categoryName) => {
    dispatch(setCategory(categoryName));
    // Navigate to home if not already there
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  if(!isMenuOpen) return null;

  return (
    <aside className='hidden md:block w-64 bg-white border-r border-gray-200 h-[calc(100vh-73px)] overflow-y-auto sticky top-[73px] animate-slide-up'>
      <nav className='p-4 space-y-1'>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-primary-50 text-primary-700 font-semibold' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <span className={isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-700'}>
                <IconComponent />
              </span>
              <span className='text-sm font-medium'>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className='border-t border-gray-200 my-4'></div>

      <div className='px-4 pb-4'>
        <h2 className='px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider'>Subscriptions</h2>
        <div className='space-y-1 mt-2'>
          {subscriptions.map((sub, index) => {
            const isActive = selectedCategory === sub.name;
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(sub.name)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors cursor-pointer group ${
                  isActive 
                    ? 'bg-primary-50 hover:bg-primary-100' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-full ${sub.color} flex items-center justify-center text-white text-xs font-bold ${isActive ? 'ring-2 ring-primary-500' : ''}`}>
                  {sub.name[0]}
                </div>
                <span className={`text-sm font-medium ${
                  isActive 
                    ? 'text-primary-700 font-semibold' 
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {sub.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className='border-t border-gray-200 my-4'></div>

      <div className='px-4 pb-4'>
        <h2 className='px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider'>Watch Later</h2>
        <div className='space-y-1 mt-2'>
          {subscriptions.map((sub, index) => {
            const isActive = selectedCategory === sub.name;
            return (
              <div
                key={index}
                onClick={() => handleCategoryClick(sub.name)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors cursor-pointer group ${
                  isActive 
                    ? 'bg-primary-50 hover:bg-primary-100' 
                    : 'hover:bg-gray-100'
                }`}
              >
                <div className={`w-8 h-8 rounded-full ${sub.color} flex items-center justify-center text-white text-xs font-bold ${isActive ? 'ring-2 ring-primary-500' : ''}`}>
                  {sub.name[0]}
                </div>
                <span className={`text-sm font-medium ${
                  isActive 
                    ? 'text-primary-700 font-semibold' 
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {sub.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar