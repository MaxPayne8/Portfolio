import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hi, My name is Zatin Pandey, I did my Btech(CSE) from SRM University,
          Chennai and currently I'm pursuing Mtech(CSE) from Manipal Institute
          of Technology, Manipal. I was always amazed by the idea of creating
          web applications and making them look awesome while adding amazing
          features to it ,I believe that I have a lot to learn in this fantastic
          domain and I try to learn and work on new technologies everyday ,
          Other than that I like to dance and cook in my leisure time.Cheers!!
        </p>
      </div>
    </div>
  );
};

export default About;
