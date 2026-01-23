const GOOGLE_API_KEY = 'AIzaSyA18uqZFgye9JbTt5h7ZVwcMdRO3LnzTxI';

export const YOUTUBE_VIDEOS_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=CA&key=' +
  GOOGLE_API_KEY;
