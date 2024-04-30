import React from "react";

const stepsData = [
  {
    title: "Visit Our Website",
    description: "Go to the Infinite Media School section on the Infinite Edits website.",
  },
  {
    title: "Registration Portal",
    description: "Click on the 'Register Now' button to access the registration form.",
  },
  {
    title: "Fill Out the Form",
    description: "Provide necessary personal information, educational background, and any prior experience in video editing.",
  },
  {
    title: "Submit the Form",
    description: "Complete the registration by submitting the form online.",
  },
  {
    title: "Admission Confirmation",
    description: "Receive an email confirmation of your enrollment and further instructions.",
  },
];

export function AnimatedPinDemo() {
  return (
    <div className="px-4 w-full flex items-center flex-col justify-center ">
      <h2 className="text-3xl text-white py-8">Enrollment Process</h2>
      <div className="relative w-full max-w-xl">
        {stepsData.map((step, index) => (
          <div key={index} className="flex items-center space-x-6 mb-8 relative">
            <div className="flex-shrink-0 h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center relative">
              <span className="text-white z-10">{index + 1}</span>
              {index !== 4 && (
                <div className="absolute top-[48px] left-[22px] h-[80px] w-[3px] border-l-2 bg-gradient-to-b from-neutral-500 to black"></div>
              )}
            </div>
            <div className="flex flex-col ml-4">
              <h3 className="font-bold text-lg text-indigo-500">{step.title}</h3>
              <p className="text-neutral-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
