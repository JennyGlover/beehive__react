import { useContext } from "react";
import "./MusicCard.css";
import { MusicSearchContext } from "../../contexts/AppContexts";

function MusicCard({ position }) {
  const { musicSelData } = useContext(MusicSearchContext);
  return (
    <div className={`MusicCard MusicCard__position-${position}`}>
      <div className="MusicCard__song-icon">
        {" "}
        <img
          className="MusicCard__album-img"
          src={musicSelData && musicSelData.image}
          alt="song image"
        />
      </div>
      <div className="MusicCard__text-container">
        <div className="MusicCard__song-name">
          {musicSelData && musicSelData.songName}
        </div>
        <div className="MusicCard__artist-name">
          {musicSelData &&
            musicSelData.artistName.map((artist) =>
              musicSelData.artistName.length > 1 ? `${artist}, ` : artist,
            )}
        </div>
        <div className="MusicCard__spotify-logo"></div>
      </div>
      <div className="MusicCard__play-icon"></div>
    </div>
  );
}

export default MusicCard;
