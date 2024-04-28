'use client';
import React, { useState } from 'react';

interface MediaItem {
  title: string;
  type: 'video' | 'image';
  url: string;
}

const medias: MediaItem[] = [
  {
    title: 'Reel 1',
    type: 'video',
    url: 'https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4',
  },
  {
    title: 'Reel 2',
    type: 'video',
    url: 'https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4',
  },
  {
    title: 'Reel 3',
    type: 'image',
    url: 'https://plus.unsplash.com/premium_photo-1682437765523-b49d5ab81afb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Portfolio: React.FC = () => {
  const [file, setFile] = useState
<{ title: string; type: string; url: string } | null>(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (media: MediaItem) => {
setFile(media);
setIsModalOpen(true);
};

const closeModal = () => {
setIsModalOpen(false);
setFile(null);
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
      {medias.map((media, index) => (
        <div key={index}>
          <div onClick={() => openModal(media)} style={{ cursor: 'pointer' }}>
            <video
              src={`${media.url}#t=0.001`}
              preload='metadata'
              className="w-80 rounded-xl h-80 object-cover"
              muted
              autoPlay
              loop
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal for displaying the selected media */}
  
      <div className="popup-media" style={{display: file ? 'block' : 'none'}}>
      <span onClick={()=>setFile(null)}>&times;</span>

        
            {file?.type === 'video' ? (
              <video src={file?.url} autoPlay controls className="w-full h-full" />
            ) : (
              <img src={file?.url} alt="Image" className="w-full h-full object-cover" />
            )}
        
      </div>
  
</div>
);
};

export default Portfolio;