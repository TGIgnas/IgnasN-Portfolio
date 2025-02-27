import React from "react";
import HeroText from "./HeroText";
import HeroPhoto from "./HeroPhoto";

const HeroMain = () => {
  return (
    <div
      id="hero"
      className="max-w-[1300px] mx-auto flex justify-between p-8 md:flex-row sm:flex-col sm:items-center w-full relative"
    >
      <HeroText />
      <HeroPhoto />
    </div>
  );
};

export default HeroMain;
