import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, index, isPlaying, activeSong, data }) => {

  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  }

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }


  return (
  <div className="flex flex-col w-[240px] p-4 bg-[#FFF]/20 backdrop-blur-sm animate-slideup rounded-md cursor-pointer">
    <div className="relative w-full h-54 group">
      <div className={`absolute inset-0 justify-center items-center bg-black/40 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black/70' : 'hidden'}`}>
        <PlayPause 
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlay={handlePlayClick}
          handlePause={handlePauseClick}
        />
      </div>
      <img src={song.images.coverart} alt="song_image" />
    </div>
    <div className="flex flex-col mt-2">
      <p className="font-semibold text-lg text-[#FFF] truncate">
        <Link to={'/songs/${song?.key}'}>{song.title}</Link>
      </p>
      <p className="text-md truncate text-gray-100 mt-1" >
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'} >{song.subtitle}</Link>
      </p>
    </div>
  </div>
  )
};

export default SongCard;
