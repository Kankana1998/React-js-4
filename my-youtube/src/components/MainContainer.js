import React from 'react'
import { Helmet } from 'react-helmet-async'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <>
      <Helmet>
        <title>MyYouTube - Watch, Discover, and Share Videos</title>
        <meta name="description" content="Discover and watch millions of videos. Browse trending content, explore channels, and enjoy a seamless video streaming experience." />
        <meta property="og:title" content="MyYouTube - Watch, Discover, and Share Videos" />
        <meta property="og:description" content="Discover and watch millions of videos. Browse trending content, explore channels, and enjoy a seamless video streaming experience." />
      </Helmet>
      <div className='w-full'>
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  )
}

export default MainContainer