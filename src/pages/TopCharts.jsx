import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

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
export default TopCharts;
