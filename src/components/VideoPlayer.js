import React, { useEffect } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ video, onBack }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      onBack();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="video-player">
      <h1>{video.title}</h1>
      <div>
        <video src={video.videoUrl} controls autoPlay />
      </div>
    </div>
  );
};

export default VideoPlayer;
