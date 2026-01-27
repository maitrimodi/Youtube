import React, { useEffect, useState } from 'react';
import VideoCard, { AdVideoCard } from './VideoCard';
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCHKEYWORD_API,
  YOUTUBE_VIDEOS_API,
} from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const searchQuery = useSelector((store) => store.search.selectedQuery);

  useEffect(() => {
    if (searchQuery) {
      getSearchVideos(searchQuery);
    } else {
      getTrendingVideos();
    }
  }, [searchQuery]);

  const getTrendingVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  };

  const getSearchVideos = async (query) => {
    const data = await fetch(
      YOUTUBE_SEARCHKEYWORD_API + query + '&key=' + GOOGLE_API_KEY,
    );
    const json = await data.json();
    setVideos(json?.items);
  };

  const getVideoId = (video) => video.id?.videoId || video.id;

  return (
    <div className="flex flex-wrap">
      {!searchQuery && videos[20] && <AdVideoCard info={videos[20]} />}
      {videos?.map((video) => (
        <Link
          to={
            '/watch?v=' +
            getVideoId(video) +
            '&t=' +
            video?.snippet?.title +
            '&ct=' +
            video?.snippet?.channelTitle +
            '&cc=' +
            video?.statistics?.commentCount
          }
          key={getVideoId(video)}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
