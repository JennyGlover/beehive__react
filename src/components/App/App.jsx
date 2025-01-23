import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation"
import {
  MusicSearchContext,
  ImageInputContext,
} from "../../contexts/AppContexts";
import Main from "../Main/Main";
import Friends from "../Friends/Friends";
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
  const [messageValues, setMessageValues] = useState([]);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);

  //opening and closing music selection
  const handleMusicSelOpen = ({ songName, artistName, image }) => {
    setMusicSelData({ songName, artistName, image });
    setIsMusicSelVisible(true);
  };
  const handleMusicSelClose = () => {
    setIsMusicSelVisible(false);
  };

  //closing emojie modal with escape
  const handleCloseEmojiModal = (e) => {
    if (e.key === "Escape") {
      setIsEmojiPickerVisible(false);
    }
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

  //sending text message
  const sendTextMessage = (values) => {
    console.log(values);
    setMessageValues(() => [values]);
  };
  useEffect(() => {
    console.log(messageValues);
  }, [messageValues]);

  return (
    <>
      <MusicSearchContext.Provider
        value={{
          isSearchVisible,
          setIsSearchVisible,
          isMusicSelVisible,
          setIsMusicSelVisible,
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
            isImgPreviewVisible,
            setIsImgPreviewVisible,
            messageValues,
            sendTextMessage,
            isEmojiPickerVisible,
            setIsSearchVisible,
            setIsEmojiPickerVisible, //this needs to be in its own context
          }}
        >
          <Navigation />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/friends" element={<Friends />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ImageInputContext.Provider>
      </MusicSearchContext.Provider>
    </>
  );
}

export default App;
