import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const HeroText = () => {
  return (
    <div className="flex flex-col p-6 h-full gap-4 justify-center md:text-left sm:text-center sm:mt-20 md:mt-30">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="uppercase lg:text-2xl sm:text-xl text-violet-50"
      >
        Front-End Web Developer{" "}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="font-family-special font-bold lg:text-7xl md:text-6xl sm:text-4xl text-violet-400"
      >
        Ignas Navickas
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-white text-lg mt-4"
      >
        Pasionate Junior Developer
      </motion.p>
    </div>
  );
};

export default HeroText;
