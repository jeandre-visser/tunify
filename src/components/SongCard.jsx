import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, index }) => {

  const activeSong = 'Test'; 
  return (
  <div className="flex flex-col w-[240px] p-4 bg-[#FFF]/20 backdrop-blur-sm animate-slideup rounded-md cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black/40 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black/70' : 'hidden'}`}>
        <PlayPause />
      </div>
      <img src={song.images.coverart} alt="song_image" />
    </div>
    <div className="mt-4 flex flex-col">
      <p>
        <Link>{song.title}</Link>
      </p>
      <p>
        <Link>{song.subtitle}</Link>
      </p>
    </div>
  </div>
  )
};

export default SongCard;
