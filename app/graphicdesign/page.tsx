"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageData {
  src: string;
  alt: string;
  type: string;
}

const imageData: ImageData[] = [
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a8505193865991.65f2b131db88e.png",
    alt: "Design 1",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2a67e193775429.65f16d1a841a5.jpg",
    alt: "Design 2",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8c7482131344465.61936e5885b70.png",
    alt: "Design 3",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fed94b131335151.61933f893efb5.png",
    alt: "Design 4",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8ac97b130113617.61793b41d27ed.png",
    alt: "Design 5",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e2e29a130036135.6177dae74b5bf.png",
    alt: "Design 6",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0bfb4a131265235.6191fd248a2d5.png",
    alt: "Design 7",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e22cbd130028287.6177b933d12a7.png",
    alt: "Design 8",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ced355130028287.6177b933d1685.png",
    alt: "Design 9",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6e3d20130031573.6177c8e4c07c7.png",
    alt: "Design 10",
    type: "image",
  },
  
];

const GraphicDesign = () => {
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
    <div className="bg-black relative bg-grid-white/[0.08]">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl mt-16 md:text-5xl mb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Graphic Design Works
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Explore our graphic design works.
        </p>
      </div>

      <div className="w-full columns-1 z-10 md:columns-2 lg:columns-3 space-y-5 gap-5 p-5 ">
        {imageData.map((data, index) => {
          return (
            <div
              key={index}
              onClick={() => openModal(data)}
              className="overflow-hidden rounded-xl p-2"
            >
              <Image
                key={index}
                className="rounded-xl overflow-hidden object-cover w-full cursor-pointer h-auto shadow-lg"
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

        {file?.type === "video" ? (
          <video src={file?.src} autoPlay controls className="w-full h-full" />
        ) : (
          <img
            src={file?.src}
            alt="Image"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default GraphicDesign;
