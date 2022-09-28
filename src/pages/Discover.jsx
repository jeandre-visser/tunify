import { genres } from '../assets/constants';
import { Loader, SongCard, Error } from '../components';

const Discover = () => {
  const genreName = 'Pop';

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-4xl text-white text-left">Browse {genreName}</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-[#FFF] text-black-400 p-3 text-sm mt-5 rounded-lg sm:mt-0"
        >
          {genres.map((genre) => <option>{genre.title}</option>)}
        </select>
      </div>
    </div>
  );
};
export default Discover;
