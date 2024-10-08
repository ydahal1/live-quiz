import React, { useState, useEffect } from "react";
import QuizBoard from "./components/QuizBoard";
import MusicPlayer from "./common/MusicPlayer";
import "./App.css";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const borderAnimation = setInterval(() => {
      setIsAnimated((prev) => !prev);
    }, 1000);

    // clean up the interval
    return () => {
      clearInterval(borderAnimation);
    };
  }, []);

  return (
    <div className={`App ${isAnimated ? "animated" : ""}`}>
      <MusicPlayer />
      <QuizBoard />
    </div>
  );
}

export default App;
