import { useContext, useEffect } from "react";
import MusicSearchCard from "../MusicSearchCard/MusicSearchCard";
import { MusicSearchContext } from "../../contexts/AppContexts";
import useForm from "../../hooks/useForm";
import "./MusicSearch.css";

function MusicSearch() {
  const { isSearchVisible, handleSearchClose, handleSongSearch, songData } =
    useContext(MusicSearchContext);

  const { values, handleChange } = useForm({
    song: " ",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSongSearch(values.song);
    }
  };

  useEffect(() => {
    if (songData) {
      console.log(songData);
    }
  }, [songData]);

  return (
    <div
      className={isSearchVisible ? "MusicSearch" : "MusicSearch__display_none"}
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
            handleSearchClose();
          }}
        ></div>
      </div>
      <span className="MusicSearch__search-container">
        <input
          type="text"
          className="MusicSearch__search"
          placeholder="Which song would you like to share?"
          id="song-input"
          name="song"
          value={values.song}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className="MusicSearch__search-icon"></div>
      </span>
      <div className="MusicSearch__results-container">
        <div className="MusicSearch__results">
          {songData && songData.items && songData.items.length > 1
            ? songData.items
                .filter((value, index, self) => {
                  return index === self.findIndex((t) => t.name === value.name);
                })
                .map((item) => {
                  return (
                    <MusicSearchCard
                      key={item.id}
                      songName={item.name}
                      artistName={item.artists.map((artist) => artist.name)}
                      image={item.album.images[0].url}
                    />
                  );
                })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default MusicSearch;
