import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  if (isFetching) return <Loader title={`Searching "${searchTerm}"`}/>;
  if (error) return <Error />;

  const songs = data?.tracks?.hits?.map((song) => song.track);
  console.log(searchTerm)

  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-[#FFF] text-3xl text-left mt-8 mb-12">Results for <span className="font-bold text-[#fff]">"{searchTerm}"</span></h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-6">
        {songs?.map((song, index) => (
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
