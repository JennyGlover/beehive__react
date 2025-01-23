import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import {
  MusicSearchContext,
  ImageInputContext,
  AuthenticationContext,
} from "../../contexts/AppContexts";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute";
import Friends from "../Friends/Friends";
import Profile from "../Profile/Profile";
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
  const [isNavVisible, setIsNavVisible] = useState(true);
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
    <div className={isNavVisible ? "App" : "App_diplay-block"}>
      <AuthenticationContext.Provider
        value={{
          isNavVisible,
          setIsNavVisible,
        }}
      >
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
            {/* if anonymous take context and set nav to display none */}

            <Routes>
              <Route
                path="/messages"
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/friends"
                element={
                  <ProtectedRoute>
                    <Friends />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signup"
                element={
                  <ProtectedRoute anonymous>
                    <Signup />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedRoute anonymous>
                    <Login />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </ImageInputContext.Provider>
        </MusicSearchContext.Provider>
      </AuthenticationContext.Provider>
    </div>
  );
}

export default App;
