"use client";
import * as React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface TeamData {
  name: string;
  position: string;
  photo: string;
}
const teamData: TeamData[] = [
  {
    name: "Alice Johnson",
    position: "CEO",
    photo:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a8505193865991.65f2b131db88e.png",
  },
  {
    name: "Bob Smith",
    position: "CTO",
    photo:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a8505193865991.65f2b131db88e.png",
  },
  {
    name: "Charlie Brown",
    position: "CFO",
    photo:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a8505193865991.65f2b131db88e.png",
  },
  {
    name: "Diana Evans",
    position: "COO",
    photo:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a8505193865991.65f2b131db88e.png",
  },
];
export function TeamSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, 
    },
  };
  return (
    <div className="mx-auto w-[100vw] md:w-[80vw] lg:w-[70vw] px-4 flex flex-col items-center py-20 justify-center">
      <div className="relative mb-20">
        <span className="relative text-white inline-block text-5xl">
          Meet our Teams
          <img
            src={"curve.png"}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>
      {teamData && (
  <Carousel
    className="w-full"
    autoPlay={true}
    infinite={true}
    swipeable={true}
    draggable={true}
    responsive={responsive}
    itemClass="carousel-item"
  >
    {teamData.map((team, index) => (
      <div key={index} className="carousel-item lg:mx-4 text-white h-88 bg-gradient-to-b from-neutral-800 to-black border border-neutral-700 rounded-xl p-4">
        <div className="h-60 mb-8">
        <img src={team.photo} alt="" className="w-full h-full rounded-xl object-cover" />
        </div>
        <p className="text-xl font-bold">{team.name}</p>
        <p className="text-lg">{team.position}</p>
      </div>
    ))}
  </Carousel>
)}
    </div>
  );
}
