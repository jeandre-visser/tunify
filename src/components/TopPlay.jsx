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

const TopChartCard = ({ song, index, activeSong, isPlaying, handlePauseClick, handlePlayClick }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#351f7c] py-2 p-4 rounded-lg cursor-pointer mb-1">
    <h2 className="font-bold mr-4 text-xl text-[#FFF]" >{index + 1}</h2>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-[10px]" src={song?.images?.coverart} alt={song?.title} />
      <div className="flex-1 flex flex-col justify-center mx-4">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-[#FFF]">
            {song?.title}
          </p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-base font-bold text-gray-200 mt-2 ">{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause 
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
      isPlaying={isPlaying}
    />
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

  const handlePlayClick = (song, index) => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  return (
    <div ref={divRef} className="flex flex-col xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full" >
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center mt-8">
          <h2 className="text-[#FFF] font-bold text-2xl">Top Songs</h2>
          <Link to="/top-charts" >
            <p className="text-gray-200 text-base">Show more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topCharts?.map((song, index) => (
            <TopChartCard
              key={song.key}
              song={song}
              index={index}
              activeSong={activeSong}
              isPlaying={isPlaying}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, index)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full mt-10">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[#FFF] font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists" >
            <p className="text-gray-200 text-base">Show more</p>
          </Link>
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
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img src={song?.images.background} alt="artistName" className="rounded-[40px] w-full object-cover" />
                </Link>
              </SwiperSlide>
          ))}
          </Swiper>
      </div>
    </div>
  );

};

export default TopPlay;
