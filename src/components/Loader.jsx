import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col" >
    <img src={loader} alt="loader" className="ld ld-beat w-20 h-20 object-contai mt-10" />
    <h2 className="font-bold text-3xl text-[#FFF] mt-2" >{title || "Loading"}</h2>
  </div> 
);

export default Loader;
