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
  const [isMusicSelectionVisible, setIsMusicSelectionVisible] = useState(false);

  //Opening and closing music search area
  const handleSearchOpen = () => {
    setIsSearchVisible(true);
  };
  const handleSearchClose = () => {
    setIsSearchVisible(false);
  };

  //opening and closing music selection

  //fetch search results from spotify
  useEffect(() => {
    const getSpotifyData = async () => {
      try {
        const data = await fetchSpotifyData();
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch song data:", error);
      }
    };

    getSpotifyData();
  }, []);

  return (
    <>
      <MusicSearchContext.Provider
        value={{
          isSearchVisible,
          setIsSearchVisible,
          isMusicSelectionVisible,
          setIsMusicSelectionVisible,
          handleSearchOpen,
          handleSearchClose,
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
