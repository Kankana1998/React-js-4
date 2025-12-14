const GOOGLE_API_KEY = "AIzaSyBuOU7jDgsrZd1OOF0GFH0_93OwKdYBxzw";

export const OFFSET_LIVE_CHAT = 10;

export const YOUTUBE_VIDEOS_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=' + GOOGLE_API_KEY;

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=60&regionCode=IN&key=AIzaSyBuOU7jDgsrZd1OOF0GFH0_93OwKdYBxzw

export const YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

// YouTube Search API for category filtering (similar to YouTube's implementation)
export const YOUTUBE_SEARCH_VIDEOS_API = (query, maxResults = 25) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${encodeURIComponent(query)}&type=video&key=${GOOGLE_API_KEY}`;
};

// YouTube Video Details API to get statistics for searched videos
export const YOUTUBE_VIDEO_DETAILS_API = (videoIds) => {
  const ids = Array.isArray(videoIds) ? videoIds.join(',') : videoIds;
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${ids}&key=${GOOGLE_API_KEY}`;
};