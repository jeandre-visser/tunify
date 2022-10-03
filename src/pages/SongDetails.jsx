import { useParams } from "react-router-dom";
import { DetailsHeader, Error, RelatedSongs, Loader } from '../components';
import { useSelector, useDispatch } from "react-redux";

const SongDetails = () => {

  const { songid } = useParams();

  return <div>SongDetails</div>;

}
export default SongDetails;
