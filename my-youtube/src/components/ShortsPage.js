import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'
import { setCategory } from '../utils/categorySlice'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const ShortsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set category to "Shorts" when page loads
    dispatch(setCategory('Shorts'));
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Shorts - MyYouTube</title>
        <meta name="description" content="Watch YouTube Shorts on MyYouTube" />
      </Helmet>
      <div className='w-full'>
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  );
};

export default ShortsPage;

