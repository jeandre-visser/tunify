import SongBar from './SongBar';

const RelatedSongs = ({ isPlaying, data, artistId, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-[#FFF] underline underline-offset-4">Related Songs</h1>
    <div className="mt-6 flex flex-col w-full">
      {data?.map((song, index) => (
        <SongBar 
          song={song}
          index={index}
          key={`${song.key}-${artistId}`}
          artistId={artistId}
          activeSong={activeSong}
          isPlaying={isPlaying}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
