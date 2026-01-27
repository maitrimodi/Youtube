import React from 'react';
import { IoHome } from 'react-icons/io5';
import { SiYoutubeshorts } from 'react-icons/si';
import { MdSubscriptions } from 'react-icons/md';
import { SiYoutubemusic } from 'react-icons/si';
import { FaHistory } from 'react-icons/fa';
import { MdPlaylistPlay } from 'react-icons/md';
import { BiSolidVideos } from 'react-icons/bi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { RiShoppingBag4Line } from 'react-icons/ri';
import { IoMusicalNoteOutline } from 'react-icons/io5';
import { MdLiveTv } from 'react-icons/md';
import { CgMediaLive } from 'react-icons/cg';
import { SiYoutubegaming } from 'react-icons/si';
import { BsNewspaper } from 'react-icons/bs';
import { IoTrophyOutline } from 'react-icons/io5';
import { FaRegLightbulb } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';
import { PiCoatHangerBold } from 'react-icons/pi';
import { PiApplePodcastsLogoBold } from 'react-icons/pi';
import { TbGoGame } from 'react-icons/tb';
import { IoMdSettings } from 'react-icons/io';
import { FaRegFlag } from 'react-icons/fa6';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { MdOutlineFeedback } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearSelectedQuery } from '../utils/searchSlice';
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  // Early return pattern

  if (!isMenuOpen)
    return (
      <div className="shadow-lg mr-5 h-screen sticky top-0 ">
        <ul className="justify-items-center">
          <li className="  hover:bg-gray-200 rounded-lg p-3 px-4">
            <Link to="/" onClick={() => dispatch(clearSelectedQuery())}>
              <IoHome className="size-6 mr-2" />
              <p className="text-xs -ml-1">Home</p>
            </Link>
          </li>
          <li className="  hover:bg-gray-200 rounded-lg p-3 px-4">
            <SiYoutubeshorts className="size-6 mr-2" />
            <p className="text-xs -ml-1">Shorts</p>
          </li>
          <li className="  hover:bg-gray-200 rounded-lg justify-items-center p-3 px-4">
            <MdSubscriptions className="size-6 mr-2" />
            <p className="text-xs -ml-1">Subscriptions</p>
          </li>
          <li className="  hover:bg-gray-200 rounded-lg justify-items-center p-3 ">
            <SiYoutubemusic className="size-6 mr-2" />
            <p className="text-xs -ml-1">YouTube Music</p>
          </li>
          <li className="  hover:bg-gray-200 rounded-lg justify-items-center p-3 px-9">
            <img
              className="h-6 w-6 mr-2"
              alt="user-icon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAZlBMVEX///8AAADg4OD4+Pj8/Pzj4+Px8fH19fWoqKg7OztsbGy3t7e7u7ugoKBVVVWysrLR0dGHh4eQkJAUFBTZ2dnLy8tCQkIlJSV5eXkZGRnq6upjY2PBwcE0NDRdXV0PDw8tLS1NTU0uzbbuAAAGFklEQVR4nO1c2bKiMBA1yC6rsoni1f//yRlujXMFsvRJAmPVeN5JHZJO753d7oMPPvhgS7i+VxW/UXm++6+5fMN36rC8RSf2glN0K8Pa8f8ZKbcKu6xlArRZF1bb757r5fGXiNMPvuLc25JckMTCnVrsXJwE27DaFyWV1BNlsV+f1yFGaY2ID+uy8sNBh9aIIVzxmuaZLq0RWb4Oq30SmdAaESUryJqjJVtzxI5lWvvUBq0RqdVNcy62eDF2sbdpbn62x4uxc27JGOxhhapCaeU4HSMdwUdm4TiLu31ejN0LU175GrRGGGrbcC1ejIUmvI7r8WLsqM/LmlblI33L/RqhuWeryf0PtG7AYX1ejGn4j9UWvBirUF5Osw2xBrUBj214MfbAeFm322KUCK9NBP8J4AL0J/Vy9nDqqbxcK+49HTHVcVzRcvNBtOf91rwYox1mhy/cRt2xLqqqqI9dRM63/KCj8Kphyb+EzouUuE4Ix1SnWs3LBVc9d9UitNhXHRhXXdTyX2MrikJrNHBXbpl7Q5Y7JcI/dRNIJG6qLUuQ1eRRGBb3JYoNQyQsU2S8fISZQsoQLyxWxtN7RNDknhmgwzJCzjcA9kyqyzy6chw8Na/fC9JTo61sQcBKElTiCED7SCzmnr7zJCMygi4cmVhm6aI/kF11h36YYvGnO9RAEE0P54VOtktPSwM5e5+8aCRSZXS/gixhI8hSJvQx6Jt+RYhdycsKBISupxty+DCiJ8fOAlvik+8PwXt6Ad3+DnzRpSsLMLFFFxG+wqCrfTBHQw+f+cqf7gqAKRr6UcTc7+n5HUj2kXiw4X3u0z0LsMgdkBduedJf0QOb1YideUJC14PrHSVXcwO54NWEn5stBpL6YLIZ+GWehgSy+mB+3nBlILu5lkniumQuECBFpEDkCQ/oPuiWvwzFgJBNQhK6HP8iQGLwG0IMyYZclioSIsaAsoGDrGtMDEjOQyUDY2ItWcdWUOaTQwwSfpGDwgG47FL4EXUxgpgCB1PzHHWBlo9oh4kdJF920ULziaBlPTQDzjNJcGVelVAEU4rf4BlxvASuyqwA+ZQneH4L4Cg+EUkbYQqNDj2eowi41j84Co/T12mO4LrWQDDygocgEVI/dFbjBiNA+DZBkyxCgD7RXYv7k9rl06a8vvypfy21OxD49sSoftrEaZgkYRobtUXwzclGLSAy8K0JPQ21FgRpKNC/WAGiIhAmZF9D00QS3XeOmmYgDCO8QOSxFIDJbdPa8XuvSAXC3qSF1/tOnQLa8SQyJPR0+hD+9TTdolv0fd674q9fFdA77YXpdLJLlk5VapW/Tmq0cT69XD3VbxEHEjSFEXMcMbcvDmGahoei5/y2R7tWYteTUuRqtdr3coKoSYpchHuZgbmxJ3r1P8uiCGUh9ag9yhOo3CBpIVVR9/ky6vYN5UpNXp+Siz9UQlpC7iPLoy5Z69gd7sCco5J0uquayCQNIca8pAeiaAgRt9BQGpbUEJZElS00wrK/6o+IEJ2I+rcFGVOj+/gKvqqkZHW5uw01q8rBM8g0OeHoMkq7DBW8thpajX1ZYTlbHQxzlt4l0c4txMDymN8iS0IV4LmWVV9lDHOVRG7Qnbc0W9CsU0z1LL2leVYzIKdb6ZgcCVTNmNxp65OkEyEDNdHj9VtLWv+JifYHBw1moxlWmU14waMZMwG1eJpTZaFxsaYLaE9dzTGN5bR+eKpnOytj3v7U3mm6BtPw4WHBLjmTO6U/ljfd9rOxoM1mgQ3EYxZylUbH6c8cHoMxxoU9HwzipOssuWLoeuazYPAC1el/4M0c4y9juVgMF3ca1Ly582k+XMxpy7+jouaX85+zMY7NG2A/lYDCrspFEGFngJ078t9mB1IYEByW79RYG/nfCR5J6HL58zdulfNyNBYfSdiJnpW4Z2Ut2LigLjNupsLusxI7yTzPvUvzunB63w8C3++dos7TZb74D6w/xLFTPF3SDtHjG9Egyf2t8nTJiPd87GXEuz6PM+I9HxQa8a5PMI14z0ervuF6Oal76rLtM19/yL3jw2hPvOVTcq94u8f3Pvjgg/8HvwCH71r/ZoDF/AAAAABJRU5ErkJggg=="
            />
            <p className="text-xs -ml-2">You</p>
          </li>
          <li className="  hover:bg-gray-200 rounded-lg justify-items-center p-3 px-6">
            <PiDownloadSimpleBold className="size-6 mr-2" />
            <p className="text-xs -ml-1">Downloads</p>
          </li>
        </ul>
      </div>
    );

  return (
    <div className="shadow-lg mr-5 ">
      <ul>
        <Link to="/">
          <li
            className="flex m-2 hover:bg-gray-200 rounded-lg p-2"
            onClick={() => dispatch(clearSelectedQuery())}
          >
            <IoHome className="size-6 mr-2" />
            <p className="text-sm mt-1">Home</p>
          </li>
        </Link>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <SiYoutubeshorts className="size-6 mr-2" />
          <p className="text-sm">Shorts</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <MdSubscriptions className="size-6 mr-2" />
          <p className="text-sm">Subscriptions</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <SiYoutubemusic className="size-6 mr-2" />
          <p className="text-sm">YouTube Music</p>
        </li>
      </ul>
      <div className="w-50 border border-gray-500"></div>
      <div className="flex mx-2 hover:bg-gray-200 rounded-lg px-2 py-1">
        <h1 className="text-lg">You</h1>
        <MdKeyboardArrowRight className="size-6 mt-1" />
      </div>

      <ul>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <FaHistory className="size-6 mr-2" />
          <p className="text-sm">History</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <MdPlaylistPlay className="size-6 mr-2" />
          <p className="text-sm">Playlist</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <BiSolidVideos className="size-6 mr-2" />
          <p className="text-sm">Your Videos</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <MdOutlineWatchLater className="size-6 mr-2" />
          <p className="text-sm">Watch Later</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <AiFillLike className="size-6 mr-2" />
          <p className="text-sm">Liked Videos</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <PiDownloadSimpleBold className="size-6 mr-2" />
          <p className="text-sm">Downloads</p>
        </li>
      </ul>
      <div className="w-50 border border-gray-500 my-5"></div>
      <div className="flex m-2 my-4  hover:bg-gray-200 rounded-lg p-2">
        <h1 className="text-lg">Subscriptions</h1>
        <MdKeyboardArrowRight className="size-6 mt-1" />
      </div>
      <ul></ul>
      <div className="w-50 border border-gray-500 my-5"></div>
      <h1 className="text-lg m-2 my-4 ml-4">Explore</h1>
      <ul>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <RiShoppingBag4Line className="size-6 mr-2" />
          <p className="text-sm">Shopping</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <IoMusicalNoteOutline className="size-6 mr-2" />
          <p className="text-sm">Music</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <MdLiveTv className="size-6 mr-2" />
          <p className="text-sm">Movies & TV</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <CgMediaLive className="size-6 mr-2" />
          <p className="text-sm">Live</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <SiYoutubegaming className="size-6 mr-2" />
          <p className="text-sm">Gaming</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <BsNewspaper className="size-6 mr-2" />
          <p className="text-sm">News</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <IoTrophyOutline className="size-6 mr-2" />
          <p className="text-sm">Sports</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <FaRegLightbulb className="size-6 mr-2" />
          <p className="text-sm">Learning</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <GiGraduateCap className="size-6 mr-2" />
          <p className="text-sm">Courses</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <PiCoatHangerBold className="size-6 mr-2" />
          <p className="text-sm">Fashion & Beauty</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <PiApplePodcastsLogoBold className="size-6 mr-2" />
          <p className="text-sm">Podcasts</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <TbGoGame className="size-6 mr-2" />
          <p className="text-sm">Playables</p>
        </li>
      </ul>
      <div className="w-50 border border-gray-500 my-5"></div>
      <div className="flex m-2 my-4">
        <h1 className="text-lg">More from YouTube</h1>
      </div>
      <ul>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <img
            className="h-10 -ml-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2mdSlhAe7UH-4FQMDDkDvVbeD4CmQeLyAnw&s"
            alt="YouTube Studio"
          />
          <p className="mt-2 -ml-5">YouTube Studio</p>
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <img
            className="h-10 -ml-6"
            alt="YouTube TV"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwn8Qg-SiRCVsB208j_SnPHMAQkOIH7TEAg&s"
          />
          <p className="mt-2 -ml-5">YouTube TV</p>
        </li>
        <li className="flex m-2  hover:bg-gray-200 rounded-lg p-2">
          <img
            className="h-7 "
            alt="YouTube Music"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6_dc_2V2gmiUrDRtzfhGfECDypJAO6HLuA&s"
          />
          <p className="mt-1 -ml-14">YouTube Music</p>
        </li>
        <li className="flex m-2 mt-3 hover:bg-gray-200 rounded-lg p-2">
          <img
            className="h-5"
            alt="YouTube Kids"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--wlrQxyKnXpFXkeugM4LnR3waltWFcaDQg&s"
          />
          <p className="ml-2">YouTube Kids</p>
        </li>
      </ul>
      <div className="w-50 border border-gray-500 my-5"></div>
      <ul>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <IoMdSettings className="size-6 mr-2" /> Settings
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <FaRegFlag className="size-6 mr-2" /> Report history
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <IoMdHelpCircleOutline className="size-6 mr-2" /> Help
        </li>
        <li className="flex m-2 hover:bg-gray-200 rounded-lg p-2">
          <MdOutlineFeedback className="size-6 mr-2" /> Send feedback
        </li>
      </ul>
      <div className="w-50 border border-gray-500 my-5"></div>
      <div className="text-xs flex ml-3 text-gray-700">
        <p className="m-1 cursor-pointer">About</p>
        <p className="m-1 cursor-pointer">Press</p>
        <p className="m-1 cursor-pointer">Copyright</p>
      </div>
      <div className="text-xs flex ml-3  text-gray-700">
        <p className="m-1 cursor-pointer">Contact us</p>
        <p className="m-1 cursor-pointer">Creators</p>
      </div>
      <div className="text-xs flex ml-3 text-gray-700">
        <p className="m-1 cursor-pointer">Advertise</p>
        <p className="m-1 cursor-pointer">Developers</p>
      </div>
      <div className="text-xs flex ml-3 text-gray-700">
        <p className="m-1 cursor-pointer">Terms</p>
        <p className="m-1 cursor-pointer">Privacy</p>
      </div>
      <p className="m-1 text-xs flex ml-4 cursor-pointer text-gray-700">
        Policy & Safety
      </p>
      <p className="m-1 text-xs flex ml-4 cursor-pointer text-gray-700">
        How YouTube works
      </p>
      <p className="m-1 text-xs flex ml-4 cursor-pointer text-gray-700">
        Test new features
      </p>

      <p className="my-5 text-xs ml-4 text-gray-500">© 2026 Google LLC</p>
    </div>
  );
};

export default Sidebar;
