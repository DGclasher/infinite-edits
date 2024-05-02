"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import React from "react";

interface ServiceCardProps {
  title: string;
  description1: string;
  description2: string;
  imageSrc: string;
  type: string;
  thumbnailSrc?: string;
  onClick: () => void;
}

export function ServiceCards() {
  const router = useRouter(); // Initialize the router

  const cardData: ServiceCardProps[] = [
    {
      title: "Catchy Thumbnails",
      description1:
        "Catch your audience's attention with custom-designed thumbnails that stand out.",
      description2:
        "We combine striking visuals and typography to maximize your video's appeal and click-through rate.",
      imageSrc:
        "https://res.cloudinary.com/dpzciuywe/image/upload/v1714333407/shorts/wgfeaslh1hn2utujdnwg.webp",
      type: "image",
      onClick: () => router.push("/thumbnails"),
    },
    {
      title: "Creative Videos",
      description1:
        "From YouTube videos to corporate documentaries, our team offers comprehensive video editing services tailored to meet your needs. ",
      description2:
        "We handle everything from basic cuts to complex compositions, ensuring your message is clear and impactful.",
      imageSrc:
        "https://res.cloudinary.com/dpzciuywe/video/upload/v1714411118/videos/y7u5cuh5f1lm3kddmfhx.mp4",
      type: "video",
      thumbnailSrc: "/creative-video-thumbnail.jpg",
      onClick: () => router.push("/videos"),
    },
    {
      title: "Motion Graphics",
      description1: "Elevate your content with engaging motion graphics.",
      description2:
        "Ideal for intros, advertisements, and educational videos, our motion designs are crafted to keep your audience engaged.",
      imageSrc:
        "https://res.cloudinary.com/dpzciuywe/video/upload/v1714373536/motion-graphics/mh44ehw0qzhfabr0t01h.mp4",
      type: "video",
      thumbnailSrc: "/motion-g-thumbnail.jpg",
      onClick: () => router.push("/motion-graphics"),
    },
    {
      title: "Graphic Design",
      description1:
        "Our graphic design services cover everything from brand identity to digital marketing materials.",
      description2:
        "We craft visuals that resonate with your target audience and communicate your brand message clearly.",
      imageSrc:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b9515119487117.609e6f800244a.jpg",
      type: "image",
      onClick: () => router.push("/graphicdesign"), // Navigate to /graphic-design
    },
    {
      title: "Digital Marketing Services",
      description1:
        "Unleash Your Brand’s Potential!",
      description2:
        
        "At Infinite Media, we don't just amplify your voice; we ensure it echoes across the digital landscape. ",
      imageSrc:

        "/digital_marketing.webp",
      type: "image",
      onClick: () => router.push("/digital-marketing"),
    },
    {
      title: "Website Development",
      description1:
        "Create Your Digital Home With Us",
      description2:"At Infinite Media, we build more than websites; we craft digital experiences that captivate and convert. ",
      imageSrc:
        "/web_development.jpg",
      type: "image",
      onClick: () => router.push("/web-development"),
    }
  ];

  return (
    <div className="py-20 text-center px-4">
      <div className="relative mb-16">
        <span className="relative text-white inline-block text-4xl md:text-5xl">
          Our Services
          <Image
            src={"/curve.png"}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
            width={300}
            height={100}
          />
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
        {cardData.map((card, index) => (
          <CardContainer key={index}>
            <CardBody
              className="bg-gradient-to-b from-neutral-900 to-black border-neutral-700 relative group/card 
                hover:shadow-2xl hover:shadow-emerald-500/[0.1] w-auto sm:w-[30rem] md:w-[400px] h-[490px] 
                rounded-xl p-6 border"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white"
              >
                {card.title}
              </CardItem>
              <div className="flex flex-col  gap-4 h-[30%] pt-4">
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300  text-xs max-w-full  text-left"
              >
                {card.description1}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300  text-xs w-full  text-left"
              >
                {card.description2}
              </CardItem>
              </div>
              <CardItem translateZ="100" className="w-full  mt-8">
                {card.type === "image" ? (
                  <Image
                    src={card.imageSrc}
                    height={1000}
                    width={1000}
                    className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={card.title}
                  />
                ) : (
                  <video
                    src={card.imageSrc}
                    poster={card.thumbnailSrc}
                    className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
              </CardItem>
              <div className="flex justify-end items-right mt-4">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  onClick={card.onClick} // Navigate based on the specified onClick
                >
                  Explore
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}