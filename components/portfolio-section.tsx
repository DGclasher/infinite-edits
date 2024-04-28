'use client';

import React, { useState } from 'react';
import VideoModal from './video-modal';
const reels = [
  {
    title: 'Reel 1',
    description: 'This is a description for reel 1',
    url: 'https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4',
  },
  {
    title: 'Reel 2',
    description: 'This is a description for reel 2',
    url: 'https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4',
  },
  {
    title: 'Reel 3',
    description: 'This is a description for reel 3',
    url: 'https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4',
  },
  {
    title: 'Reel 4',
    description: 'This is a description for reel 4',
    url: 'https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4',
  },
];

const Portfolio: React.FC = () => {
  // State to manage modal visibility and the currently selected video
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openModal = (url: string) => {
    setSelectedVideoUrl(url); // Set the current video URL
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedVideoUrl(null); // Reset the selected video URL
  };

  return (
    <div className="text-white">
      <div className="relative mb-16">
        <span className="relative text-white inline-block text-5xl">
          Our Team
          <img
            src={'/curve.png'} // Added '/' for correct path
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>

      <div>
        <h2>Shorts/Reels</h2>
        <p>Check out some of our latest short films and reels</p>
        <div className="flex gap-8">
          {reels.map((reel, index) => (
            <div key={index}>
              <button onClick={() => openModal(reel.url)}> {/* Button to open modal */}
                <video
                  src={reel.url}
                  controls
                  className="w-80 rounded-xl h-80 object-cover"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideoUrl && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal} // Close the modal
          videoUrl={selectedVideoUrl} // Provide the selected video URL
        />
      )}
    </div>
  );
};

export default Portfolio;