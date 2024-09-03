import React, { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import heroImg1 from "../images/heroImg1.png";
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
      className=" min-h-screen md:h-screen w-full  bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-0 "
      data-aos="zoom-in"
      data-aos-duration="200"
    >
      <div
        className=" mx-auto flex flex-col
           justify-center items-center h-full px-10  text-slate-300 md:flex-row max-w-[80%]"
      >
        <div className=" text-left w-4/5">
          <h2 className=" text-4xl mt-10 font-bold">
            <Typewriter
              options={{
                strings: [
                  "I'm a Full Stack Developer!!",
                  "I love to build web applications and Microservices!!",
                ],
                autoStart: true,
                loop: true,
              }}
            ></Typewriter>
          </h2>
          <p className="text-slate-400">
            I'm passionate about creating exceptional user experiences and have
            a strong foundation in usability and accessibility standards. I
            excel in developing web applications using a modern tech stack,
            including <span className="font-semibold text-blue-300">React</span>
            , <span className="font-semibold text-blue-300">Redux</span>, and{" "}
            <span className="font-semibold text-blue-300">Tailwind CSS</span>,
            with proficiency in{" "}
            <span className="font-semibold text-blue-300">TypeScript</span>,{" "}
            <span className="font-semibold text-blue-300">Node.js</span>,{" "}
            <span className="font-semibold text-blue-300">Express</span>,{" "}
            <span className="font-semibold text-blue-300">Docker</span>,{" "}
            <span className="font-semibold text-blue-300">Kubernetes</span>, and{" "}
            <span className="font-semibold text-blue-300">MongoDB</span>. My
            work is driven by a commitment to building responsive, performant,
            and user-centric applications.
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
            className="w-64 h-72 md:w-72 md:h-80 rounded-2xl cursor-pointer shadow-lg transition-transform transform hover:scale-105"
            src={heroImg1}
            alt="hero"
          />
          <label className="absolute bottom-40 left-1/2 transform -translate-x-1/2 translate-y-full w-5/6 rounded-lg font-medium text-center text-white bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out shadow-md p-2">
            Hi 😊, Thanks for visiting my portfolio. Have a nice day 🌻
          </label>
        </div>
      </div>
    </div>
  );
};

export default Home;
