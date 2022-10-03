import { Link } from 'react-router-dom';

const DetailsHeader = ({ songData, artistId, artistData }) => (
  <div className="flex flex-col w-full relative">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"/>
    <div className="absolute flex -items-center inset-0">
      <img 
        src={artistId ? artistData?.artistData[artistId].attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
        alt="cover-art"
      />
    </div>
  </div>
);

export default DetailsHeader;
