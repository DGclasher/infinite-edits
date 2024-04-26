import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar/>
      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-5xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Welcome to Infinite Edits<br/> where your vision meets our creativity.
        </div>
        <p className="mt-4 text- font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        We can edit videos that help you get more leads, save your time and make you more money
        </p>
        <p className="mt-4  font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        Specialising in high-quality video editing, graphic design, and motion graphics, we turn your raw footage into polished stories ready to captivate audiences
        </p>

        <Link
          href={"/book"}
          className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
        >
          Book a call
        </Link>
        </div>

    </div>
  );
}
