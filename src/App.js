import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(dark);
    localStorage.setItem("site-dark-mode", json);
  }, [dark]);

  return (
    <div
      className={
        dark
          ? "darkMode text-white min-h-screen py-10 px-3 sm:px-5 bg-gray-100"
          : "lightMode text-black min-h-screen py-10 px-3 sm:px-5 bg-gray-100"
      }
    >
      <Routes>
        <Route path="/" element={<Home dark={dark} setDark={setDark} />} />
      </Routes>
    </div>
  );
};

export default App;
