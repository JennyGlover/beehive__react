import { useContext } from "react";
import MusicSearchCard from "../MusicSearchCard/MusicSearchCard";
import { MusicSearchContext } from "../../contexts/AppContexts";
import "./MusicSearch.css";

function MusicSearch() {
  const { isSearchVisible, handleSearchClose } = useContext(MusicSearchContext);
  //closing Music search --- make this global func later

  return (
    <div
      className={isSearchVisible ? "MusicSearch" : "MusicSearch__type_disabled"}
    >
      <div className="MusicSearch__spotify-icon"></div>
      <div className="MusicSearch__Header">
        <div className="MusicSearch__profile-container">
          <div className="MusicSearch__user-icon"></div>
          <p className="MusicSearch__heading">Search</p>
        </div>
        <div
          className="MusicSearch__close-btn"
          onClick={() => {
            console.log("clicked");
            handleSearchClose();
          }}
        ></div>
      </div>
      <span className="MusicSearch__search-container">
        <input
          type="text"
          className="MusicSearch__search"
          placeholder="Which song would you like to share?"
        />
        <div className="MusicSearch__search-icon"></div>
      </span>
      <div className="MusicSearch__results-container">
        <div className="MusicSearch__results">
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
        </div>
      </div>
    </div>
  );
}

export default MusicSearch;
