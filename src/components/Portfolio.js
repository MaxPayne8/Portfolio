import React, { useEffect } from "react";
import netflix from "../images/netflix.png";
import nike from "../images/nike.png";
import youtube from "../images/youtube.jpeg";
import notes from "../images/notes.png";
import swiggy from "../images/swiggy.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const portfolios = [
    {
      id: 1,
      src: netflix,
      github: "https://github.com/MaxPayne8/Netflix-GPT",
      live: "https://netflixxgpt.netlify.app",
      title: "Netflix-GPT",
      desc: "Netflix with Open AI as movie recommendation System",
      importance: "⭐",
    },
    {
      id: 2,
      src: nike,
      github: "https://github.com/MaxPayne8/Shoes-Store",
      live: "https://shoes-store-jet.vercel.app/",
      title: "Nike-Store",
      desc: "Beautiful Shoes store for every Sneaker Head",
      importance: "⭐",
    },
    {
      id: 3,
      src: youtube,
      github: "https://github.com/MaxPayne8/Youtube-Clone",
      live: "https://youtube-clone-jade-pi.vercel.app/",
      title: "Youtube-Clone",
      desc: "Live Youtube Apis ,Live Search Bar using Debouncing, Live chat using API Polling, Nested Comments using recursion",
    },
    {
      id: 4,
      src: swiggy,
      github: "https://github.com/MaxPayne8/Swiggy",
      live: "https://swiggy008.vercel.app/",
      title: "Food-Order-App",
      desc: "Made using the complex Live Swiggy Api",
    },
    {
      id: 5,
      src: notes,
      github: "https://github.com/MaxPayne8/Notes",
      live: "https://notes-ecru-six.vercel.app/",
      title: "Take-notes",
      desc: "Simple note taking App using CRUD operations",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full  md:min-h-screen"
    >
      <div className="max-w-[80%] p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-white inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-slate-100">
            Check out some of my work right here
          </p>
        </div>

        <div className="flex flex-wrap justify-evenly overflow-hidden pb-10  ">
          {portfolios.map(
            ({ id, src, github, live, title, desc, importance }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg w-72 sm:w-80  p-6 "
                data-aos="fade-left"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md w-full duration-200 hover:scale-105"
                />
                <h1 className="p-2 text-white text-2xl">
                  {title}
                  {importance}
                </h1>
                <h1 className="p-2 text-slate-300 ">{desc}</h1>
                <div className="flex items-center justify-center">
                  <a
                    className="w-1/2 px-6 m-4 text-slate-400 hover:scale-105 hover:text-slate-200 duration-150 hover:text-lg"
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="w-1/2 px-6  text-slate-400 hover:scale-105 hover:text-slate-200 duration-150 hover:text-lg"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
