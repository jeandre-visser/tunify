import { Link } from 'react-router-dom';

const DetailsHeader = ({ songData, artistId, artistData }) => {

  return (
  <div className="flex flex-col w-full relative">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28"/>
    <div className="absolute flex -items-center inset-0">
      <img 
      className="sm:w-48 w-28 sm:h-48 h-28 rounded-[10px] object-cover border shadow-xl shadow-black"
        src={artistId ? artistData?.artistData[artistId]?.attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
        alt="cover-art"
      />
      <div className="ml-4">
        <p className="text-[#FFF] text-xl sm:text-2xl font-bold">{artistId ? artistData?.artists[artistId]?.attributes.name : songData?.title}</p>
      </div>
    </div>
  </div>
  )
};

export default DetailsHeader;
