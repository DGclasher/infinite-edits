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
    <div className="text-white bg-black bg-grid-white/[0.08] p-8">
      {/* Header Section */}
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-40 px-2">
        <div className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 to-indigo-800 bg-opacity-50">
          Our Portfolio
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Creating and editing videos that will help you get more leads, save your time and make you more money.
        </p>
      </div>

      {/* Sections */}
      <div className="flex justify-center w-full flex-col gap-8 py-10 px-4">
        {/* Graphics Design Section */}
        {/* <div>
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
        </div> */}

        {/* Video Section */}
        <div>
        <div className="relative text-center mb-16">
        <span className="relative text-white inline-block text-4xl">
          Videos Edits
          <img
            src={'curve.png'}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {portfolioData.sections[1].content.map((item, index) =>
              "video" in item ? (
                <video
                  key={index}
                  className="h-auto max-w-full rounded-xl object-cover"
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
        <div className="relative text-center mb-16">
        <span className="relative text-white inline-block text-4xl">
          Thumbnails
          <img
            src={'curve.png'}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4">
            {portfolioData.sections[2].content.map((item, index) =>
              "image" in item ? (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.description}
                  width={400}
                  height={300}
                  className="rounded-xl"
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
