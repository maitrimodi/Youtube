import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const list = [
    'All',
    'Music',
    'Trailers',
    'Mixes',
    'Podcasts',
    'AI',
    'Ideas',
    'Comedy Clubs',
    'Playlists',
    'Recently Uploaded',
    'New to you',
    'Stranger Things',
    'Unwatched',
    'Live',
    'News',
    'Sports',
  ];
  return (
    <div className="flex flex-nowrap overflow-x-auto space-x-1 overflow-y-hidden max-w-full scrollbar-hide my-2">
      {list.map((item) => {
        return <Button key={item} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
