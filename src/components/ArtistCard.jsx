import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (

    <div className="flex flex-col w-[200px] bg-[black] p-3 bg-opacity-40 backdrop-blur-sm animate-slideup rounded-md cursor-pointer">
      <img src={track?.images?.coverart} alt="artist" className="w-full h-54 rounded-lg" />
      <p className="mt-3 font-semibold text-lg text-[#fff] truncate">{track?.subtitle}</p>
    </div>

  );
};

export default ArtistCard;
