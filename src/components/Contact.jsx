import React from "react";

const Contact = () => {
  return (
    <div className="py-32 px-40 w-full">
      <div className="flex flex-col items-start justify-center text-center">
        <p className="font-bold text-4xl mb-8">Contact</p>
        <div className="flex flex-col items-center justify-center text-center w-full">
          <p className="font-bold text-center mb-6">
            Fill out this form to reach us.{" "}
          </p>
          <form className="w-[600px]">
            <div className="flex items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-300 text-gray-600 py-2 px-4 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-300 text-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-300 text-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Phone (Optional)"
                className="bg-gray-300 text-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <textarea
                type="text"
                rows={5}
                placeholder="Message"
                className="bg-gray-300 text-gray-600 py-2 px-4 w-full"
              />
            </div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <button className="bg-[#91D2F7] font-bold text-xl text-black py-2 px-16 rounded">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
