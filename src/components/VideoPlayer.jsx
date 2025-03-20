
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [videoUrl, setVideoUrl] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Enter Video URL</h2>
      <input
        type="text"
        placeholder="Paste video link here..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        style={{ padding: "10px", width: "80%", marginBottom: "20px" }}
      />

      {/* ویڈیو پلیئر */}
      {videoUrl && <ReactPlayer url={videoUrl} controls width="100%" />}
    </div>
  );
};

export default VideoPlayer;
