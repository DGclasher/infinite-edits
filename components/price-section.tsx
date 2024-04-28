import { FaCheckCircle } from "react-icons/fa";

const PricingSection = () => {
  return (
    <div className="w-full z-10 font-normal my-16 h-auto items-center text-center justify-center rounded-xl p-8 overflow-x-hidden">
      <div className="relative mb-16">
        <span className="relative text-white inline-block text-5xl">
          Pricing
          <img
            src={'curve.png'}
            className="absolute top-full left-0 w-full mt-1"
            alt="Curve"
          />
        </span>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center mx-auto">
        {/* Pricing Cards */}
        <div className="bg-gradient-to-b h-[650px] py-8 from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-xl w-[350px] shadow-md p-6">
          <h2 className="text-2xl  text-white font-semibold mb-1">Shorts</h2>
          <p className="text-neutral-300 mb-8">This package includes short video editing services.</p>
          <p className="text-5xl font-bold text-gray-200">₹ 500</p>
          <button className="w-full justify-center text-center  bg-indigo-700 px-6 py-3 rounded-xl text-white flex items-center gap-2 mt-4">Get Started </button>
          <ul className="mt-4 text-start text-gray-300  space-y-4">
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>Up to 30 seconds of video</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>Basic editing and transitions</li>
            <li className="flex items-center gap-2  py-4"><FaCheckCircle className="text-green-500"/>Standard resolution output</li>
          </ul>
        </div>

        <div className="bg-gradient-to-b h-[650px] py-8 from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-xl w-[350px] shadow-md p-6">
          <h2 className="text-2xl  text-white font-semibold mb-1">Reels video edit</h2>
          <p className="text-neutral-300 mb-8"> Includes comprehensive video editing services.</p>
          <p className="text-5xl font-bold text-gray-200">₹ 3000</p>
          <button className="w-full justify-center text-center  bg-indigo-700 px-6 py-3 rounded-xl text-white flex items-center gap-2 mt-4">Get Started </button>
          <ul className="mt-4 text-start text-gray-300 text space-y-4">
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>Up to 5 minutes of video</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>Advanced editing and effects</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>High-resolution output</li>
            <li className="flex items-center gap-2 py-4"><FaCheckCircle className="text-green-500"/>Customized transitions and animations</li>
          </ul>
        </div>

        <div className="bg-gradient-to-b h-[650px] py-8 from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-xl w-[350px] shadow-md p-6">
          <h2 className="text-2xl  text-white font-semibold mb-1">Long video edits</h2>
          <p className="text-neutral-300 mb-8">Get a custom quote for your specific video editing needs.</p>
          <p className="text-5xl font-bold text-gray-200">₹ 5000</p>
          <button className="w-full justify-center text-center  bg-indigo-700 px-6 py-3 rounded-xl text-white flex items-center gap-2 mt-4">Get Started </button>
          <ul className="mt-4 text-start text-gray-300  space-y-4">
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>Customized video editing solutions</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>Highly detailed and personalized editing</li>
            <li className="flex items-center gap-2 border-b py-4"><FaCheckCircle className="text-green-500"/>Interactive elements and special effects</li>
            <li className="flex items-center gap-2  py-4"><FaCheckCircle className="text-green-500"/>Unlimited revisions</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
