import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MusicSearchContext } from "../../contexts/AppContexts";
import Main from "../Main/Main";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import "./App.css";
import fetchSpotifyData from "../../utils/spotifyApi";

function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMusicSelVisible, setIsMusicSelVisible] = useState(false);
  const [songData, setSongData] = useState();
  //Opening and closing music search area
  const handleSearchOpen = () => {
    setIsSearchVisible(true);
    setIsMusicSelVisible(true); //delete this when the selection system is built
  };
  const handleSearchClose = () => {
    setIsSearchVisible(false);
  };

  //opening and closing music selection
  const handleMusicSelOpen = () => {
    setIsMusicSelVisible(true);
  };
  const handleMusicSelClose = () => {
    setIsMusicSelVisible(false);
  };

  //fetch search results from spotify
  const handleSongSearch = (song) => {
    const getSpotifyData = async () => {
      try {
        const data = await fetchSpotifyData(song);
        setSongData(data);
      } catch (error) {
        console.error("Failed to fetch song data:", error);
      }
    };

    getSpotifyData();
  };

  useEffect(() => {
    console.log(songData);
  }, [songData]);

  return (
    <>
      <MusicSearchContext.Provider
        value={{
          isSearchVisible,
          setIsSearchVisible,
          isMusicSelVisible,
          setIsMusicSelVisible,
          handleSearchOpen,
          handleSearchClose,
          handleMusicSelOpen,
          handleMusicSelClose,
          handleSongSearch,
          songData,
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MusicSearchContext.Provider>
    </>
  );
}

export default App;
