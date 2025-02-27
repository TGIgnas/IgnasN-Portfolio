import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="border-2 border-violet-300 border-dashed rounded-2xl mt-2 lg:h-[450px] lg:w-[350px] md:h-[520px] md:w-[370px] sm:h-auto sm:w-full p-4"
    >
      <p className="font-bold text-violet-100">{experience.job}</p>
      <p className="text-violet-100">{experience.company}</p>
      <p className="text-violet-50">{experience.date}</p>
      <ul className="text-white list-disc mt-4 pl-4">
        {experience.responsibilities.map((resp, id) => {
          return <li key={id}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
