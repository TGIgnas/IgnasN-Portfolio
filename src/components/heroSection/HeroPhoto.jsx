import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const HeroPhoto = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex justify-center md:mt-30 sm:mt-1 "
    >
      <img src="./image.png" alt="My Photo" className="max-h-[370px] w-auto" />
    </motion.div>
  );
};

export default HeroPhoto;
