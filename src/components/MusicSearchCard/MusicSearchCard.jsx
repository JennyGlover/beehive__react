import "./MusicSearchCard.css";

function MusicSearchCard({ position }) {
  return (
    <div className={`MusicSearchCard MusicSearchCard__position-${position}`}>
      <div className="MusicSearchCard__song-icon"></div>
      <div className="MusicSearchCard__text-container">
        <div className="MusicSearchCard__song-name">Expresso</div>
        <div className="MusicSearchCard__artist-name">Sabrina Carpenter</div>
      </div>
    </div>
  );
}

export default MusicSearchCard;
