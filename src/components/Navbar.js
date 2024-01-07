import React, { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "tech-Stack" },
    { id: 5, link: "contact" },
  ];
  return (
    <div
      className="flex justify-between h-20 bg-black items-center text-slate-200 fixed w-full px-4 z-10"
      data-aos="fade-down"
      data-aos-duration="300"
    >
      <div>
        <Link to={"home"} smooth duration={500}>
        <h1 className="text-5xl font-signature ml-2 hover:cursor-pointer">Zatin</h1>
        </Link>
      </div>
      <ul className="hidden md:flex  ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="py-2 capitalize px-8 hover:cursor-pointer font-medium  text-slate-500 hover:scale-105 hover:text-slate-200 duration-150"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="hover:cursor-pointer block md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav === true && (
        <ul
          className="flex flex-col justify-center items-center
          absolute top-20 left-0  w-full h-screen bg-gradient-to-b from-black to-gray-500 ☐ text-gray-200   "
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="p-2 capitalize hover:cursor-pointer font-medium text-4xl py-6 hover:scale-105 text-slate-200 duration-150"
            >
              <Link
                to={link}
                smooth
                duration={500}
                onClick={() => setNav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
