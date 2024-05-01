"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="bg-gradient-to-b  from-neutral-950  max-w-screen  overflow-x-hidden text-center">
      <BackgroundBeams />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="relative mb-12 flex flex-col justify-center items-center w-full">
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

      <div className="w-full flex flex-wrap justify-center items-center z-10 relative space-y-5 gap-5 p-5 ">
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
