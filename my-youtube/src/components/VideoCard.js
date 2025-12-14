import React from 'react';

const VideoCard = ({ info }) => {
    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails, publishedAt} = snippet;

    const formatViews = (views) => {
      const num = parseInt(views);
      if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
      if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
      return num.toString();
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays < 7) return `${diffDays} days ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
      return `${Math.floor(diffDays / 365)} years ago`;
    };

  return (
    <div className='group cursor-pointer animate-fade-in'>
      <div className='relative overflow-hidden rounded-xl mb-3 bg-gray-200 aspect-video'>
        <img 
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
          alt={title} 
          src={thumbnails.medium?.url || thumbnails.default?.url} 
          loading='lazy'
        />
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300'></div>
      </div>
      
      <div className='flex gap-3'>
        <div className='flex-shrink-0'>
          <div className='w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold text-sm'>
            {channelTitle?.[0]?.toUpperCase() || 'U'}
          </div>
        </div>
        
        <div className='flex-1 min-w-0'>
          <h3 className='font-semibold text-sm text-gray-900 line-clamp-2 mb-1 group-hover:text-primary-600 transition-colors'>
            {title}
          </h3>
          <p className='text-xs text-gray-600 mb-1 truncate'>{channelTitle}</p>
          <div className='flex items-center gap-1 text-xs text-gray-500'>
            <span>{formatViews(statistics?.viewCount || 0)} views</span>
            <span>•</span>
            <span>{formatDate(publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;