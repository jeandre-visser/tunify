import { useParams } from "react-router-dom";
import { DetailsHeader, Error, RelatedSongs, Loader } from '../components';
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="flex flex-col">
      <DetailsHeader 
        artistId={artistId} 
        songData={songData} 
      />

      <div className="mb-8">
        <h3 className="text-[#FFF] text-2xl font-bold">Lyrics</h3>
      </div>
    </div>
  );

}
export default SongDetails;
