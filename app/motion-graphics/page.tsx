"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";


interface VideoData {
  src: string;
  alt: string;
  type: string;
  poster?: string;
}

const videoData: VideoData[] = [
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373536/motion-graphics/mh44ehw0qzhfabr0t01h.mp4",
    alt: "video 1",
    type: "video",
    poster: "/motion-graphics/thumbnail_1.webp"
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373505/motion-graphics/llgbzr0cjomlkwbpejbb.mp4",
    alt: "video 2",
    type: "video",
    poster: "/motion-graphics/thumbnail_2.webp"
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373484/motion-graphics/hxconbgg6zm19om6jttw.mp4",
    alt: "video 3",
    type: "video",
    poster: "/motion-graphics/thumbnail_3.webp"
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373457/motion-graphics/iqfww08fxlwz4swpstm9.mp4",
    alt: "video 4",
    type: "video",
    poster: "/motion-graphics/thumbnail_4.webp"
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373409/motion-graphics/b3gzfqu30gkffdjlzx1d.mp4",
    alt: "video 5",
    type: "video",
    poster: "/motion-graphics/thumbnail_5.webp"
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373376/motion-graphics/wzry6ncaqcvojizs8ubz.mp4",
    alt: "video 6",
    type: "video",
    poster: "/motion-graphics/thumbnail_6.webp"
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714372591/motion-graphics/tsship7fypvpfarmzaja.mp4",
    alt: "video 7",
    type: "video",
    poster: "/motion-graphics/thumbnail_7.webp"
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714372551/motion-graphics/tzm0tirugc1kbuqptiob.mp4",
    alt: "video 8",
    type: "video",
    poster: "/motion-graphics/thumbnail_8.webp"
  },
];

const Videos = () => {
  const [file, setFile] = useState<{
    alt: string;
    type: string;
    src: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video: VideoData) => {
    setFile(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFile(null);
  };
  return (
    <div className="bg-gradient-to-b  from-neutral-950  max-w-screen  overflow-x-hidden text-center px-4 md:px-8 lg:px-16">
      <BackgroundBeams />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="relative mb-12 flex flex-col justify-center items-center w-full">
            <span className="relative text-white inline-block text-4xl md:text-5xl">
              Motion Graphics
              <Image
                src={"/curve.png"}
                className="absolute top-full left-0 w-full mt-1"
                alt="Curve"
                width={400}
                height={100}
              />
            </span>
        <p className="pt-16 text-white text-lg font-normaltext-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our motion graphics.
        </p>
        <Link
          href={"/contact"}
          className="bg-gradient-to-r w-48 text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
        >
          Contact us <FaArrowRight />
        </Link>
      </div>
          </div>

      <div className="w-full  z-10 grid grid-cols-1 md:grid-cols-2 py-8 gap-8 lg:grid-cols-3">
        {videoData.map((data, index) => {
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
                className=" overflow-hidden object-cover w-full cursor-pointer h-60 shadow-lg"
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
            <div className="text-center">No Image Available</div>
          )
        )
      ) : (
        <div className="text-center">No Content to Display</div>
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
