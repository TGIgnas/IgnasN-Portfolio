import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variant";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[500px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkills />
        </div>
        <div className="lg:hidden sm:block mt-10">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
