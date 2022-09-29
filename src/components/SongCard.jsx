import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, index }) => {

  const activeSong = 'Test'; 
  return (
  <div className="flex flex-col w-[240px] p-5 bg-[#FFF]/20 backdrop-blur-sm animate-slideup rounded-md cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black/40 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black/70' : 'hidden'}`}>

      </div>
    </div>
  </div>
  )
};

export default SongCard;
