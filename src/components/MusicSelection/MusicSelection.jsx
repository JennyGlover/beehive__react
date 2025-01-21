import MusicCard from "../MusicCard/MusicCard";
import "./MusicSelection.css";

function MusicSelection() {
  return (
    <div className="MusicSelection">
      <MusicCard />
      <div className="MusicSelection__close-btn"></div>
    </div>
  );
}

export default MusicSelection;
