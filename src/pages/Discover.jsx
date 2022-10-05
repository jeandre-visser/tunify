import { genres } from '../assets/constants';
import { Loader, SongCard, Error } from '../components';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const genreName = genres.find(({ value }) => value === genreListId)?.title;
  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');
  
  if(isFetching) return <Loader title="Just wait a beat" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-4xl text-white text-left">Browse {genreName || 'Pop'}</h2>
        <select
          onChange={(event) => dispatch(selectGenreListId(event.target.value))}
          value={genreListId || 'pop'}
          className="bg-transparent outline outline-2 outline-white text-[#fff] p-3 text-md rounded-lg sm:mt-0 mt-5 focus:bg-[#fff] focus:text-black w-[130px]"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-6">
        {data?.map((song, index) => (
         <SongCard
          key={song.key}
          song={song}
          index={index}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
         />
        ))}
      </div>
    </div>
  );
};
export default Discover;
