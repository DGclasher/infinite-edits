import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const PricingSection = () => {
  return (
    <div className="w-full z-10 font-normal my-16 h-auto items-center text-center justify-center rounded-xl p-8 overflow-x-hidden">
      <div className="relative mb-16">
        <span className="relative text-white inline-block text-4xl md:text-5xl">
          Pricing
          <Image
            width={300}
            height={100}
            src={'/curve.webp'}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center mx-auto">
        {/* Pricing Cards */}
        <div className="bg-gradient-to-b h-[650px] py-8 from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-xl w-[350px] shadow-md p-6">
          <h2 className="text-2xl  text-white font-semibold mb-1">Thumbnail</h2>
          <p className="text-neutral-300 mb-8">This package includes high quality thumbnail design.</p>
          <p className="text- text-gray-400">starting at</p>
          <p className="text-5xl font-bold text-gray-200">₹ 200</p>
          <Link href={"/contact"} className="w-full justify-center text-center  bg-indigo-700 px-6 py-3 rounded-xl text-white flex items-center gap-2 mt-4">Get Started </Link>
          <ul className="mt-4 text-start text-gray-300 space-y-4">
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500" />High-resolution thumbnail designs</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500" />Customized layouts and compositions</li>
            <li className="flex items-center gap-2 py-4"><FaCheckCircle className="text-green-500" />Professional image editing and enhancement</li>
          </ul>

        </div>

        <div className="bg-gradient-to-b h-[650px] py-8 from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-xl w-[350px] shadow-md p-6">
          <h2 className="text-2xl  text-white font-semibold mb-1">Reels / Shorts Edit</h2>
          <p className="text-neutral-300 mb-8"> Includes comprehensive video editing services.</p>
          <p className="text- text-gray-400">starting at</p>
          <p className="text-5xl font-bold text-gray-200">₹ 500</p>
          <Link href={"/contact"} className="w-full justify-center text-center  bg-indigo-700 px-6 py-3 rounded-xl text-white flex items-center gap-2 mt-4">Get Started </Link>
          <ul className="mt-4 text-start text-gray-300  space-y-4">
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500" />Up to 60 seconds of video</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500" />Basic editing and transitions</li>
            <li className="flex items-center gap-2  py-4"><FaCheckCircle className="text-green-500" />Standard resolution output</li>
          </ul>
        </div>

        <div className="bg-gradient-to-b h-[650px] py-8 from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-xl w-[350px] shadow-md p-6">
          <h2 className="text-2xl  text-white font-semibold mb-1">Long form Video Edits</h2>
          <p className="text-neutral-300 mb-8">Get a custom quote for your specific video editing needs.</p>
          <p className="text- text-gray-400">starting at</p>
          <p className="text-5xl font-bold text-gray-200">₹ 3000</p>
          <Link href={"/contact"} className="w-full justify-center text-center  bg-indigo-700 px-6 py-3 rounded-xl text-white flex items-center gap-2 mt-4">Get Started </Link>
          <ul className="mt-4 text-start text-gray-300 text space-y-4">
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500" />Up to 10 minutes of video</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500" />Advanced editing and effects</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500" />High-resolution output</li>
            <li className="flex items-center gap-2 py-4"><FaCheckCircle className="text-green-500" />Customized transitions and animations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
