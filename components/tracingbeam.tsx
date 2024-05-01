"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6 my-24">
            <div className="w-full mx-auto text-white antialiased pt-4 relative">
            <h2 className="text-4xl font-bold pb-16 text-indigo-500">Curriculum Overview</h2>
                <div className="grid grid-cols1 md:grid-cols-2 gap-8">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className=" border border-neutral-800 bg-gradient-to-b from-neutral-950 to-black rounded-xl p-4">
                         <h2 className="bg-indigo-800 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                         {item.time}
                        </h2>

                        <p className={("text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-sm prose prose-sm dark:prose-invert">
                            {item.description}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
      time: "Week 1-3",
      title: "Introduction to Video Editing",
      description: (
        <>
         
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Understanding the video editing workspace</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Basics of video formats and codecs</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Introduction to editing software (Adobe Premiere Pro, Final Cut Pro)</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Basic video cuts and transitions</div>
              </div>
           
        </>
      ),
    },
    {
      time: "Week 4-6",
      title: "Intermediate Editing Skills",
      description: (
        <>
          
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Timeline editing and layer management</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Color correction and grading</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Audio editing and sound effects</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Introduction to visual effects and compositing</div>
              </div>
          
        </>
      ),
    },
    {
      time: "Week 7-9",
      title: "Advanced Editing Techniques",
      description: (
        <>
         
              <div className="flex py-1  items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Multi-camera editing techniques</div>
              </div>
              <div className="flex py-1  items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Advanced color grading using DaVinci Resolve</div>
              </div>
              <div className="flex py-1  items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Creating motion graphics with Adobe After Effects</div>
              </div>
              <div className="flex  py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Narrative techniques and storytelling through editing</div>
              </div>
            
        </>
      ),
    },
    {
      time: "Week 10-12",
      title: "Professional Skills Development",
      description: (
        <>
        
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="">Editing for different platforms (social media, broadcast, documentary)</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Workflow optimization and project management</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Portfolio development and personal branding</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Ethics and legal considerations in video editing</div>
              </div>
           
        </>
      ),
    },
    {
      time: "Week 13-16",
      title: "Internship and Project Work",
      description: (
        <>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Hands-on project work under professional guidance</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Exposure to real client projects</div>
              </div>
              <div className="flex py-1 items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-indigo-600"></div>
                <div className="flex-1">Feedback sessions and performance reviews</div>
              </div>
            
        </>
      ),
    },
  ];
  
