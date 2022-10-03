import { Link } from 'react-router-dom';

const DetailsHeader = ({ songData, artistId, artistData }) => {

  return (
  <div className="flex flex-col w-full relative mt-4 mb-4 bg-gradient-to-l from-transparent to-black sm:h-48 h-28 rounded-[10px]">
    <div className="w-full"/>
    <div className="absolute flex -items-center inset-0">
      <img 
      className="sm:w-48 w-28 sm:h-48 h-28 rounded-[10px] object-cover"
        src={artistId ? artistData?.artistData[artistId]?.attributes.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart}
        alt="cover-art"
      />
      <div className="ml-6 flex flex-col justify-center">
        <p className="text-[#FFF] text-xl sm:text-2xl font-bold">{artistId ? artistData?.artists[artistId]?.attributes?.name : songData?.title}</p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-base text-gray-100 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
        <p className="text-base text-gray-100 mt-2">
          {artistId ? artistData?.artistData[artistId]?.attributes?.genreNames[0] : songData?.genres?.primary}
        </p>
      </div>
    </div>
    <div className="h-24 sm:h-44 w-full" />
  </div>
  )
};

export default DetailsHeader;
