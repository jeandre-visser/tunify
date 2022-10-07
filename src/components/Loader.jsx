import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full h-full flex flex-col justify-center items-center" >
    <img src={loader} alt="loader" className="ld ld-beat w-20 h-20 object-contain mt-20 mb-8" />
    <h2 className="font-bold text-3xl text-[#FFF] mt-2" >{title || "Loading"}</h2>
  </div> 
);

export default Loader;
