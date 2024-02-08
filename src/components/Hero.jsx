import React from "react";

const Hero = () => {
  return (
    <div className="py-24 px-32">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="text-[50px] font-bold w-[700px]">
          It doesn’t matter what{" "}
          <span className="text-[#FFFF00]">JS Framework</span> you work with.
        </p>
        <p className="text-2xl">
          Our boilerplates works with it{" "}
          <span className="text-[#91D2F7]">out-of-the-box.</span>
        </p>
        <div className="flex items-center justify-center text-center gap-8 my-8">
          <button className="bg-[#FFFF00] text-black rounded py-2 px-4 font-bold text-xl">
            Get Started
          </button>
          <button className="bg-black text-[#FFFF00] border-[#FFFF00] border-[1px] rounded py-2 px-4 font-bold text-xl">
            See Repo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
