"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageData {
  src: string;
  alt: string;
  type: string;
  thumbnailSrc?: string;
}

const imageData: ImageData[] = [
  {
    src: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4",
    alt: "Design 1",
    type: "video",
    thumbnailSrc: "/thumbnail_video_1.png",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714333114/shorts/w2ugziuwgd24smkln97g.mp4",
    alt: "Design 2",
    type: "video",
    thumbnailSrc: "/thumbnail_video_2.png",
  },
  
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714390286/shorts/dbylhlpzgsalwgg4fsif.mp4",
    alt: "Design 2",
    type: "video",
    thumbnailSrc: "/thumbnail_video_3.png",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714321127/shorts/yb8bylruv5mctx32flyt.mp4",
    alt: "Design 2",
    type: "video",
    thumbnailSrc: "/landing_video_thumbnail.png",
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
    <div className="bg-black relative bg-grid-white/[0.08] text-center pt-16 overflow-x-hidden">
      <div className="absolute -top-80 z-10 flex left-0 items-center">
        <div className="w-[500px] h-[1000px] -rotate-45  rounded-full z-2 blur-3xl bg-gradient-to-br from-indigo-600/50 to-transparent "></div>
      </div>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="relative mb-12">
            <span className="relative text-white inline-block text-4xl md:text-5xl">
              Shorts / Reels
              <Image
                src={"/curve.png"}
                className="absolute top-full left-0 w-full mt-1"
                alt="Curve"
                width={100}
                height={100}
              />
            </span>
          </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our videos.
        </p>
      </div>

      <div className="w-full columns-1 z-10 relative md:columns-2 lg:columns-3 space-y-5 gap-5 p-5 ">
        {imageData.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => openModal(data)}
              className="overflow-hidden rounded-xl p-2"
            >
              <video
                key={index}
                poster={data.thumbnailSrc}
                className="rounded-xl h-[500px] overflow-hidden object-cover w-full cursor-pointer shadow-lg"
                src={data.src}
                width={100}
                height={100}
                loop
                playsInline
                muted
              />
            </div>
          );
        })}
      </div>
      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>

        {file ? (
        file.type === "video" ? (
          <video src={file.src} autoPlay controls className="w-full h-full" />
        ) : (
          file.src ? (
            <Image
              src={file.src}
              alt="Media content"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          ) : (
            <div className="text-center">No Image Available</div> // Default message or image
          )
        )
      ) : (
        <div className="text-center">No Content to Display</div> // If no file is set
      )}
      </div>
    </div>
  );
};

export default Videos;
