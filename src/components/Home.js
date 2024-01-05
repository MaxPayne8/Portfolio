import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImg from "../images/heroImg.png";
import { Link } from "react-scroll";

import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      name="home"
      className=" h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 pt-24  "
      data-aos="zoom-in"
      data-aos-duration="200"
    >
      <div
        className=" mx-auto flex flex-col
           justify-center items-center  h-full  px-10 text-slate-300 md:flex-row max-w-screen-lg "
      >
        <div className=" text-left w-4/5">
          <h2 className=" text-4xl font-bold">
            <Typewriter
              options={{
                strings: [
                  "I'm a Frontend Developer!!",
                  "I love to build web applications!!",
                ],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </h2>
          <p className="text-slate-400">
            I'm passionate about creating great user experiences and have a
            strong understanding of usability and accessibility standards.
            Currently, I love to work on web applications using technologies
            like React, Redux and Tailwind.
          </p>
          <div>
            <Link to={"projects"} smooth duration={500}>
              <button className="flex items-center w-fit px-6 py-3 my-6 md:my-2 bg-gradient-to-r from-violet-800 to-blue-500 rounded-lg group">
                Portfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="relative group">
          <img
            className="w-56 h-64  rounded-xl  cursor-pointer border-2 border-white"
            src={heroImg}
            alt="hero"
          />
          <label className="absolute bottom-[58px] w-3/4 rounded-e-2xl rounded-b-2xl -right-16 font-medium  bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
            Hi😊, Thanks for visting my portfolio, Have a nice day🌻
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
