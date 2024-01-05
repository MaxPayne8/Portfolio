import React from "react";
import netflix from "../images/netflix.png";
import nike from "../images/nike.png";
import youtube from "../images/youtube.jpeg";
import notes from "../images/notes.png";
import swiggy from "../images/swiggy.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: netflix,
      github: "https://github.com/MaxPayne8/Netflix-GPT",
      live: "https://netflixxgpt.netlify.app",
    },
    {
      id: 2,
      src: nike,
      github: "https://github.com/MaxPayne8/Shoes-Store",
      live: "https://shoes-store-jet.vercel.app/",
    },
    {
      id: 3,
      src: youtube,
      github: "https://github.com/MaxPayne8/Youtube-Clone",
      live: "https://youtube-clone-jade-pi.vercel.app/",
    },
    {
      id: 4,
      src: swiggy,
      github: "https://github.com/MaxPayne8/Swiggy",
      live: "https://swiggy008.vercel.app/",
    },
    {
      id: 5,
      src: notes,
      github: "https://github.com/MaxPayne8/Notes",
      live: "https://notes-ecru-six.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github, live }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md w-full duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  className="w-1/2 px-6 py-3 m-4 text-slate-400 hover:scale-105 hover:text-slate-200 duration-150"
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  className="w-1/2 px-6 py-3 m-4 text-slate-400 hover:scale-105 hover:text-slate-200 duration-150"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;