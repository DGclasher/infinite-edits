"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageData {
  src: string;
  alt: string;
  type: string;
}

const imageData: ImageData[] = [
  {
    src: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4",
    alt: "Design 1",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714333114/shorts/w2ugziuwgd24smkln97g.mp4",
    alt: "Design 2",
    type: "video",
  },
  
  
];

const Videos = () => {
  const [file, setFile] = useState<{
    alt: string;
    type: string;
    src: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (img: ImageData) => {
    setFile(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFile(null);
  };
  return (
    <div className="bg-black relative bg-grid-white/[0.08]">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl mt-16 md:text-5xl mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Videos
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our videos.
        </p>
      </div>

      <div className="w-full columns-1 z-10 md:columns-2 lg:columns-3 space-y-5 gap-5 p-5 ">
        {imageData.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => openModal(data)}
              className="overflow-hidden rounded-xl p-2"
            >
              <video
                key={index}
                className="rounded-xl overflow-hidden object-cover w-full cursor-pointer h-auto shadow-lg"
                src={data.src}
                width={400}
                height={400}
                loop
                muted
              />
            </div>
          );
        })}
      </div>
      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>

        {file?.type === "video" ? (
          <video src={file?.src} autoPlay controls className="w-full h-full" />
        ) : (
          <img
            src={file?.src}
            alt="Image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Videos;
