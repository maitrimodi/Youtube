import { IoMenu } from 'react-icons/io5';
import 'react-image-crop/dist/ReactCrop.css';
import { IoSearch } from 'react-icons/io5';
import { GrMicrophone } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import {
  cacheResults,
  clearSelectedQuery,
  setSelectedQuery,
} from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchCache = useSelector((store) => store.search.cache);
  const dispatch = useDispatch();

  /**
   * {
   * "iphone" : ["iphone", "iphone 11"];
   * }
   */

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [suggestions]);

  const getSearchSuggestions = async () => {
    console.log('API CALL- ', searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log('json', json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (query) => {
    if (!query) return;
    dispatch(setSelectedQuery(query));
    setSearchQuery(query);
    setShowSuggestions(false);
  };

  return (
    <div className="grid grid-flow-col pt-2 shadow-lg">
      <div className="flex col-span-1 ml-4">
        <IoMenu
          className="size-8 mt-1 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/" onClick={() => dispatch(clearSelectedQuery())}>
          <img
            className="h-20 w-15 -mt-5 -ml-3"
            src="https://static.vecteezy.com/system/resources/thumbnails/018/930/572/small/youtube-logo-youtube-icon-transparent-free-png.png"
            alt="youtube-logo"
          />
        </a>
        <h4 className="font-bold text-xl -ml-7 mt-1.5">Premium</h4>
      </div>
      <div className="relative mt-1 col-span-10 justify-center ml-56">
        <div className="flex">
          <input
            className="border border-gray-700 rounded-l-full w-[600px] h-10 p-1 pl-5 justify-center align-center"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveIndex(-1);
              setShowSuggestions(true);
            }}
            type="text"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onKeyDown={(e) => {
              if (!showSuggestions || showSuggestions.length === 0) return;

              switch (e.key) {
                case 'ArrowDown':
                  e.preventDefault();
                  setActiveIndex((prev) =>
                    prev < suggestions.length - 1 ? prev + 1 : 0,
                  );
                  break;

                case 'ArrowUp':
                  e.preventDefault();
                  setActiveIndex((prev) =>
                    prev > 0 ? prev - 1 : suggestions.length - 1,
                  );
                  break;

                case 'Enter':
                  e.preventDefault();
                  if (activeIndex >= 0) {
                    handleSearch(suggestions[activeIndex]);
                  } else {
                    handleSearch(searchQuery);
                  }
                  break;

                case 'Escape':
                  setShowSuggestions(false);
                  break;

                default:
                  break;
              }
            }}
          />
          <IoSearch
            onClick={() => handleSearch(searchQuery)}
            className="size-10 -mb-5 border border-gray-700 rounded-r-full p-2 justify-center align-center bg-gray-700 text-white"
          />
          <GrMicrophone className="size-9  bg-gray-700 rounded-full p-2 text-white ml-2 mt-0.5" />
        </div>
        {showSuggestions && (
          <div className=" absolute bg-white py-2 px-5 w-[38rem] z-50 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  className={`flex py-2 shadow-sm rounded-lg cursor-pointer ${
                    index === activeIndex ? 'bg-gray-200' : 'hover:bg-gray-100'
                  }`}
                  key={s}
                  onMouseDown={() => {
                    handleSearch(s);
                  }}
                >
                  <IoSearch className="size-5 mr-1 mt-1" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10 w-10 mt-1"
          alt="user-icon"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
