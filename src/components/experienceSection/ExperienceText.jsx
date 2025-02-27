import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const ExperienceText = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center mt-10"
    >
      <h2 className="text-violet-400 text-6xl mb-5">Experience</h2>
    </motion.div>
  );
};

export default ExperienceText;
