import React from "react";

const Clients = () => {
  return (
    <div className="py-32 px-40">
      <div className="flex flex-col justify-center items-center text-center">
        <p className="font-bold text-xl">Supported and backed by:</p>
        <div className="flex flex-col items-center justify-center w-[850] gap-8 my-8">
          <div className="flex items-center gap-8">
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
            <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
              Google
            </div>
          </div>
        </div>
        <div className="w-[513px] text-center flex flex-col justify-center items-center">
          <p className="text-3xl font-bold">Less code. More product.</p>
          <p>
            By using our UI Kit, we make sure you only get to{" "}
            <span className="text-[#FFFF00] font-bold">focus more</span> on the
            other things that matter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
