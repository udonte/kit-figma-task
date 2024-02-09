import React from "react";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <div className="py-12 px-32">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-3xl">JustAnotherUIKit</p>
        </div>
        <div>
          <ul className="flex items-center no-underline gap-8 text-xl">
            <li className="font-bold cursor-pointer">
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="font-light cursor-pointer">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="font-light cursor-pointer">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li className="font-light cursor-pointer">
              {/* <Link to="blog" smooth={true} duration={500}> */}
              Blog
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
