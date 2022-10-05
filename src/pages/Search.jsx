import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { search } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(search);

  if (isFetching) return <Loader title="Loading Top Charts"/>;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[#FFF] text-3xl text-left mt-8 mb-12">Browse Top Charts</h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-6">
        {data?.map((song, index) => (
          <SongCard 
            key={song.key}
            data={data}
            index={index}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
 );
}
export default Search;
