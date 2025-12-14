import React, {useEffect, useState, useCallback} from 'react'
import { useSelector } from 'react-redux';
import { YOUTUBE_VIDEOS_API, YOUTUBE_SEARCH_VIDEOS_API, YOUTUBE_VIDEO_DETAILS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedCategory = useSelector((store) => store.category.selectedCategory);

  const getVideos = useCallback(async () => {
    try {
      setLoading(true);
      
      if (selectedCategory === 'All') {
        // Fetch popular videos for "All" category
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items || []);
      } else {
        // Fetch videos based on category search (similar to YouTube's approach)
        const searchData = await fetch(YOUTUBE_SEARCH_VIDEOS_API(selectedCategory, 50));
        const searchJson = await searchData.json();
        
        if (searchJson.items && searchJson.items.length > 0) {
          // Get video IDs from search results
          const videoIds = searchJson.items.map(item => item.id.videoId);
          
          // Fetch detailed video information including statistics
          const detailsData = await fetch(YOUTUBE_VIDEO_DETAILS_API(videoIds));
          const detailsJson = await detailsData.json();
          
          setVideos(detailsJson.items || []);
        } else {
          setVideos([]);
        }
      }
    } catch (error) {
      console.error('Error fetching videos:', error);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]);

  useEffect(() => {
    getVideos();
  }, [getVideos]);

  if (loading) {
    return (
      <div className='px-4 md:px-8 py-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {[...Array(12)].map((_, i) => (
            <div key={i} className='animate-pulse'>
              <div className='bg-gray-200 rounded-xl aspect-video mb-3'></div>
              <div className='flex gap-3'>
                <div className='w-9 h-9 rounded-full bg-gray-200'></div>
                <div className='flex-1 space-y-2'>
                  <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                  <div className='h-3 bg-gray-200 rounded w-1/2'></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='px-4 md:px-8 pt-4 pb-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {videos.map(video => (
          <Link key={video.id} to={'/watch?v=' + video.id} className='block'>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
      
      {videos.length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>No videos found</p>
        </div>
      )}
    </div>
  );
};

export default VideoContainer