/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Carousel = () => {
  const videos = [
    "https://cdn.shopify.com/videos/c/o/v/3c2a4e9b04204256a1b31a11e9bf7121.mp4",
    "https://cdn.shopify.com/videos/c/o/v/50961aaae6cd452f9aa68a5abdbedb4c.mp4",
    "https://cdn.shopify.com/videos/c/o/v/3c2a4e9b04204256a1b31a11e9bf7121.mp4",
    "https://cdn.shopify.com/videos/c/o/v/3c2a4e9b04204256a1b31a11e9bf7121.mp4",
    "https://cdn.shopify.com/videos/c/o/v/50961aaae6cd452f9aa68a5abdbedb4c.mp4",
    "https://cdn.shopify.com/videos/c/o/v/3c2a4e9b04204256a1b31a11e9bf7121.mp4",
    "https://cdn.shopify.com/videos/c/o/v/3c2a4e9b04204256a1b31a11e9bf7121.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <div className=" w-full">
        <div className="overflow-hidden w-full mx-auto">
          <div
            className="flex transition-transform duration-500 "
            style={{
              transform: `translateX(-${currentIndex * 25}%)`, // Move based on index
            }}
          >
            {videos.slice(currentIndex, currentIndex + 4).map((video, idx) => (
              <video
                key={idx}
                src={video}
                controls
                className="md:w-[25%] h-[200px] md:h-[500px] object-cover rounded-lg px-2" // Display 4 videos
              />
            ))}
          </div> 
        </div>

    
      </div>
    </div>
  );
};

export default Carousel;
