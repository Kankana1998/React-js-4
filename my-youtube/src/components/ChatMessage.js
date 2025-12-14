import React from 'react'

const ChatMessage = ({name, message}) => {
  const isYou = name === 'You';
  
  return (
    <div className={`flex items-start gap-2 animate-slide-up ${isYou ? 'flex-row-reverse' : ''}`}>
      <div className='flex-shrink-0'>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold ${
          isYou 
            ? 'bg-primary-600' 
            : 'bg-gradient-to-br from-purple-400 to-pink-500'
        }`}>
          {name[0]?.toUpperCase() || 'U'}
        </div>
      </div>
      <div className={`flex-1 ${isYou ? 'text-right' : ''}`}>
        <div className={`inline-block px-3 py-2 rounded-2xl ${
          isYou 
            ? 'bg-primary-600 text-white' 
            : 'bg-white text-gray-900 shadow-sm'
        }`}>
          <p className='text-xs font-semibold mb-0.5'>{name}</p>
          <p className='text-sm'>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage