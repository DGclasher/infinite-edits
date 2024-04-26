import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="overflow-x-hidden relative h-screen max-w-screen flex flex-col justify-center items-center"> 
    
    <div className='absolute top-0 z-10 flex items-center'>
              <div className='w-[450px] h-[350px]  rounded-full z-2 blur-3xl bg-gradient-to-br from-indigo-800/50 to-transparent'></div>
             
    </div> 
      <div className="h-full w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center overflow-x-hidden">  
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="p-4 mx-auto relative z-2 w-full pt-10 md:pt-20 px-2">  
          <div className=" pb-5 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-300 bg-opacity-50">
          <span className="text-3xl">Welcome to</span><br/> <span className="text-6xl font-bold">Infinite Edits</span> <br/><span className="text-3xl">where your vision meets our creativity.</span>
          </div>
          
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Specialising in high-quality video editing, graphic design, and motion graphics, we turn your raw footage into polished stories ready to captivate audiences </p>
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
