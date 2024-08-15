import React, { useState } from "react";
import MainScreen from "./components/MainScreen";
import "./App.css";

function App() {
  const [selectedVideo] = useState(null);
  return (
    <div className="app">
      <MainScreen onSelectVideo={selectedVideo} />
    </div>
  );
}

export default App;
