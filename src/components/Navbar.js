import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Projects" },
    { id: 4, link: "Tech-Stack" },
    { id: 5, link: "Contact" },
  ];
  return (
    <div className="flex justify-between h-20 bg-black items-center text-slate-200 fixed w-full px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Zatin</h1>
      </div>
      <ul className="hidden md:flex  ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="py-2 px-8 hover:cursor-pointer font-medium  text-slate-500 hover:scale-105 hover:text-slate-200 duration-150"
          >
            {link}
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
              className="p-2 hover:cursor-pointer font-medium text-4xl py-6 hover:scale-105 text-slate-200 duration-150"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
