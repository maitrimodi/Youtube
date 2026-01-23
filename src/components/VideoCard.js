import React, { useEffect, useState } from 'react';

const VideoCard = ({ info }) => {
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 p-2 w-72 shadow-lg">
      <div className="rounded-lg  p-0.5">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={info?.snippet?.thumbnails?.high?.url}
            alt="thumbnail"
            className="rounded-lg"
          />
          <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs text-white">
            9:30
          </span>
        </div>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={info?.snippet?.thumbnails?.medium?.url}
          alt="channel"
          className="h-9 w-9 rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="font-bold">{info?.snippet?.title}</h3>

          <p className="mt-1 text-xs text-gray-400 hover:text-gray-300">
            {info?.snippet?.channelTitle}
          </p>

          <p className="text-xs text-gray-400">
            {Number(info?.statistics?.viewCount).toLocaleString()} views • 1
            month ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
