"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-bg";
import Link from "next/link";

export function AuroraBackgroundDemo(className: any) {
  return (
    <AuroraBackground className={className}>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            Create, grow, and <br /> scale your business
          </div>
          <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
            Custom tailored solutions for your business. We are a team of
            creatives who are excited to help you grow your business.
          </p>

          <Link
            href={"/book"}
            className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white "
          >
            Book a call
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
