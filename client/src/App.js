import React from "react";
import QuizBoard from "./components/QuizBoard";
import MusicPlayer from "./common/MusicPlayer";
import "./App.css";

function App() {

  return (
    <div className='App'>
      <MusicPlayer />
      <QuizBoard />
    </div>
  );
}

export default App;
