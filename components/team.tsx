"use client";
import * as React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardContent } from "@/components/ui/card";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
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
      items: 6,
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
    <div>
      <div className="relative mb-16">
        <span className="relative text-white inline-block text-5xl">
          Teams
          <img
            src={"curve.png"}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>
      {teamData && (
          <Carousel
          autoPlay={true}
            infinite={true}
            swipeable={true}
            draggable={true}
           responsive={responsive}>
            {teamData.map((team, index) => (
                <div key={index} className="w-[90%] md:w-52 h-[400px] mx-4 block bg-white">
                  <img src={team.photo} alt="" className="w-full " />
                  <p>{team.name}</p>
                </div>
            ))}
          </Carousel>
        )}
    </div>
  );
}
