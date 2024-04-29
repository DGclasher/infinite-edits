"use client";
import React, { useState } from "react";
import { Slider } from "./slider";
import Link from "next/link";
import Image from "next/image";
interface MediaItem {
  title: string;
  type: "video" | "image";
  url: string;
  poster: string;
}

const medias: MediaItem[] = [
  {
    title: "Reel 1",
    type: "video",
    url: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714303094/shorts/mmlthduxthnprfkpp1ym.mp4",
    poster: "/thumbnail_video_1.png"
  },
  {
    title: "Reel 2",
    type: "video",
    url: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714333114/shorts/w2ugziuwgd24smkln97g.mp4",
    poster: "/thumbnail_video_2.png"
  },
  {
    title: "Reel 3",
    type: "video",
    url: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714390286/shorts/dbylhlpzgsalwgg4fsif.mp4",
    poster: "/thumbnail_video_3.png"
  },
];

  const GraphicDesignMedias: MediaItem[] = [
    {
      title: "Design 1",
      type: "image",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6a8505193865991.65f2b131db88e.png",
      poster: ""
    },
    {
      title: "Design 2",
      type: "image",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2a67e193775429.65f16d1a841a5.jpg",
      poster: ""
    },
    {
      title: "Design 3",
      type: "image",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fed94b131335151.61933f893efb5.png",
      poster: ""
    }
  ];

  const MotionMedias: MediaItem[] = [
    {
      title: "Motion 1",
      type: "video",
      url: "https://res.cloudinary.com/dpzciuywe/video/upload/v1714372415/motion-graphics/fnt14kq1q5bgxypk7xud.mp4",
      poster: ""
    },
    
  ];

  const imageData: MediaItem[] = [
    {
      url: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371381/thumbnails/hdkng6mnvqgeabqyjdwq.png",
      title: "Design 1",
      type: "image",
      poster: ""
    },
    {
      url: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371360/thumbnails/oo7dbybqyp6rzkttynya.png",
      title: "Design 2",
      type: "image",
      poster: ""
    },
    {
      url: "https://res.cloudinary.com/dpzciuywe/image/upload/v1714371344/thumbnails/hpxawsqpuenv1zqtqbyu.png",
      title: "Design 2",
      type: "image",
      poster: ""
    },

  ];

