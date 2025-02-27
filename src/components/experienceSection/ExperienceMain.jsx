import React from "react";
import ExperienceText from "./ExperienceText";
import AllExperience from "./AllExperience";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <ExperienceText />
      <div className="w-full h-1 mb-5 bg-violet-400"></div>
      <AllExperience />
    </div>
  );
};

export default ExperienceMain;
