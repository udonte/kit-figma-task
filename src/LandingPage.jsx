import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Link } from "react-scroll";
import { FaArrowRightLong, FaGithub } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      <div className="py-12 px-32 fixed top-0 left-0 right-0 border-b-2 bg-black border-gray-800 z-50">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-3xl">JustAnotherUIKit</p>
          </div>
          <div>
            <ul className="flex items-center no-underline gap-8 text-xl">
              <li className="font-bold cursor-pointer">
                <Link to="/" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="font-light cursor-pointer">
                <Link to="client" smooth={true} duration={500}>
                  Clients
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
            </ul>
          </div>
        </div>
      </div>
      {/* hero */}
      <div className="py-24 px-32 mt-24" id="/">
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
            <button className="bg-[#FFFF00] text-black rounded py-2 px-4 font-bold text-xl flex items-center gap-2">
              Get Started
              <FaArrowRightLong />
            </button>
            <button className="bg-black text-[#FFFF00] border-[#FFFF00] border-[1px] rounded py-2 px-4 font-bold text-xl flex items-center gap-2">
              See Repo
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
      {/* clients */}
      <div className="py-32 px-40" id="client">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="font-bold text-xl">Supported and backed by:</p>
          <div className="flex flex-col items-center justify-center w-[850] gap-8 my-8">
            <div className="flex items-center gap-8">
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Amazon
              </div>
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Apple
              </div>
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Microsoft
              </div>
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Nike
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Disney
              </div>
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Coca-Cola
              </div>
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Samsung
              </div>
              <div className="bg-gray-300 text-black text-3xl font-bold py-2 px-4">
                Toyota
              </div>
            </div>
          </div>

          <div className="w-[513px] text-center flex flex-col justify-center items-center">
            <p className="text-3xl font-bold">Less code. More product.</p>
            <p>
              By using our UI Kit, we make sure you only get to{" "}
              <span className="text-[#FFFF00] font-bold">focus more</span> on
              the other things that matter.
            </p>
          </div>
        </div>
      </div>
      {/* about */}
      <div className="py-32 px-40" id="about">
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold text-4xl mb-8">About</p>
          <div>
            <p className="font-bold">
              Welcome to JustAnotherUIKit, where innovation meets convenience.
              As passionate creators ourselves, we understand the importance of
              having the right tools at your fingertips. That's why we've
              curated a diverse collection of kits designed to inspire and
              empower. Whether you're a seasoned professional or just starting
              your creative journey, our carefully selected products cater to
              all skill levels and interests. From DIY enthusiasts to seasoned
              artisans, our extensive range includes everything from art
              supplies and crafting essentials to specialized equipment and
              innovative gadgets. With our commitment to quality and customer
              satisfaction, you can trust JustAnotherUIKit to provide you with
              the resources you need to unleash your creativity and bring your
              ideas to life. Join our community today and embark on a journey of
              endless possibilities.
              <br />
              <br />
              We're dedicated to providing top-quality products, ensuring
              satisfaction every step of the way. Our mission is to empower you
              with the tools you need to excel in your endeavors. From crafting
              essentials to specialized gear, we've got you covered. Join us on
              this journey and unlock the potential within. Whether you're an
              artist, crafter, DIY enthusiast, or hobbyist, our diverse range of
              kits has something for everyone. From painting and sculpting
              supplies to crafting essentials and tech gadgets, we've got you
              covered. Our curated selection features top brands, innovative
              products, and exclusive items you won't find anywhere else.
              <br />
              <br />
              But we're more than just a store – we're a hub for creativity and
              community. Join us on social media to connect with fellow
              creators, share your projects, and discover new ideas. Plus, with
              our expert tips, tutorials, and resources, you'll have everything
              you need to unleash your creativity and take your skills to the
              next level. At JustAnotherUIKit, we believe that everyone has the
              potential to create something amazing. So whether you're a
              seasoned pro or just starting out, we're here to support you every
              step of the way. Welcome to our community – let's make something
              incredible together!
            </p>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="py-32 px-40 w-full" id="contact">
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
      {/* footer */}
      <div>
        <div className="py-24 px-40">
          <div className="flex flex-col items-center justify-center text-xl">
            <div className="flex items-start justify-center gap-24">
              <div>
                <ul className="">
                  <li className="font-bold no-underline">JustAnotherKit</li>
                  <li className="no-underline">About Us</li>
                  <li className="no-underline">Our Clients</li>
                  <li className="no-underline">Services</li>
                  <li className="no-underline">Contact Us</li>
                  <li className="no-underline">FAQs</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start gap-2">
                <ul className="">
                  <li className="font-bold no-underline">Blog</li>
                  <li className="no-underline">Terms of Service</li>
                </ul>
                <ul className="">
                  <li className="font-bold no-underline">Privacy Policy</li>
                  <li className="no-underline">Shipping Information</li>
                  <li className="no-underline">Returns & Exchanges</li>
                </ul>
              </div>
              <div>
                <ul className="">
                  <li className="font-bold no-underline">Customer Reviews</li>
                  <li className="no-underline">Affiliate Program</li>
                  <li className="no-underline">Gift Cards</li>
                  <li className="no-underline">Careers</li>
                  <li className="no-underline">Press</li>
                  <li className="no-underline">Accessibility</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start gap-2">
                <ul className="">
                  <li className="font-bold no-underline">Social Media</li>
                  <li className="no-underline">Partnerships</li>
                  <li className="no-underline">Events</li>
                </ul>
                <ul className="">
                  <li className="font-bold no-underline">Customer Support</li>
                  <li className="no-underline">Product Care</li>
                  <li className="no-underline">Sustainability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mb-8 text-center">
          <span className="rounded-full bg-gray-300 text-black text-xs w-4 h-4 flex items-center justify-center p-1 font-bold">
            c
          </span>
          <p className="text-center">2024</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