const Portfolio: React.FC = () => {
  const [file, setFile] = useState<{
    title: string;
    type: string;
    url: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (media: MediaItem) => {
    setFile(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFile(null);
  };

  return (
    <div className="text-white w-[100vw] flex flex-col justify-center px-4 md:px-16 items-center ">
      <div className=" text-center relative mb-16 z-10">
        <span className="relative text-white inline-block text-5xl">
          Portfolio
          <Image
            src={"/curve.png"}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
            width={100}
            height={100}
          />
        </span>
      </div>
      <div className="flex flex-col gap-20 justify-center items-center w-[100%] md:w-[90%] lg:w-[80%] z-10">
        <div className="">
          <div className="font-bold text-3xl  bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
            Shorts & Reels
          </div>
          <p className="py-4 text-sm md:text-lg text-neutral-400">
            From YouTube videos to corporate documentaries, our team offers
            comprehensive video editing services tailored to meet your needs. We
            handle everything from basic cuts to complex compositions, ensuring
            your message is clear and impactful.
          </p>
          <Link href="/videos" className="inline-flex bg-gradient-to-r from-indigo-500/20 to bg-indigo-900/20 backdrop-blur-md border border-indigo-500 px-4 py-2 rounded-full text-white items-center gap-2" >See all works</Link>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex flex-col lg:flex-row gap-8  py-8">
              {medias.map((media, index) => (
                <div key={index}>
                  <div
                    onClick={() => openModal(media)}
                    style={{ cursor: "pointer" }}
                  >
                    <video

                      className="w-80 rounded-xl h-80 object-cover"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="none"
                      poster={media.poster}
                    >
                      <source src={`${media.url}#t=0.001`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
        <div className=" w-[100%]  relative h-auto flex gap-16 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-xl p-4 md:p-8 justify-between items-center flex-col border border-neutral-700 ">
        <div className="absolute top-20 z-0 flex left-0 items-center">
        <div className="w-[400px] h-[400px] -rotate-45  rounded-full z-2 blur-3xl bg-gradient-to-br from-indigo-600/50 to-transparent "></div>
      </div>
          <div className=" flex flex-col md:flex-row gap-8 items-center z-10 justify-between">
            <div>
            <div className="font-bold text-3xl  bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
              Thumbnail Designs
            </div>

            <p className="py-4 text-sm md:text-lg text-neutral-200">
              Catch your audience&apos;s attention with custom-designed
              thumbnails that stand out. We combine striking visuals and
              typography to maximize your video&apos;s appeal and click-through
              rate.
            </p>
            <Link href="/thumbnails" className="inline-flex bg-gradient-to-r from-indigo-500/20 to bg-indigo-900/20 backdrop-blur-md border border-indigo-500 px-4 py-2 rounded-full text-white items-center gap-2" >See all works</Link>
            </div>
          <Slider />
          </div>
          <div className="flex items-center flex-wrap z-10">
          {
            imageData.map((data, index) => (
              <div key={index} onClick={() => openModal(data)} className="overflow-hidden rounded-xl p-2">
                <Image
                  key={index}
                  className="rounded-xl overflow-hidden object-cover  cursor-pointer h-full  shadow-2xl"
                  src={data.url}
                  alt="Porfolio_img"
                  width={300}
                  height={300}
                />
              </div>
            ))
          }
          </div>
        </div>
        <div className=" w-[100%] h-auto flex gap-12 py-12 justify-between items-center flex-col ">
          <div className="">
            <div className="font-bold text-3xl  bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
              Graphic Designes
            </div>

            <p className="py-4 text-sm md:text-lg text-neutral-200">
              Our graphic design services cover everything from brand identity to digital marketing materials. We craft visuals that resonate with your target audience and communicate your brand message clearly.

            </p>
            <Link href="/graphicdesign" className="inline-flex bg-gradient-to-r from-indigo-500/20 to bg-indigo-900/20 backdrop-blur-md border border-indigo-500 px-4 py-2 rounded-full text-white items-center gap-2" >See all works</Link>
          </div>

          <div className="flex w-full flex-wrap gap-8">
            {
              GraphicDesignMedias.map((media, index) => (
                <div key={index} onClick={() => openModal(media)} className="overflow-hidden rounded-xl p-2">
                  <Image
                    key={index}
                    className="rounded-xl overflow-hidden object-cover  cursor-pointer h-full  shadow-lg"
                    src={media.url}
                    alt="Porfolio_img"
                    width={300}
                    height={300}
                  />
                </div>
              ))
            } 
          </div>
        </div>
        <div className=" w-full h-auto relative z-10 overflow-hidden flex gap-12 py-12 border border-neutral-700 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 rounded-xl justify-between items-center flex-col lg:flex-row ">
           <div className="absolute top-0 z-0 flex left-0 items-center">
        <div className="w-[300px] h-[300px] -rotate-45  rounded-full z-2 blur-3xl bg-gradient-to-br from-indigo-600/50 to-transparent "></div>
      </div>
          <div className="w-full lg:w-1/2 z-10">
            <div className="font-bold text-3xl  bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
              Motion Graphics
            </div>

            <p className="py-4 text-sm md:text-lg text-neutral-200">
            Elevate your content with engaging motion graphics. Ideal for intros, advertisements, and educational videos, our motion designs are crafted to keep your audience engaged.
            </p>
            <Link href="/motion-graphics" className="inline-flex bg-gradient-to-r from-indigo-500/20 to bg-indigo-900/20 backdrop-blur-md border border-indigo-500 px-4 py-2 rounded-full text-white items-center gap-2" >See all works</Link>
          </div>

            <div className="w-full lg:w-1/2">
              {MotionMedias.map((media, index) => (
                <div key={index}>
                  <div
                    onClick={() => openModal(media)}
                    style={{ cursor: "pointer" }}
                  >
                    <video

                      className="w-full rounded-2xl h-auto object-contain"
                      muted
                      autoPlay
                      loop
                      playsInline
                      preload="none"
                      poster={media.poster}
                    >
                      <source src={`${media.url}#t=0.001`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                  </div>
                </div>
              ))}
            </div>
           
         
        </div>
        
      </div>

      {/* Modal for displaying the selected media */}

      <div className="popup-media" style={{ display: file ? "block" : "none" }}>
        <span onClick={() => setFile(null)}>&times;</span>

        {file ? (
        file.type === "video" ? (
          <video src={file.url} autoPlay controls className="w-full h-full" />
        ) : (
          file.url ? (
            <Image
              src={file.url}
              alt="Media content"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          ) : (
            <div className="text-center">No Image Available</div>
          )
        )
      ) : (
        <div className="text-center">No Content to Display</div>
      )}
      </div>
    </div>
  );
};

export default Portfolio;
