import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { AuroraBackgroundDemo } from "@/components/aurorabg";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative max-w-screen"> 
    
      <Spotlight className="hidden overflow-x-hidden max-w-screen md:flex md:-top-80 left-80" fill="white" />
      <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center overflow-x-hidden">  
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">  
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            Create, grow, and <br /> scale your business
          </div>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
            Custom tailored solutions for your business. We are a team of
            creatives who are excited to help you grow your business.
          </p>

          <Link
            href={"/book"}
            className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
          >
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
}
