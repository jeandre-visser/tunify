import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, index }) => (
  <div className="flex flex-col w-[240px] p-5 bg-[#FFF]/20 backdrop-blur-sm animate-slideup rounded-md cursor-pointer">

  </div>
);

export default SongCard;
