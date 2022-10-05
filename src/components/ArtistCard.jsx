import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (

    <div className="flex flex-col w-[250px] bg-[#FFF] p-2 bg-opacity-90 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <img src={track?.images?.coverart} alt="artist" className="w-full h54 rounded-lg" />
    </div>

  );
};

export default ArtistCard;
