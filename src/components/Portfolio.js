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
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpoqlUeRaYCH4ryNlggZvO9qcOsFlj2fWmw&s",
      github: "https://github.com/MaxPayne8/ticketing",

      title: "Ticketing(Based on Microservices Architecture)",
      desc: "This project was built on a Microservices Architecture using Node.js and React, with Docker and Kubernetes for containerizing each service. NATS Streaming Server was implemented for event-driven communication between the services.",
    },
    {
      id: 2,
      src: "https://thewomenleaders.com/wp-content/uploads/2021/11/S.png",
      github: "https://github.com/MaxPayne8/NASA_SPACEX",

      title: "Nasa-SpaceX Rocket Launcher Dashboard",
      desc: "In this project, the entire frontend was developed using React and libraries like Arwes, while the backend followed Node.js MVC architecture. The SpaceX API was integrated to fetch historical rocket launches, and users could also schedule new rocket launches to any of Kepler’s habitable planets, which were identified using data from the Kepler CSV file.",
    },
    {
      id: 3,
      src: netflix,
      github: "https://github.com/MaxPayne8/Netflix-GPT",
      live: "https://netfflixxxxgpt.netlify.app/",
      title: "Netflix-GPT",
      desc: "Netflix with Open AI as movie recommendation System",
      importance: "⭐",
    },
    {
      id: 4,
      src: nike,
      github: "https://github.com/MaxPayne8/Shoes-Store",
      live: "https://shoes-store-jet.vercel.app/",
      title: "Nike-Store",
      desc: "Beautiful Shoes store for every Sneaker Head",
      importance: "⭐",
    },
    {
      id: 5,
      src: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/272908087/original/d82064937361c7fd199c36e87d79062d927f5d5d/create-a-custom-qr-code-with-your-logo-in-the-background.jpg",
      github: "https://github.com/MaxPayne8/QrCodeGenerator",
      live: "https://qrbar.vercel.app/",
      title: "QR Code Generator",
      desc: "Cutomizable Qr code Generator, Bar Code Generator and NFC Tag reader.",
    },
    {
      id: 6,
      src: notes,
      github: "https://github.com/MaxPayne8/Notes",
      live: "https://notes-ecru-six.vercel.app/",
      title: "Take-notes",
      desc: "Simple note taking App using CRUD operations",
    },
    {
      id: 7,
      src: youtube,
      github: "https://github.com/MaxPayne8/Youtube-Clone",
      live: "https://youtube-clone-jade-pi.vercel.app/",
      title: "Youtube-Clone",
      desc: "Live Youtube Apis ,Live Search Bar using Debouncing, Live chat using API Polling, Nested Comments using recursion",
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
