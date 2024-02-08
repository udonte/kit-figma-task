import React from "react";

const Nav = () => {
  return (
    <div className="py-12 px-32">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-3xl">JustAnotherUIKit</p>
        </div>
        <div>
          <ul className="flex items-center no-underline gap-8 text-xl">
            <li className="font-bold cursor-pointer">Home</li>
            <li className="font-light cursor-pointer">About</li>
            <li className="font-light cursor-pointer">Contact</li>
            <li className="font-light cursor-pointer">Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
