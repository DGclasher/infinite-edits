import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 overflow-x-hidden">
      <div className="p-8 w-2/3 text-center">
        <h2 className="text-5xl font-bold text-white">About Us</h2>
        <p className="mt-4 text-lg text-neutral-300">
          Founded in 2020, Infinite Edits has grown from a passionate duo to a
          full-fledged team of creative professionals dedicated to excellence in
          video editing and multimedia design. Our journey is one of innovation,
          quality, and client satisfaction.
        </p>
      </div>

      <div className="w-2/3 bg-zinc-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 text-center">
        <h3 className="text-3xl font-semibold text-white">Our Mission</h3>
        <p className="mt-4 text-lg text-neutral-300">
          Our mission is to provide exceptional visual editing services that
          enhance storytelling and engage viewers, using the latest technology
          and creative techniques.
        </p>
      </div>
    </div>  
  );
}
