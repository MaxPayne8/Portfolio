import React, { useEffect } from "react";

import html from "../images/html.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import reactImage from "../images/react.png";
import redux from "../images/redux.png";
import cpp from "../images/cpp.png";
import github from "../images/github.png";
import tailwind from "../images/tailwind.png";
import firebase from "../images/firebase.jpg";
import reactRouter from "../images/reactRouter.png";
import Aos from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: redux,
      title: "Redux-Toolkit",
      style: "shadow-violet-600",
    },
    {
      id: 7,
      src: reactRouter,
      title: "React Router Dom",
      style: "shadow-white",
    },
    {
      id: 8,
      src: cpp,
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: firebase,
      title: "Firebase",
      style: "shadow-blue-700",
    },
  ];

  return (
    <div
      name="tech-Stack"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-[80%] mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              data-aos="fade-right"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
