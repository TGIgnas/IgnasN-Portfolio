import React from "react";
import SlidingText from "../../framerMotion/SlidingText";

const SubHeroSection = () => {
  return (
    <div className="flex justify-around text-violet-300 uppercase font-bold lg:text-4xl md:text-3xl sm:text-3xl py-8 gap-6 text-center sm:flex-col sm:justify-center md:flex-row lg:flex-row">
      <SlidingText text="Fast Learner • Problem Solver • Detail-Oriented" />
    </div>
  );
};

export default SubHeroSection;
