"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ImageData {
  src: string;
  alt: string;
  type: string;
}

const imageData: ImageData[] = [
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371381/thumbnails/hdkng6mnvqgeabqyjdwq.png",
    alt: "Design 1",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371360/thumbnails/oo7dbybqyp6rzkttynya.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371344/thumbnails/hpxawsqpuenv1zqtqbyu.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371323/thumbnails/ynrclc9eydtgfdqlc5lj.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371303/thumbnails/uham1hoe6i5hyxuzdibe.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371277/thumbnails/gvboxfv9brzc1jpfsrec.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371245/thumbnails/b8zfhjz6duyngfkvqv5f.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371208/thumbnails/ofvirq1t82elhx3u9eei.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371190/thumbnails/ieatv9skzaaqzvkzdxcr.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371168/thumbnails/b90l2mhkjjyokr2lmr23.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371140/thumbnails/ube5oat5qqjpvaw6jlof.png",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371121/thumbnails/u4c1mbwgxvbcsnb4dplr.png",
    alt: "Design 2",
    type: "image",
  },
  
];

const Thumbnails = () => {
  const [file, setFile] = useState<{
    alt: string;
    type: string;
    src: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (img: ImageData) => {
    setFile(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFile(null);
  };
  return (
    <div className="bg-gradient-to-b  from-neutral-950  max-w-screen  overflow-x-hidden text-center px-4 md:px-8 lg:px-16">
      <BackgroundBeams />
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">

      <div className="relative mb-12 flex flex-col justify-center items-center w-full">
            <span className="relative text-white inline-block text-4xl md:text-5xl">
              Thumbnails
              <Image
                src={"/curve.png"}
                className="absolute top-full left-0 w-full mt-1"
                alt="Curve"
                width={100}
                height={100}
              />
            </span>
          
        <p className="pt-16 text-white text-lg font-normaltext-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our creative and attractive thumbnails.
        </p>
        <Link
          href={"/contact"}
          className="bg-gradient-to-r w-48 text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
        >
          Contact us <FaArrowRight />
        </Link>
        </div>
      </div>

      <div className="w-full columns-1 relative z-20 md:columns-2 lg:columns-3 space-y-5 gap-5 p-5 ">
        {imageData.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => openModal(data)}
              className="overflow-hidden  p-2"
            >
              <Image
                key={index}
                className=" overflow-hidden object-cover w-full cursor-pointer h-auto shadow-lg"
                src={data.src}
                alt="Porfolio_img"
                width={500}
                height={500}
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
            <div className="text-center">No Image Available</div> // Default message or image
          )
        )
      ) : (
        <div className="text-center">No Content to Display</div> // If no file is set
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

export default Thumbnails;
