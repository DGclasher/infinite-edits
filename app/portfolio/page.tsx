"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const portfolioData = {
    sections: [
      {
        title: "Graphics Design",
        content: [
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Design 1",
          },
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Design 2",
          },
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Design 3",
          },
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Design 4",
          },
        ],
      },
      {
        title: "Video",
        content: [
          { video: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714238836/sample-videos/t5nnjgrpgeqvns5gfurz.mp4", description: "Video 1" },
          { video: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714238828/sample-videos/isxopogxxtc3opzksu1x.mp4", description: "Video 2" },
          { video: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714238826/sample-videos/n14namkfpq0jlysw3ods.mp4", description: "Video 3" },
          { video: "https://res.cloudinary.com/dltmqv10j/video/upload/v1714238820/sample-videos/lhwyrolgphehax4tvb4q.mp4", description: "Video 4" },
        ],
      },
      {
        title: "Thumbnail",
        content: [
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Thumbnail 1",
          },
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Thumbnail 2",
          },
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Thumbnail 3",
          },
          {
            image:
              "https://images.unsplash.com/photo-1713350472373-fb79157678b8",
            description: "Thumbnail 4",
          },
        ],
      },
    ],
  };

  return (
    <div className="text-white">
      {/* Header Section */}
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Website Design <br /> that works
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating, designing, and developing websites that work for your
          business.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-8 py-10 px-4">
        {/* Graphics Design Section */}
        <div>
          <h2 className="text-2xl font-bold text-center">
            {portfolioData.sections[0].title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {portfolioData.sections[0].content.map((item, index) =>
              "image" in item ? (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.description}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              ) : null
            )}
          </div>
        </div>

        {/* Video Section */}
        <div>
          <h2 className="text-2xl font-bold text-center">
            {portfolioData.sections[1].title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {portfolioData.sections[1].content.map((item, index) =>
              "video" in item ? (
                <video
                  key={index}
                  className="h-auto max-w-full rounded-lg object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={item.video}
                ></video>
              ) : null
            )}
          </div>
        </div>

        {/* Thumbnail Section */}
        <div>
          <h2 className="text-2xl font-bold text-center">
            {portfolioData.sections[2].title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {portfolioData.sections[2].content.map((item, index) =>
              "image" in item ? (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.description}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
