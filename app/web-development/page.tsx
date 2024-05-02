import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { LuScale3D } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";

const WebDevelopment = () => {
  return (
    <div className="bg-gradient-to-b  from-indigo-600/20 min-h-screen flex max-w-screen pb-16 flex-col justify-center items-center">
      <div className="p-8 flex flex-col h-[40rem] items-center py-16 justify-center text-center">
        <h1 className="text-5xl text-white font-bold">
          <span className="bg-clip-text  text-transparent bg-gradient-to-br from-indigo-50 to">
            Website Development Services
          </span>
          <span className="text-2xl text-neutral-400 block py-4">
          Create Your Digital Home With Us
          </span>
        </h1>
        <p className="text-neutral-400  text-sm  relative z-10">
          <span className="block py-1">
          Your website is the heart of your digital identity, a central hub where your brand comes to life.
          </span>
          <span className="block py-1">
          Our team of skilled designers and developers are experts at creating visually stunning and highly functional websites tailored to your business needs. 
          </span>{" "}
          <span className="block py-1">
          Whether you&apos;re looking to create an e-commerce platform, a professional portfolio, or a complex enterprise site, we provide seamless solutions that drive results.
          </span>
        </p>
        <Link
          href={"/contact"}
          className="bg-gradient-to-r text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
        >
          Contact us <FaArrowRight />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="flex flex-col gap-8 w-full md:w-3/4 lg:w-1/2 px-4 ">
          <h2 className="text-4xl text-white pb-4">Why choose us ?</h2>
          <div className="w-full flex flex-col gap-4 bg-gradient-to-b from-neutral-950/20 to-black p-8 rounded-xl border border-neutral-800">
            <div className="flex gap-4 items-center z-10">
              <div className="bg-gradient-to-r from-indigo-500 to bg-indigo-800 p-2 h-10 text-center flex justify-center r w-12 rounded-full text-white items-center gap-2">
                <span className="text-2xl">
                  <MdDesignServices />
                </span>
              </div>
              <div>
                <p className="text-neutral-200 text-xl font-bold">
                  Tailored Design
                </p>
                <p className="text-neutral-400">
                  {" "}
                  Every design element is chosen to enhance your brand&apos;s
                  uniqueness.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-indigo-500 to bg-indigo-800 p-2 h-10 text-center flex justify-center r w-12 rounded-full text-white items-center gap-2">
                <span className="text-2xl">
                  <LuScale3D />
                </span>
              </div>
              <div>
                <p className="text-neutral-200 text-xl font-bold">
                  Scalable Solutions
                </p>
                <p className="text-neutral-400">
                  From small startups to large enterprises, our platforms grow
                  with your business.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-indigo-500 to bg-indigo-800 p-2 h-10 text-center flex justify-center r w-12 rounded-full text-white items-center gap-2">
                <span className="text-2xl">
                  <BiSupport />
                </span>
              </div>
              <div>
                <p className="text-neutral-200 text-xl font-bold">
                Comprehensive Support
                </p>
                <p className="text-neutral-400">
                Our team is with you every step of the way, ensuring your site remains optimized.
                </p>
              </div>
            </div>
          </div>
          <Link
            href={"/contact"}
            className="bg-gradient-to-r mx-auto w-48 text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
          >
            Contact us <FaArrowRight />
          </Link>
        </div>

        <div className="w-full md:w-3/4 lg:w-1/2 px-4 flex justify-center items-center">
          <Image
            src="/web_development_hero.png"
            alt="digital marketing"
            width={400}
            height={400}
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default WebDevelopment;
