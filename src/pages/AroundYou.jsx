import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Loader, Error, SongCard } from '../components';

const AroundYou = () => {

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeSong, isPlaying] = useSelector(state => state.player);

  return (
    <div>

    </div>
 );
}
export default AroundYou;
