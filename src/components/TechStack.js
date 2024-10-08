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
      src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: "https://redux.js.org/img/redux-logo-landscape.png",
      title: "Redux-Toolkit",
      style: "shadow-violet-600",
    },
    {
      id: 7,
      src: "https://reactrouter.com/_brand/react-router-mark-color.svg",
      title: "React Router Dom",
      style: "shadow-white",
    },
    {
      id: 8,
      src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0WAo0TBJaZl9Hxls_DZTgzGb2hk2BT-vew&s",
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW44qUD0U1nea22aYEkfeeWPGyWbHnrzi6hw&s",
      title: "TypeScript",
      style: "shadow-blue-600",
    },
    {
      id: 13,
      src: "data:image/png;base64,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",
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
      title: "Kubernetes",
      style: "shadow-blue-500",
    },
    {
      id: 15,
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 16,
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      title: "AWS",
      style: "shadow-orange-400",
    },
    {
      id: 17,
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg",
      title: "NGINX",
      style: "shadow-green-700",
    },
    {
      id: 18,
      src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
      title: "Bootstrap",
      style: "shadow-purple-500",
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
