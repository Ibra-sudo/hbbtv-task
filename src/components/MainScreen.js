import React, { useState } from "react";
import videos from "../videos.json";
import "./MainScreen.css";

const MainScreen = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState([]);

  const handelThumbnailClick = (video, index) => {
    setSelectedVideo(video);
    setWatchedVideos((prevWatched) => [...new Set([...prevWatched, index])]);
  };

  return (
    <>
      <div className="main-screen">
        <h1>Single line title</h1>
        <div className="videos">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className={`thumbnail ${
                watchedVideos.includes(index) ? "watched" : ""
              }`}
              onClick={() => handelThumbnailClick(video, index)}
            >
              <img src={video.thumbnail} alt={video.title} />
              <div className="season">{video.season}</div>
              <div className="title">{video.title}</div>
              {watchedVideos.includes(index) && (
                <div className="watched-label">Watched</div>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <div className="main-screen selected-video">
          <h1>{selectedVideo.title}</h1>
          <div className="video-larg">
            <video src={selectedVideo.videoUrl} controls autoPlay />
          </div>
        </div>
      )}
    </>
  );
};

export default MainScreen;
