"use client";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-[40rem] px-4 md:px-8 lg:px-12 w-full overflow-x-hidden  rounded-md bg-gradient-to-b from-neutral-950  relative flex lg:flex-row flex-col items-center justify-center antialiased">
           
            <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 items-center justify-center text-center p-4 gap-6">
                <h1 className="relative school  z-10 text-4xl text  md:text-6xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-50 to">
                        Comprehensive Video Editing Course
                    </span>
                    <span className="text-2xl md:text-3xl text-neutral-400 block py-4">
                        From basics to advanced
                    </span>
                </h1>

        <p></p>
        <p className="text-neutral-400  text-sm  relative z-10">
          Join our immersive offline course designed for aspiring video editors
          who want to master the art of editing from the ground up. This
          comprehensive program not only equips you with fundamental and
          advanced editing skills but also offers real-world experience through
          internships and job assistance. Whether you&apos;re a beginner looking
          to start a career or an enthusiast wanting to polish your skills, this
          course will set you on the right path.
        </p>
        <Link
          href={"/media-school/register"}
          className="bg-gradient-to-r text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
        >
          Register Now <FaArrowRight />
        </Link>
      </div>

      <BackgroundBeams />
    </div>
  );
}
