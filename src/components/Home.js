import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImg from "../images/heroImg.png";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div
        className=" mx-auto flex flex-col
           justify-center items-center  h-screen px-10 text-slate-300 md:flex-row max-w-screen-lg "
      >
        <div className=" text-left w-4/5">
          <h2 className=" text-4xl font-bold">I'm a Front end Developer</h2>
          <p className="text-slate-400">
            I'm passionate about creating great user experiences and have a
            strong understanding of usability and accessibility standards.
            Currently, I love to work on web applications using technologies
            like React, Redux and Tailwind.
          </p>
          <div>
            <button className="flex items-center w-fit px-6 py-3 my-6 md:my-2 bg-gradient-to-r from-violet-800 to-blue-500 rounded-lg group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            className="w-56 h-64  rounded-xl hover:animate-spin cursor-pointer border-2 border-white"
            src={heroImg}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
