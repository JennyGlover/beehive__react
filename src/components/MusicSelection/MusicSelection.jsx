import { useContext } from "react";
import MusicCard from "../MusicCard/MusicCard";
import { MusicSearchContext } from "../../contexts/AppContexts";

import "./MusicSelection.css";

function MusicSelection() {
  const { isSearchVisible, isMusicSelVisible, handleMusicSelClose } =
    useContext(MusicSearchContext);

  return (
    <div
      className={
        isMusicSelVisible && isSearchVisible
          ? "MusicSelection"
          : "MusicSelection__display_none"
      }
    >
      <MusicCard />
      <div
        className="MusicSelection__close-btn"
        onClick={() => {
          handleMusicSelClose();
        }}
      ></div>
    </div>
  );
}

export default MusicSelection;
