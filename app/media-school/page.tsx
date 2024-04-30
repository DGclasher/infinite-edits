// pages/CourseRegistration.tsx
import { BackgroundBeamsDemo } from '@/components/beams_background';
import Image from 'next/image';
import { FC } from 'react';
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { GiDuration } from "react-icons/gi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { TracingBeam } from '@/components/ui/tracing-beam';
import { TracingBeamDemo } from '@/components/tracingbeam';
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from '@/components/ui/glowing-cards';
import { FaArrowRight } from 'react-icons/fa';


const CourseRegistration: FC = () => {
  return (
    <div className="bg-grid-white/[0.08] min-h-screen flex max-w-screen pb-16 flex-col justify-center items-center">
        <BackgroundBeamsDemo />
      <div className="  w-full flex flex-col items-center justify-center ">
       
        
        <div className="flex w-[80%] flex-col md:flex-row-reverse justify-around items-center gap-16">
            <div>
            <h2 className="text-3xl font-semibold text-indigo-500 mb-4 flex items-center gap-2 ">Key Features <MdKeyboardCommandKey/></h2>

          <div className="p-6 bg-gradient-to-b from-neutral-900 to-black  rounded-xl border border-neutral-800">
           
            <ul className="list-disc flex flex-col gap-4 list-inside text-white">
              <li className='flex flex-col  '> <p className='text-lg flex font-bold  items-center gap-2'> <GiDuration/>Duration</p> <div>12 weeks (plus 4 weeks of internship)</div> </li>
              <li className='flex flex-col  '><p className='text-lg flex font-bold  items-center gap-2'><IoInformationCircleOutline/> Fomarmat</p> In-person sessions at Infinite Media School</li>
              <li className='flex flex-col  '><p className='text-lg flex items-center font-bold gap-2'><GoProjectRoadmap/>Internship</p>  Hands-on experience with real projects</li>
              <li className='flex flex-col  '><p className='text-lg flex font-bold  items-center gap-2'><MdOutlineWorkOutline/> Job Assistance</p>  Dedicated support for employment</li>
              <li  className='flex  flex-col '><p className='text-lg  flex font-bold  items-center gap-2'><TbCertificate/> Cerfificate</p>  Certificate of Completion</li>
            </ul>
          </div>
          </div>
          <div className=" flex items-center  justify-center">
                <Image
                    src="https://assets-global.website-files.com/63dbade4088853317febd383/63dbade40888535464ebd406_Group%203%20(2).svg"
                    alt="Course"
                    width={350}
                    height={350}
                    className="rounded-lg"
                />
            </div>
          
        </div>
        
        <TracingBeamDemo />
       <button className="bg-gradient-to-r text-xl from-indigo-800/20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500">
                    Register Now <FaArrowRight />
                </button>

      </div>
      
    </div>
  );
};

export default CourseRegistration;
