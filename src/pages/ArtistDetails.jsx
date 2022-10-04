import { useParams } from "react-router-dom";
import { DetailsHeader, Error, RelatedSongs, Loader } from '../components';
import { useSelector } from "react-redux";
import { useGetArtistDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";
 
const ArtistDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingArtistDetails } = useGetArtistDetailsQuery({ songid });
  const { data, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

  if (isFetchingRelatedSongs || isFetchingArtistDetails) return <Loader title="Loading song details" />;

  if (error) return <Error />;

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };


  return (
    <div className="flex flex-col">
     <DetailsHeader 
        songData={songData} 
      />

      <div className="mb-8 mt-6">
        <h3 className="text-[#FFF] text-4xl font-bold underline underline-offset-4">Lyrics</h3>
        <div className="mt-6" >
          {songData?.sections[1].type === 'LYRICS' ? songData?.sections[1].text.map((lyric, index) => (
            <p className="text-[#FFF] text-base my-1">{lyric}</p>
          )) : <p className="text-[#FFF] text-base my-1">No lyrics were found</p>
          }
        </div>
      </div>
      <RelatedSongs 
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );

};

export default ArtistDetails;
