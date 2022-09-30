import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopChartCard = ({ song, index }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#50476d] py-2 p-4 rounded-lg cursor-pointer mb-2">
    {song.title}
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  const topCharts = data?.slice(0, 5);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div ref={divRef} className="flex flex-col xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full" >
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[#FFF] font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts" >
            <p className="text-gray text-base">Show more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topCharts?.map((song, index) => (
            <TopChartCard
              key={song.key}
              song={song}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full mt-10">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[#FFF] font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists" >
            <p className="text-gray text-base">Show more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topCharts?.map((song, index) => (
            <TopChartCard
              key={song.key}
              song={song}
              index={index}
            />
          ))}
        </div>

        <Swiper 
          className="mt-5"
          slidesPerView="auto"
          spaceBetween={16}
          freeMode
          centeredSlidesBounds
          centeredSlides
          modules={[FreeMode]}
          >
            {topCharts?.map((song, index) => (
              <SwiperSlide
                key={song?.key}
                className="shadow-lg rounded-full"
                style={{ width: '25%', height: 'auto'}}
              >
                <Link to={`/artists/${song?.artists[0].adamid}`}></Link>
              </SwiperSlide>
          ))}
          </Swiper>
      </div>
    </div>
  );

};

export default TopPlay;
