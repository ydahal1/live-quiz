import React, { useEffect, useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  let audio = new Audio("/background-music.mp3");

  // Enable looping and set volume
  audio.loop = true;
  audio.volume = 0.5; // Adjust the volume as needed

  // Autoplay the music on page load
  useEffect(() => {
    audio.play().catch((error) => {
      console.log("Autoplay failed due to browser restrictions:", error);
    });
    setIsPlaying(true); // Set playing state to true after attempting to autoplay
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.log("Play failed:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button style={{ display: "none" }} onClick={togglePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default MusicPlayer;
