import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <>
      <Helmet>
        <title>Watch Video - MyYouTube</title>
        <meta name="description" content="Watch this video on MyYouTube. Join the conversation and share your thoughts." />
        <meta property="og:type" content="video.other" />
        <meta property="og:video:url" content={`https://www.youtube.com/embed/${videoId}`} />
        <meta property="og:video:secure_url" content={`https://www.youtube.com/embed/${videoId}`} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </Helmet>
      <div className="flex flex-col w-full px-4 md:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Video Player Section */}
          <div className="flex-1">
            <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-large">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Video Info Section */}
            <div className="mt-4 space-y-3">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 line-clamp-2">
                Video Title - Watch Now
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="font-semibold">1.2M views</span>
                <span>•</span>
                <span>2 days ago</span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    C
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Channel Name</p>
                    <p className="text-sm text-gray-600">1.5M subscribers</p>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors active:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Live Chat Section */}
          <div className="lg:w-96 flex-shrink-0">
            <LiveChat />
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <CommentsContainer />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
