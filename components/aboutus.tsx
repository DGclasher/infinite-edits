import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="w-full font-normal  items-center text-center  rounded-lg   p-8 overflow-x-hidden">
              <h2 className="text-5xl font-bold text-white">About Us</h2>
              <div className="flex flex-row-reverse justify-center gap-16">

      <div className="flex flex-col w-1/2 ">
      <div className="p-8 w-full text-center">
        <p className="mt-4 text-lg text-neutral-300">
          Founded in 2020, Infinite Edits has grown from a passionate duo to a
          full-fledged team of creative professionals dedicated to excellence in
          video editing and multimedia design. Our journey is one of innovation,
          quality, and client satisfaction.
        </p>
      </div>

      <div className="w-full bg-zinc-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 text-center">
        <h3 className="text-3xl font-semibold text-white">Our Mission</h3>
        <p className="mt-4 text-lg text-neutral-300">
          Our mission is to provide exceptional visual editing services that
          enhance storytelling and engage viewers, using the latest technology
          and creative techniques.
        </p>
      </div>
      </div>
      <video
        className="w-80 object-cover rounded-lg mt-8"
        autoPlay
        loop
        muted
        playsInline
        src="https://assets-global.website-files.com/63dbade4088853317febd383/63dbd0efdb6f3820df325f16_Compilation-transcode.mp4"
      ></video>
      </div>
    </div>  
  );
}
