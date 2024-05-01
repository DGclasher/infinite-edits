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
                            {/* {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )} */}
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
        title: " Introduction to Video Editing",
        description: (
            <>
                <p>
                    Understanding the video editing workspace

                </p>
                <p>
                    Basics of video formats and codecs

                </p>
                <p>
                    Introduction to editing software (Adobe Premiere Pro, Final Cut Pro)

                </p>
                <p>
                    Basic video cuts and transitions

                </p>
            </>
        ),

    },
    {
        time: "Week 4-6",
        title: " Intermediate Editing Skills",
        description: (
            <>
                <p>
                    Timeline editing and layer management

                </p>
                <p>
                    Color correction and grading

                </p>
                <p>
                    Audio editing and sound effects

                </p>
                <p>
                    Introduction to visual effects and compositing

                </p>
            </>
        ),

    },
    {
        time: "Week 7-9",
        title: " Advanced Editing Techniques",
        description: (
            <>
                <p>
                    Multi-camera editing techniques
                </p>
                <p>Advanced color grading using DaVinci Resolve</p>
                <p>Creating motion graphics with Adobe After Effects</p>
                <p>Narrative techniques and storytelling through editing</p>

            </>
        ),
    },
    {
        time: "Week 10-12",
        title: " Professional Skills Development",
        description: (
            <>
                <p>Editing for different platforms (social media, broadcast, documentary)</p>
                <p>Workflow optimization and project management</p>
                <p>Portfolio development and personal branding</p>
                <p>Ethics and legal considerations in video editing</p>

            </>
        )
    },
    {
        time: "Week 13-16",
        title: " Internship and Project Work",
        description: (
            <>
                <p>Hands-on project work under professional guidance</p>
                <p>Exposure to real client projects</p>
                <p>Feedback sessions and performance reviews</p>

            </>
        )
    }
];
