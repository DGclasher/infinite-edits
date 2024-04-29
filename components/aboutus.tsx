import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="w-full z-10 font-normal h-auto items-center   rounded-lg  p-2 overflow-x-hidden">
      <div className="flex flex-row-reverse justify-center gap-16">
        <div className="flex flex-col w-full md:w-1/2 ">
          <div className="relative text-center">
            <span className="relative text-white inline-block text-4xl md:text-5xl">
              About Us
              <Image
                src={"/curve.png"}
                className="absolute top-full left-0 w-full mt-1"
                alt="Curve"
                width={100}
                height={100}
              />
            </span>
          </div>

          <div className="py-8 w-full  ">
            <p className="mt-4  text-neutral-300  py-8">
              Founded in 2024, Infinite Edits has grown from a passionate duo to
              a full-fledged team of creative professionals dedicated to
              excellence in video editing and multimedia design. Our journey is
              one of innovation, quality, and client satisfaction.
            </p>
            <div className="w-full h-[1px] bg-gradient-to-r from-zinc-500 to-transparent"></div>
          </div>

          <div className="w-full bg-gradient-to-r from-zinc-900 to-zinc-950  rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-4 text text-neutral-300">
              Our mission is to provide exceptional visual editing services that
              enhance storytelling and engage viewers, using the latest
              technology and creative techniques.
            </p>
          </div>
        </div>
        <video
          className="w-80 h-[400px] object-cover hidden md:flex rounded-xl  mt-8"
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/dpzciuywe/video/upload/v1714333114/shorts/w2ugziuwgd24smkln97g.mp4"
          poster="/thumbnail_video_2.jpg"
        ></video>
      </div>
    </div>
  );
}
