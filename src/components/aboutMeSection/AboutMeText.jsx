import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className=" flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-violet-400 mb-10">About me</h2>
      <p className="text-white">
        I am an IT Administrator and a Junior Front-endDeveloper, passionate
        about new technologies,computers, programming and, on my free time,
        carsas well. I am creative in solving problems andmotivated to enhance
        and adapt my knowledge in ITor technological areas while striving to
        reach acommon goal with my team members.
      </p>
      <button className="border border-violet-300 rounded-full px-4 py-2 text-lg mt-10 flex items-center  hover:bg-violet-300 transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white font-bold bg-gradient-to-r from-violet-400 to-violet-600 hover:border-violet-50 hover:scale-110 hover:shadow-cyanShadow">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
