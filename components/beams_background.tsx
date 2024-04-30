"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-[40rem] px-4 md:px-8 lg:px-12 w-full rounded-md bg-gradient-to-b from-neutral-950  relative flex lg:flex-row flex-col items-center justify-center antialiased">
            <div className="flex flex-col w-1/2 items-center justify-center text-center p-4 gap-6">
                <h1 className="relative school leading-loose z-10 text-lg  md:text-6xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-400 to-indigo-900">
                        Comprehensive Video Editing Course
                    </span>
                    <span className="text-3xl text-neutral-400 block py-4">
                        From basics to advanced
                    </span>
                </h1>

                <p></p>
                <p className="text-neutral-400  text-sm  relative z-10">
                    Join our immersive offline course designed for aspiring video editors who want to master the art of editing from the ground up. This comprehensive program not only equips you with fundamental and advanced editing skills but also offers real-world experience through internships and job assistance. Whether you're a beginner looking to start a career or an enthusiast wanting to polish your skills, this course will set you on the right path.
                    
                </p>
                <button className="text-white bg-gradient-to-r from-indigo-800/20 to-black border border-indigo-500 px-6 py-2 rounded-xl">
                    Register Now
                </button>
            </div>
           
            <BackgroundBeams />
        </div>
    );
}
