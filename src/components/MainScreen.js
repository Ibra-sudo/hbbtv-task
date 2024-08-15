import React, { useState, useEffect } from "react";
import videos from "../videos.json";
import "./MainScreen.css";

const MainScreen = ({ onSelectVideo, watchedVideos }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        setSelectedIndex((prev) => (prev - 1 + videos.length) % videos.length);
        break;
      case "ArrowRight":
        setSelectedIndex((prev) => (prev + 1) % videos.length);
        break;
      case "Enter":
      case " ":
        const selectedVid = videos[selectedIndex];
        onSelectVideo(selectedVid);
        break;
      default:
        break;
    }
  };

  const handelThumbnailClick = (video) => {
    onSelectVideo(video);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="main-screen">
      <h1>Single line title</h1>
      <div className="videos">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`thumbnail ${
              index === selectedIndex ? "selected" : ""
            } ${watchedVideos.includes(video.id) ? "watched" : ""}`}
            onClick={() => handelThumbnailClick(video)}
          >
            <img src={video.thumbnail} alt={video.title} />
            <div className="season">{video.season}</div>
            <div className="title">{video.title}</div>
            {watchedVideos.includes(video.id) && (
              <div className="watched-label">Watched</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainScreen;
