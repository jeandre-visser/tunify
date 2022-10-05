import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_KFeTf70hmDo9PzuLIvwVHQbLNSQPK`)
    .then(response => setCountry(response?.data?.location?.country))
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  }, [country])

  if (isFetching && loading) return <Loader title="Loading popular songs in your country"/>;
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-[#FFF] text-3xl text-left mt-8 mb-12">Popular Songs Near You</h2>
      <div className="flex flex-wrap justify-center sm:justify-start gap-8">
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
export default AroundYou;
