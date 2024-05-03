"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

interface videoData {
  src: string;
  alt: string;
  type: string;
  poster: string;
}

const videos: videoData[] = [
  {
    src: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4",
    alt: "Design 1",
    type: "video",
    poster: "/thumbnail_video_1.webp",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714333114/shorts/w2ugziuwgd24smkln97g.mp4",
    alt: "video 2",
    type: "video",
    poster: "/thumbnail_video_2.webp",
  },
  
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714390286/shorts/dbylhlpzgsalwgg4fsif.mp4",
    alt: "video 3",
    type: "video",
    poster: "/thumbnail_video_3.webp",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714321127/shorts/yb8bylruv5mctx32flyt.mp4",
    alt: "video 4",
    type: "video",
    poster: "/landing_video_thumbnail.webp",
  },
  
  
];

const Videos = () => {
  const [file, setFile] = useState<{
    alt: string;
    type: string;
    src: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (img: videoData) => {
    setFile(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFile(null);
  };
  return (
    <div className="bg-gradient-to-b pb-16 from-indigo-600/20 max-w-screen  overflow-x-hidden text-center">
      <BackgroundBeams />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="relative mb-12 flex flex-col justify-center items-center w-full">
            <span className="relative text-white inline-block text-4xl md:text-5xl">
              Shorts / Reels
              <Image
                src={"/curve.webp"}
                className="absolute top-full left-0 w-full mt-1"
                alt="Curve"
                width={300}
                height={100}
              />
            </span>
        <p className="pt-16 text-white text-lg font-normaltext-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our videos.
        </p>
        <Link
          href={"/contact"}
          className="bg-gradient-to-r w-48 text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
        >
          Contact us <FaArrowRight />
        </Link>
      </div>
      </div>

      <div className="w-full  z-10 grid grid-cols-1 md:grid-cols-2 py-8 gap-8 lg:grid-cols-4 px-4 md:px-8 lg:px-20">
        {videos.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => openModal(data)}
              className="overflow-hidden   relative "
            >
              <div className="absolute left-8 top-8 p-2 bg-neutral-900/70 rounded-full ">
                <FaPlayCircle className="text-white text-2xl" />
              </div>
              
              <video
                key={index}
                className=" overflow-hidden object-cover w-full cursor-pointer h-full shadow-lg"
                src={data.src}
                width={400}
                height={100}
                loop
                muted
                poster={data.poster}
                playsInline
                preload="none"
              />
            </div>
          );
        })}
      </div>
      <div className="popup-media relative" style={{ display: file ? "block" : "none" }}>
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
      <Link
          href={"/contact"}
          className="bg-gradient-to-r w-48 md:hidden mx-auto my-8  text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
        >
          Contact us <FaArrowRight />
        </Link>
    </div>
  );
};

export default Videos;
