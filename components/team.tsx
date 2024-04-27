const TeamSection = () => {
  return (
    <div className="w-full z-10 font-normal my-16 h-auto items-center text-center justify-center rounded-lg p-8 overflow-x-hidden">
      <div className="relative mb-16">
  <span className="relative text-white inline-block text-5xl">
    Our Team
    <img
      src={'curve.png'}
      className="absolute top-full left-0 w-full mt-1"
      alt="Curve"
    />
  </span>
</div>

      <div className="flex flex-wrap  gap-8 justify-center items-center mx-auto">
        {/* Team Member Cards */}
        <div className="bg-gradient-to-b from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-lg w-[350px] shadow-md p-6">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member 1"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg text-white font-semibold">John Doe</h2>
          <p className="text-sm text-gray-200">CEO</p>
          <p className="mt-4 text-xs  text-gray-300">
            John Doe is the CEO of our company. He is an expert in leading teams
            and managing projects.
          </p>
        </div>

        <div className="bg-white bg-gradient-to-b from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-lg w-[350px] shadow-md p-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member 2"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg text-white font-semibold">Jane Smith</h2>
          <p className="text-sm text-gray-200">Designer</p>
          <p className="mt-4 text-gray-300 text-xs">
            Jane Smith is our talented designer who brings creativity and
            innovation to every project
          </p>
        </div>

        <div className="bg-white bg-gradient-to-b from-neutral-800 to-black backdrop-blur-md border border-neutral-600 rounded-lg  w-[350px] shadow-md p-6">
          <img
            src="https://images.unsplash.com/photo-1530785602389-07594beb8b73?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Team Member 3"
            className="w-full h-60 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg text-white font-semibold">Alex Johnson</h2>
          <p className="text-sm text-gray-200">Developer</p>
          <p className="mt-4 text-gray-300 text-xs">
            Alex Johnson is a skilled developer with a passion for coding and
            building innovative solutions.
          </p>
        </div>

        {/* Add more team member cards as needed */}
      </div>
    </div>
  );
};

export default TeamSection;
