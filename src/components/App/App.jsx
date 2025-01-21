import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../Main/Main";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import "./App.css";
import fetchSpotifyData from "../../utils/spotifyApi";

function App() {
  const [count, setCount] = useState(0);
  
  //fetch search results from spotify
  useEffect(() => {
    const getSpotifyData = async () => {
      try{
        const data = await fetchSpotifyData();
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch song data:', error);
      }
    };

    getSpotifyData();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
