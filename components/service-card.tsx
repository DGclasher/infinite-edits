"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

// Define a type for card properties
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick: () => void; // Function to handle button click
}

// List of card data
const cardData: ServiceCardProps[] = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective.",
    imageSrc: "https://www.gigsified.com/public/files/gigs/full/c1f5e01d_1.png",
    onClick: () => alert("Sign up clicked!"),
  },
  {
    title: "Create stunning animations",
    description: "Learn to create beautiful animations with simple CSS techniques.",
    imageSrc: "https://assets-global.website-files.com/646e2eaef4ea8c90fde6a519/64d32b9df6c651a09a133902_How%20to%20use%20motion%20graphics%20in%20your%20marketing.webp",
    onClick: () => console.log("Animation card clicked!"),
  },
  {
    title: "Boost your creativity",
    description: "Discover new ways to boost your creativity in web design.",
    imageSrc: "https://verbit.ai/wp-content/uploads/2023/12/an-impressive-looking-computer.jpg",
    onClick: () => console.log("Creativity card clicked!"),
  },
  {
    title: "Boost your creativity",
    description: "Discover new ways to boost your creativity in web design.",
    imageSrc: "https://inspiria.edu.in/wp-content/uploads/Career-in.-graphic-designers.webp",
    onClick: () => console.log("Creativity card clicked!"),
  },
];

// Render the ServiceCard component with multiple cards
export function ServiceCards() {
  return (
    <div className="py-20 text-center">
    <div className="relative mb-16">
  <span className="relative text-white inline-block text-5xl">
    Our Services
    <img
      src={'curve.png'}
      className="absolute top-full left-0 w-full mt-1"
      alt="Curve"
    />
  </span>
</div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">  {/* Container to wrap the cards */}
      {cardData.map((card, index) => (  // Map through the card data to create multiple cards
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gradient-to-b from-neutral-900 to-black border-neutral-700 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-white">
              {card.title}  {/* Use the title from card data */}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2">
              {card.description}  {/* Use the description from card data */}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.imageSrc}  // Use the image source from card data
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                onClick={card.onClick}  // Attach the onClick function
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </div>
  );
}
