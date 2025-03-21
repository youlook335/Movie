import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  return (
    <div className="flex justify-center my-6">
      <ReactPlayer 
        url={videoUrl} 
        controls 
        width="100%" 
        height="500px"
        config={{
          youtube: {
            playerVars: { origin: window.location.origin },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
// Hey, Cortana. Government level. Hey, Cortana. Hey, Cortana, Iqbal. Shooting. A big star was a big man in the dark as well as his mother. Rolls-royce. 