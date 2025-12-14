import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { setCategory } from '../utils/categorySlice'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const VideosPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set category to "Videos" when page loads
    dispatch(setCategory('Videos'));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Videos - MyYouTube</title>
        <meta name="description" content="Watch videos on MyYouTube" />
      </Helmet>
      <div className='w-full'>
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  );
};

export default VideosPage;

