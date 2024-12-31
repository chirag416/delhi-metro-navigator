import React, { useState } from 'react';
import MAP from '../assets/maps/NetworkMap.jpg';
import LOGO_VIDEO from '../assets/logo-loading.mp4'; // Path to your uploaded video

const NetworkMap = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); // Track video state
  const [isImageLoading, setIsImageLoading] = useState(true); // Track image loading state

  const handleVideoEnd = () => {
    setIsVideoPlaying(false); // Hide video once it ends
  };

  const handleImageLoad = () => {
    setIsImageLoading(false); // Hide loader when the image is fully loaded
  };

  return (
    <div className="w-full h-screen overflow-auto border shadow-lg relative bg-white">
      {/* Video Loader */}
      {isVideoPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <video
            src={LOGO_VIDEO}
            autoPlay
            muted
            className="w-32 h-32 object-contain"
            onEnded={handleVideoEnd} // Trigger when video ends
          />
        </div>
      )}

      

      {/* High-Resolution Image */}
      <img
        src={MAP}
        alt="Delhi Metro Network Map"
        onLoad={handleImageLoad} // Trigger when image loads
        className={`w-full h-auto transition-opacity duration-500 overflow- ${
          isImageLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};

export default NetworkMap;
