import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';

const AroundYou = () => {

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_KFeTf70hmDo9PzuLIvwVHQbLNSQPK`)
    .then(response => setCountry(response?.data?.location?.country))
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  }, [country])

  return (
    <div>

    </div>
 );
}
export default AroundYou;
