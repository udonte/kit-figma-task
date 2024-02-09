import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Link } from "react-scroll";

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
            <button className="bg-[#FFFF00] text-black rounded py-2 px-4 font-bold text-xl">
              Get Started
            </button>
            <button className="bg-black text-[#FFFF00] border-[#FFFF00] border-[1px] rounded py-2 px-4 font-bold text-xl">
              See Repo
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor
              sit amet consectetur adipiscing elit pellentesque habitant. Cras
              pulvinar mattis nunc sed blandit libero volutpat. Odio ut enim
              blandit volutpat maecenas volutpat. Sapien eget mi proin sed
              libero enim. Amet facilisis magna etiam tempor. Facilisi cras
              fermentum odio eu feugiat pretium nibh. Nibh tellus molestie nunc
              non blandit. Integer enim neque volutpat ac tincidunt vitae semper
              quis. Gravida rutrum quisque non tellus. Et pharetra pharetra
              massa massa ultricies mi quis. Nisl rhoncus mattis rhoncus urna
              neque viverra justo nec. Eget sit amet tellus cras adipiscing enim
              eu turpis. Volutpat commodo sed egestas egestas fringilla. Dui
              accumsan sit amet nulla. Morbi quis commodo odio aenean sed
              adipiscing. Elementum nisi quis eleifend quam adipiscing vitae
              proin sagittis nisl. Interdum posuere lorem ipsum dolor. Dolor
              magna eget est lorem ipsum dolor. Nibh nisl condimentum id
              venenatis.
              <br />
              <br />
              Aenean vel elit scelerisque mauris pellentesque pulvinar
              pellentesque habitant. Interdum consectetur libero id faucibus
              nisl tincidunt eget nullam non. Mi bibendum neque egestas congue
              quisque egestas diam in arcu. Fermentum odio eu feugiat pretium
              nibh ipsum consequat nisl vel. Arcu dictum varius duis at
              consectetur lorem. In nibh mauris cursus mattis molestie. Velit ut
              tortor pretium viverra suspendisse potenti nullam ac. Vivamus at
              augue eget arcu dictum varius. Ullamcorper malesuada proin libero
              nunc consequat interdum varius sit. Volutpat odio facilisis mauris
              sit amet massa vitae tortor condimentum. Morbi quis commodo odio
              aenean sed adipiscing diam donec. Nullam vehicula ipsum a arcu.
              Arcu non odio euismod lacinia at. Odio tempor orci dapibus
              ultrices in iaculis.
              <br />
              <br />
              Felis eget velit aliquet sagittis id consectetur purus ut
              faucibus. Est velit egestas dui id. Ipsum a arcu cursus vitae
              congue mauris rhoncus aenean vel. Sed felis eget velit aliquet
              sagittis id consectetur. Consequat interdum varius sit amet
              mattis. Adipiscing elit pellentesque habitant morbi tristique.
              Elit eget gravida cum sociis natoque penatibus et magnis dis. Sit
              amet nisl purus in mollis nunc. In nulla posuere sollicitudin
              aliquam. Ut tortor pretium viverra suspendisse potenti. Facilisi
              etiam dignissim diam quis enim. Consectetur purus ut faucibus
              pulvinar elementum integer enim neque volutpat. Pellentesque massa
              placerat duis ultricies lacus. Donec massa sapien faucibus et
              molestie. Ac turpis egestas sed tempus urna et pharetra. At lectus
              urna duis convallis convallis tellus. Egestas diam in arcu cursus
              euismod quis viverra. Malesuada nunc vel risus commodo viverra
              maecenas accumsan lacus vel.
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
                  <li className="font-bold no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start gap-2">
                <ul className="">
                  <li className="font-bold no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                </ul>
                <ul className="">
                  <li className="font-bold no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                </ul>
              </div>
              <div>
                <ul className="">
                  <li className="font-bold no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                </ul>
              </div>
              <div className="flex flex-col justify-start gap-2">
                <ul className="">
                  <li className="font-bold no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                </ul>
                <ul className="">
                  <li className="font-bold no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
                  <li className="no-underline">lorem</li>
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
