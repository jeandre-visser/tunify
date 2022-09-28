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
          className=""
        >
        </select>
      </div>
    </div>
  );
};
export default Discover;
