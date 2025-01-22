import { useContext } from "react";
import "./sentMusicCard.css";
import { MusicSearchContext } from "../../contexts/AppContexts";

function SentMusicCard({ position }) {
  const { musicSelData } = useContext(MusicSearchContext);
  console.log("Card area:", musicSelData);
  return (
    <div className={`SentMusicCard SentMusicCard__position-${position}`}>
      <div className="SentMusicCard__song-icon">
        {" "}
        <img
          className="SentMusicCard__album-img"
          src={musicSelData && musicSelData.image}
          alt="song image"
        />
      </div>
      <div className="SentMusicCard__text-container">
        <div className="SentMusicCard__song-name">
          {musicSelData && musicSelData.songName}
        </div>
        <div className="SentMusicCard__artist-name">
          {musicSelData &&
            musicSelData.artistName.map((artist) =>
              musicSelData.artistName.length > 1 ? `${artist}, ` : artist,
            )}
        </div>
        <div className="SentMusicCard__spotify-logo"></div>
      </div>
      <div className="SentMusicCard__play-icon"></div>
    </div>
  );
}

export default SentMusicCard;
