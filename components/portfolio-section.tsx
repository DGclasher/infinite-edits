"use client";
import React, { useState } from "react";
import { Slider } from "./slider";
import Link from "next/link";

interface MediaItem {
  title: string;
  type: "video" | "image";
  url: string;
}

const medias: MediaItem[] = [
  {
    title: "Reel 1",
    type: "video",
    url: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714302673/sample-videos/osmkliskp1ygnwqvm4se.mp4",
  },
  {
    title: "Reel 2",
    type: "video",
    url: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714333114/shorts/w2ugziuwgd24smkln97g.mp4",
  },
];

const Portfolio: React.FC = () => {
  const [file, setFile] = useState<{
    title: string;
    type: string;
    url: string;
  } | null>(null);
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
    <div className="text-white w-[100vw] flex flex-col justify-center px-4 md:px-16 items-center ">
      <div className=" text-center relative mb-16 z-10">
        <span className="relative text-white inline-block text-5xl">
          Portfolio
          <img
            src={"/curve.png"}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center w-[80%] z-10">
        <div className="">
          <h2 className="text-3xl text-white font-bold">Shorts/Reels</h2>
          <p className="py-4 text-sm md:text-xl text-neutral-400">
            From YouTube videos to corporate documentaries, our team offers
            comprehensive video editing services tailored to meet your needs. We
            handle everything from basic cuts to complex compositions, ensuring
            your message is clear and impactful.
          </p>
          <Link href="/videos" className="inline-flex bg-gradient-to-r from-rose-500 to bg-indigo-900 px-6 py-3 rounded-full text-white items-center gap-2" >See all</Link>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex flex-col lg:flex-row gap-8  py-12">
              {medias.map((media, index) => (
                <div key={index}>
                  <div
                    onClick={() => openModal(media)}
                    style={{ cursor: "pointer" }}
                  >
                    <video
                      src={`${media.url}#t=0.001`}
                      preload="metadata"
                      className="w-80 rounded-xl h-80 object-cover"
                      muted
                      autoPlay
                      loop
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="text-neutral-400 w-full md:w-1/4 bg-neutral-900 rounded-xl border border-neutral-600 p-8">
              <h3 className="text-xl font-bold">Process</h3>
              <p className="text-lg">
                Our process is straightforward yet thorough: consultation,
                storyboard approval, editing, client feedback, final touches,
                and delivery.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[100%] h-auto flex gap-16 justify-between items-center flex-col md:flex-row">
          <div className="">
            <h2 className="text-4xl text-white font-bold">Thumbnail Designs</h2>
            <p className="py-4 text-sm md:text-xl text-neutral-400">
              Catch your audience&apos;s attention with custom-designed
              thumbnails that stand out. We combine striking visuals and
              typography to maximize your video&apos;s appeal and click-through
              rate.
            </p>
            <Link href="/graphicdesign" className="inline-flex bg-gradient-to-r from-rose-500 to bg-indigo-900 px-6 py-3 rounded-full text-white items-center gap-2" >See all</Link>
          </div>

          <Slider />
        </div>
      </div>

      {/* Modal for displaying the selected media */}

      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>

        {file?.type === "video" ? (
          <video src={file?.url} autoPlay controls className="w-full h-full" />
        ) : (
          <img
            src={file?.url}
            alt="Image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
