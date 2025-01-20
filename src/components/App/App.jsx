import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../Main/Main";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
