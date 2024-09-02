import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-[80%] p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p
          className="text-xl pt-10 "
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          Greetings, I'm Zatin Pandey. I hold a BTech in Computer Science and
          Engineering from SRM University, Chennai, and I'm currently pursuing
          my MTech in CSE from Manipal Institute of Technology, Manipal. My
          passion lies in creating dynamic, user-centric web applications,
          blending sleek design with robust functionality. I continuously expand
          my skill set by exploring new technologies, and I’m proficient in a
          wide range of tools including React, Redux, Node.js, Docker, and
          Kubernetes. Beyond tech, I enjoy expressing creativity through dance
          and cooking. Cheers!
        </p>
      </div>
    </div>
  );
};

export default About;
