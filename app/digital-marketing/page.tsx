import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdDataExploration } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import Image from "next/image";

const DigitalMarketing = () => {
  return (
    <div className="bg-gradient-to-b  from-indigo-600/20 min-h-screen flex max-w-screen pb-16 flex-col justify-center items-center">
      <div className="p-8 flex flex-col h-[40rem] items-center py-16 justify-center text-center">
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          <span className="bg-clip-text  text-transparent bg-gradient-to-br from-indigo-50 to">
            Digital Marketing Services
          </span>
          <span className="text-2xl text-neutral-400 block py-4">
            Unleash Your Brand&apos; Potential!
          </span>
        </h1>
        <p className="text-neutral-400  text-sm  relative z-10">
          <span className="block py-1">
            In today&apos;s digital-first world, visibility is everything. Let
            us catapult your brand into the spotlight with our expert Digital
            Marketing services.
          </span>
          <span className="block py-1">
            Our tailored strategies in SEO, social media marketing, and targeted
            ad campaigns are designed to attract, engage, and convert your
            audience into loyal customers.
          </span>{" "}
          <span className="block py-1">
            Experience an unprecedented increase in engagement and ROI as we
            turn your brand into a digital powerhouse.
          </span>
        </p>
        <Link
          href={"/contact"}
          className="bg-gradient-to-r text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
        >
          Contact us <FaArrowRight />
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="flex flex-col gap-8 w-full md:w-3/4 ld:w-1/2 px-4">
          <h2 className="text-4xl text-white pb-4">Why choose us ?</h2>
          <div className="w-full flex flex-col gap-4 bg-gradient-to-b from-neutral-950/20 to-black p-8 rounded-xl border border-neutral-800">
            <div className="flex gap-4 items-center z-10">
              <div className="bg-gradient-to-r from-indigo-500 to bg-indigo-800 p-2 h-10 text-center flex justify-center r w-10 rounded-full text-white items-center gap-2">
                <span className="text-2xl">
                  <MdDataExploration />
                </span>
              </div>
              <div>
                <p className="text-neutral-200 text-xl font-bold">
                  Data-Driven Strategies
                </p>
                <p className="text-neutral-400">
                  {" "}
                  Our approaches are fueled by analytics to ensure maximum
                  impact.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-indigo-500 to bg-indigo-800 p-2 h-10 text-center flex justify-center r w-10 rounded-full text-white items-center gap-2">
                <span className="text-2xl">
                  <MdCampaign />
                </span>
              </div>
              <div>
                <p className="text-neutral-200 text-xl font-bold">
                  Customised Campaigns
                </p>
                <p className="text-neutral-400">
                  We craft marketing efforts that resonate deeply with your
                  target demographic.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-indigo-500 to bg-indigo-800 p-2 h-10 text-center flex justify-center r w-10 rounded-full text-white items-center gap-2">
                <span className="text-2xl">
                  <MdAutoGraph />
                </span>
              </div>
              <div>
                <p className="text-neutral-200 text-xl font-bold">
                  ROI-Focused
                </p>
                <p className="text-neutral-400">
                  Every dollar you spend is an investment in substantial growth.
                </p>
              </div>
            </div>
          </div>
          <Link
            href={"/contact"}
            className="bg-gradient-to-r w-48 text-xl from-indigo-800/20 z-20 to bg-black px-6 py-3 rounded-full text-white flex items-center gap-2 mt-4 border border-indigo-500"
          >
            Contact us <FaArrowRight />
          </Link>
        </div>

        <div className="w-full px-4 lg:w-1/2 md:3/4 flex justify-center items-center">
          <Image
            src="/digital_marketing_hero.png"
            alt="digital marketing"
            width={400}
            height={400}
          />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default DigitalMarketing;
