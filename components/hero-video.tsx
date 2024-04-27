"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <></>
        }
      >
        <video
          src="/hero.mp4" 
          autoPlay
          loop
          muted
          controls={false}  
          className="mx-auto rounded-2xl object-cover h-full w-full"  
          draggable={false}  
        />
      </ContainerScroll>
    </div>
  );
}
