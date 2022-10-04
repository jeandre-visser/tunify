import { useParams } from "react-router-dom";
import { DetailsHeader, Error, RelatedSongs, Loader } from '../components';
import { useSelector } from "react-redux";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";
 
const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);


  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
     <DetailsHeader 
        artistData={artistData} 
        artistId={artistId}
      />

      <RelatedSongs
        artistId={artistId}
        data={Object.values(artistData?.songs)}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );

};

export default ArtistDetails;
