import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { setCategory } from '../utils/categorySlice'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const LivePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set category to "Live" when page loads
    dispatch(setCategory('Live'));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Live - MyYouTube</title>
        <meta name="description" content="Watch live videos on MyYouTube" />
      </Helmet>
      <div className='w-full'>
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  );
};

export default LivePage;

