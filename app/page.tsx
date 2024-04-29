"use client";
import AboutUs from "@/components/aboutus";
import { HeroScroll } from "@/components/hero-video";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {TeamSection} from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import PricingSection from "@/components/price-section";
import FAQS from "@/components/faq";
import Portfolio from "@/components/portfolio-section";
import {ServiceCards} from "@/components/service-card"

export default function Home() {
  return (
    <div className="overflow-x-hidden antialiased relative  min-h-screen max-w-screen flex flex-col justify-center items-center">
      <div className="absolute -top-80 z-10 flex left-0 items-center ">
        <div className="w-[500px] h-[1000px] -rotate-45  rounded-full z-2 blur-3xl bg-gradient-to-br from-indigo-600/50 to-transparent "></div>
      </div>

      <div className="min-h-[55rem] px-2 md:px-12 lg:px-24 pt-16 bg-grid-white/[0.05] flex-col overflow-hidden w-full bg-black   flex  items-center justify-center overflow-x-hidden">
        <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="  z-10 flex w-full flex-col lg:flex-row h-full justify-center items-center gap-16  z-1  pt-  ">
          <div className=" w-full h-full flex flex-col justify-center items-start p-8 ">
            <div className="  ">
              <span className="text-xl text-white bg-zinc-200 bg-opacity-25 backdrop-blur-md border border-zinc-500 rounded-xl my-2 inline-block px-2">
                Welcome to
              </span>
              <br />{" "}
              <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-400  to bg-indigo-800 ">
                Infinite Media
              </span>{" "}
              <br />
              <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-500  mt-2 block">
                where your vision meets our creativity.
              </span>
            </div>

            <p className="mt-12 text font-normal text-neutral-300 max-w-lg relative ">
              Specialising in high-quality video editing, graphic design, and
              motion graphics, we turn your raw footage into polished stories
              ready to captivate audiences{" "}
            </p>

            <p className="mt-4 text font-normal text-neutral-300 max-w-lg relative">
            We edit videos that help you get more leads, save your time and make you more money”
            </p>

            <div className="flex flex-col md:flex-row items-start gap-4 py-8">
              <Link
                href="#portfolio"
                scroll={true}
                className="
            bg-gradient-to-l from-rose-500 to bg-indigo-900 px-6 py-3 rounded-full text-white flex items-center gap-2
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
          <div className="w-[100%] hidden md:flex">
            <HeroScroll />
          </div>
        </div>
        <div id="aboutWrapper" className="relative">
          <AboutUs />
          <div id="about" className="absolute -top-[120px] left-0"></div>
        </div>
        <div id="servicesWrapper" className="relative">
          <ServiceCards />
          <div id="services" className="absolute -top-[120px] left-0"></div>
        </div>
        <div id="portfolioWrapper" className="relative">
          <Portfolio />
          <div id="portfolio" className="absolute -top-[120px] left-0"></div>
        </div>
        <div id="teamWrapper" className="relative">
          <TeamSection />
          <div id="team" className="absolute -top-[120px] left-0"></div>
        </div>
        <div id="testimonialWrapper" className="relative">
          <Testimonials />
          <div id="testimonials" className="absolute -top-[120px] left-0"></div>
        </div>
        <div className="relative">
          <PricingSection />
          <div id="pricing" className="absolute -top-[120px] left-0"></div>
        </div>
        <div className="relative">
          <FAQS />
          <div id="faq" className="absolute -top-[120px] left-0"></div>
        </div>
        <Link
          href={"https://wa.me/917780734983?text=hi"}
          className="bg-gradient-to-r from-indigo-950/40 to-neutral-500/20 border border-neutral-500  rounded-full z-50 shadow-2xl p-3 flex items-center gap-2 fixed bottom-4 right-4 backdrop-blur-md"
          target="_blank"
        >
          <Image
            src="/whatsapp.png"
            alt="whatsapp"
            width={100}
            height={100}
            className="w-8 h-8"
          />
          <p className="text-white text-lg">Chat with us</p>
        </Link>
      </div>
    </div>
  );
}
