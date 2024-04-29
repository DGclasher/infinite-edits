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
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a8505193865991.65f2b131db88e.png",
    alt: "Design 1",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2a67e193775429.65f16d1a841a5.jpg",
    alt: "Design 2",
    type: "image",
  },
  
];

const Thumbnails = () => {
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
          Thumbnails
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our creative and attractive thumbnails.
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
              <Image
                key={index}
                className="rounded-xl overflow-hidden object-cover w-full cursor-pointer h-auto shadow-lg"
                src={data.src}
                alt="Porfolio_img"
                width={500}
                height={500}
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

export default Thumbnails;
