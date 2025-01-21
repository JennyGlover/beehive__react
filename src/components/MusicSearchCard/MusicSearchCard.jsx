import { useContext } from "react";
import { MusicSearchContext } from "../../contexts/AppContexts";

import "./MusicSearchCard.css";

function MusicSearchCard({ position, songName, artistName, image }) {
  const { handleMusicSelOpen } = useContext(MusicSearchContext);
  return (
    <div
      className={`MusicSearchCard MusicSearchCard__position-${position}`}
      onClick={() => handleMusicSelOpen()}
    >
      <div className="MusicSearchCard__song-icon">
        <img
          className="MusicSearchCard__album-img"
          src={image}
          alt="song image"
        />
      </div>
      <div className="MusicSearchCard__text-container">
        <div className="MusicSearchCard__song-name">{songName}</div>
        <div className="MusicSearchCard__artist-name">{artistName}</div>
      </div>
    </div>
  );
}

export default MusicSearchCard;
