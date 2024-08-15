import React, { useState } from "react";
import MainScreen from "./components/MainScreen";
import VideoPlayer from "./components/VideoPlayer";
import "./App.css";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState([]);

  const handleSelectVideo = (video) => {
    if (selectedVideo && !watchedVideos.includes(selectedVideo.id)) {
      setWatchedVideos((prevWatched) => [...prevWatched, selectedVideo.id]);
    }
    setSelectedVideo(video);
  };

  const handleBack = () => {
    if (selectedVideo && !watchedVideos.includes(selectedVideo.id)) {
      setWatchedVideos((prevWatched) => [...prevWatched, selectedVideo.id]);
    }
    setSelectedVideo(null);
  };

  return (
    <div className="app">
      <div className="main-container">
        <MainScreen
          onSelectVideo={handleSelectVideo}
          watchedVideos={watchedVideos}
        />
        {selectedVideo && (
          <div className="video-container">
            <VideoPlayer video={selectedVideo} onBack={handleBack} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
