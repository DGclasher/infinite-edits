import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="overflow-x-hidden relative   antialiased  h-full max-w-screen flex flex-col justify-center items-center">

      <div className='absolute -top-20 z-10 flex items-center '>
        <div className='w-[500px] h-[350px]  rounded-full z-2 blur-3xl bg-gradient-to-br from-indigo-600/50 to-transparent '></div>

      </div>
      <div className="h-screen w-full bg-black bg-grid-white/[0.02] flex  items-center justify-center overflow-x-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


        <div className="p-20 z-10 flex flex-col w-full  h-full  items-center gap-16  z-1  pt-10 md:pt-40 ">
          <div className=" w-full h-full flex flex-col text-center justify-center items-center p-8 ">
            <div className="  ">
              <span className="text-xl text-white bg-zinc-200 bg-opacity-25 backdrop-blur-md border border-zinc-500 rounded-lg my-2 inline-block px-2">Welcome to</span><br /> <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-400 to bg-indigo-800 ">Infinity Edits</span> <br /><span className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-500  mt-2 block">where your vision meets our creativity.</span>
            </div>

            <p className="mt-8 text font-normal text-neutral-300 max-w-lg  ">
              Specialising in high-quality video editing, graphic design, and motion graphics, we turn your raw footage into polished stories ready to captivate audiences </p>

            <div className="flex items-center gap-8 py-8">
              <Link
                href="/contact"
                className="
            bg-gradient-to-l from-indigo-500 to bg-indigo-900 px-6 py-3 rounded-full text-white flex items-center gap-2
            "
              >
                Explore our works <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className=" bg-zinc-500/25
                backdrop-blur-md border border-zinc-500  py-3
            text-white px-6 rounded-full
            "
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="w-1/2 relative">
  <div className="relative rounded-2xl overflow-hidden">
    <Image
      priority
      src="/laptop.png"
      alt="logo"
      width={500}
      height={500}
      className="z-10"
    />
    <video autoPlay loop muted className="absolute w-[380px] h-[232px] top-4 left-[60px] object-cover">
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  </div>
</div>



        </div>
      </div>
    </div>
  );
}
