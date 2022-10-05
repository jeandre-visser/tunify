import { HiChartBar } from 'react-icons/hi';
import { RiHome2Line } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go'

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Browse', to: '/', icon: RiHome2Line },
  { name: 'Your Country', to: '/around-you', icon: GoGlobe },
  { name: 'Top Charts', to: '/top-charts', icon: HiChartBar },
  { name: 'Top Artists', to: '/top-artists', icon: BsFillPeopleFill }
];
