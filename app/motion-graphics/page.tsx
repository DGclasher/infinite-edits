"use client";

import Image from "next/image";
import { useState } from "react";

interface VideoData {
  src: string;
  alt: string;
  type: string;
}

const videoData: VideoData[] = [
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373536/motion-graphics/mh44ehw0qzhfabr0t01h.mp4",
    alt: "Design 1",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373505/motion-graphics/llgbzr0cjomlkwbpejbb.mp4",
    alt: "Design 2",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373484/motion-graphics/hxconbgg6zm19om6jttw.mp4",
    alt: "Design 2",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373457/motion-graphics/iqfww08fxlwz4swpstm9.mp4",
    alt: "Design 2",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373409/motion-graphics/b3gzfqu30gkffdjlzx1d.mp4",
    alt: "Design 2",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373376/motion-graphics/wzry6ncaqcvojizs8ubz.mp4",
    alt: "Design 2",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714372591/motion-graphics/tsship7fypvpfarmzaja.mp4",
    alt: "Design 2",
    type: "video",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714372551/motion-graphics/tzm0tirugc1kbuqptiob.mp4",
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

  const openModal = (video: VideoData) => {
    setFile(video);
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
          Motion Graphics
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our motion graphics.
        </p>
      </div>

      <div className="w-full columns-1 z-10 md:columns-2 lg:columns-3 space-y-5 gap-5 p-5">
        {videoData.map((data, index) => {
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
                autoPlay
                loop
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
            <div className="text-center">No Image Available</div>
          )
        )
      ) : (
        <div className="text-center">No Content to Display</div>
      )}
      </div>
    </div>
  );
};

export default Videos;
