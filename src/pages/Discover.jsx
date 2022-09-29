import { genres } from '../assets/constants';
import { Loader, SongCard, Error } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const genreName = 'Pop';
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data)
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-4xl text-white text-left">Browse {genreName}</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-[#FFF] text-black-400 p-3 text-sm rounded-lg sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, index) => (
         <SongCard
          key={song.key}
          song={song}
          i={index}
         />
        ))}
      </div>
    </div>
  );
};
export default Discover;
