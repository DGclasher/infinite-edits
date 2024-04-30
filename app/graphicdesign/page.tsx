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
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9b9515119487117.609e6f800244a.jpg",
    alt: "Design 6",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0bfb4a131265235.6191fd248a2d5.png",
    alt: "Design 7",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/195b1b119483967.609e6044359f8.jpg",
    alt: "Design 8",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/477d14119484183.609e6162c9c28.jpg",
    alt: "Design 9",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/985170124438157.6103df032f7b5.jpg",
    alt: "Design 10",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/876c0e123741367.60f527fea454a.png",
    alt: "Design 11",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/85bc83127576059.61447a055f384.png",
    alt: "Design 12",
    type: "image",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/587897127574727.6144746ab6d3f.png",
    alt: "Design 12",
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
    <div className="bg-black relative bg-grid-white/[0.08] overflow-x-hidden text-center">
      <div className="absolute -top-80 z-10 flex left-0 items-center">
        <div className="w-[500px] h-[1000px] -rotate-45  rounded-full z-2 blur-3xl bg-gradient-to-br from-indigo-600/50 to-transparent "></div>
      </div>
    <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
    <div className="relative mb-12">
            <span className="relative text-white inline-block text-4xl">
              Graphic Design
              <Image
                src={"/curve.png"}
                className="absolute top-full left-0 w-full mt-1"
                alt="Curve"
                width={100}
                height={100}
              />
            </span>
          </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
        Explore our graphic design works.
      </p>
    </div>

    <div className="w-full columns-1 z-10 relative md:columns-2 lg:columns-3 space-y-5 gap-5 p-5 ">
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

      {file ? (
        file.type === "video" ? (
          <video src={file.src} autoPlay controls className="w-full h-full" />
        ) : file.src ? (
          <Image
            src={file.src}
            alt="Media content"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        ) : (
          <div className="text-center">No Image Available</div>
        )
      ) : (
        <div className="text-center">No Content to Display</div>
      )}
    </div>
  </div>
  );
};

export default GraphicDesign;
