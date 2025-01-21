import "./MusicCard.css";

function MusicCard({ position }) {
  return (
    <div className={`MusicCard MusicCard__position-${position}`}>
      <div className="MusicCard__song-icon"></div>
      <div className="MusicCard__text-container">
        <div className="MusicCard__song-name">Expresso</div>
        <div className="MusicCard__artist-name">Sabrina Carpenter</div>
        <div className="MusicCard__spotify-logo"></div>
      </div>
      <div className="MusicCard__play-icon"></div>
    </div>
  );
}

export default MusicCard;
