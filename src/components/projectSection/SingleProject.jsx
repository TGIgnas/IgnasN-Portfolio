import React from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const SingleProject = ({ name, align, image, link }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={`flex w-full gap-8 items-center sm:flex-col-reverse ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="text-violet-400 md:text-3xl sm:text-2xl">{name}</h2>
        <a
          href={link}
          className={`text-lg flex text-violet-50 gap-2 items-center cursor-pointer hover:text-violet-300 transition-all duration-500 ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          View <HiMiniArrowTopRightOnSquare />
        </a>
      </div>
      <div className="max-h-[180px] max-w-[350px] overflow-hidden rounded-2xl border border-white relative hover:scale-110 transform transition-all duration-500">
        <div className="w-full h-full bg-violet-100 opacity-50  absolute hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
