import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  MusicSearchContext,
  ImageInputContext,
} from "../../contexts/AppContexts";
import Main from "../Main/Main";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import "./App.css";
import fetchSpotifyData from "../../utils/spotifyApi";

function App() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMusicSelVisible, setIsMusicSelVisible] = useState(false);
  const [isImgInputVisible, setIsImgInputVisible] = useState(false);
  const [isImgPreviewVisible, setIsImgPreviewVisible] = useState(false);
  const [songData, setSongData] = useState();
  const [musicSelData, setMusicSelData] = useState();
  //Opening and closing music search area
  const handleSearchOpen = () => {
    setIsMusicSelVisible(false);
    setIsImgInputVisible(false);
    setIsImgPreviewVisible(false)
    setIsSearchVisible(true);
  };
  const handleSearchClose = () => {
    setIsSearchVisible(false);
    setIsImgInputVisible(false);

  };

  //opening and closing music selection
  const handleMusicSelOpen = ({ songName, artistName, image }) => {
    setMusicSelData({ songName, artistName, image });
    setIsMusicSelVisible(true);
  };
  const handleMusicSelClose = () => {
    setIsMusicSelVisible(false);
  };

  //opening and closing image url input
  const handleImgInputOpen = () => {
    setIsSearchVisible(false);
    setIsImgInputVisible(true);
  };
  //opening and closing image url input
  const handleImgInputClose = () => {
    setIsImgInputVisible(false);
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
          musicSelData,
        }}
      >
        <ImageInputContext.Provider
          value={{
            isImgInputVisible,
            setIsImgInputVisible,
            handleImgInputOpen,
            handleImgInputClose,
            isImgPreviewVisible,
            setIsImgPreviewVisible,
          }}
        >
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ImageInputContext.Provider>
      </MusicSearchContext.Provider>
    </>
  );
}

export default App;
