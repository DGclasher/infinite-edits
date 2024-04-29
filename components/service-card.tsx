"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void;
}

export function ServiceCards()  {
  const router = useRouter(); // Initialize the router

  const cardData: ServiceCardProps[] = [
    {
      title: "Catchy Thumbnails",
      description: "Catch your audience's attention with custom-designed thumbnails that stand out. We combine striking visuals and typography to maximize your video's appeal and click-through rate.",
      imageSrc: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714333407/shorts/wgfeaslh1hn2utujdnwg.webp",
      onClick: () => router.push("/thumbnails"), // Navigate to /thumbnails
    },
    {
      title: "Creative Videos",
      description: "From YouTube videos to corporate documentaries, our team offers comprehensive video editing services tailored to meet your needs. We handle everything from basic cuts to complex compositions, ensuring your message is clear and impactful.",
      imageSrc: "https://assets-global.website-files.com/646e2eaef4ea8c90fde6a519/64d32b9df6c651a09a133902_How%20to%20use%20motion%20graphics%20in%20your%20marketing.webp",
      onClick: () => router.push("/videos"),
    },
    {
      title: "Motion Graphics",
      description: "Elevate your content with engaging motion graphics. Ideal for intros, advertisements, and educational videos, our motion designs are crafted to keep your audience engaged.",
      imageSrc: "https://verbit.ai/wp-content/uploads/2023/12/an-impressive-looking-computer.jpg",
      onClick: () => router.push("/motion-graphics"),
    },
    {
      title: "Graphic Design",
      description: "Our graphic design services cover everything from brand identity to digital marketing materials. We craft visuals that resonate with your target audience and communicate your brand message clearly.",
      imageSrc: "https://inspiria.edu.in/wp-content/uploads/Career-in.-graphic-designers.webp",
      onClick: () => router.push("/graphicdesign"), // Navigate to /graphic-design
    },
  ];

  return (
    <div className="py-20 text-center px-4">
      <div className="relative mb-16">
        <span className="relative text-white inline-block text-5xl">
          Our Services
          <Image
            src={"/curve.png"}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
            width={100}
            height={100}
          />
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
        {cardData.map((card, index) => (
          <CardContainer key={index}>
            <CardBody
              className="bg-gradient-to-b from-neutral-900 to-black border-neutral-700 relative group/card 
                hover:shadow-2xl hover:shadow-emerald-500/[0.1] w-auto sm:w-[30rem] h-[460px] 
                rounded-xl p-6 border"
            >
              <CardItem translateZ="50" className="text-xl font-bold text-white">
                {card.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-300 h-[60px] text-xs max-w-md mt-2 text-left">
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-6">
                <Image
                  src={card.imageSrc}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={card.title}
                />
              </CardItem>
              <div className="flex justify-end items-right mt-6">
                
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
};

