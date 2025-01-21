import MusicSearchCard from "../MusicSearchCard/MusicSearchCard";
import "./MusicSearch.css";

function MusicSearch() {
  return (
    <div className="MusicSearch">
      <div className="MusicSearch__spotify-icon"></div>
      <div className="MusicSearch__Header">
        <div className="MusicSearch__profile-container">
          <div className="MusicSearch__user-icon"></div>
          <p className="MusicSearch__heading">Search</p>
        </div>
        <div className="MusicSearch__close-btn"></div>
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
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
          <MusicSearchCard />
        </div>
      </div>
    </div>
  );
}

export default MusicSearch;
