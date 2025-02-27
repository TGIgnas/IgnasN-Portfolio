import React from "react";

const AboutMeImage = () => {
  return (
    <div className="h-[450px] w-[300px] relative sm:hidden md:block">
      <div className="h-[450px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="./about-me.jpg"
          alt="About Me"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="bg-violet-800 h-[500px] w-[250px] absolute bottom-[-30px] left-[-30px] rounded-tl-[20px] rounded-tr-[120px] rounded-bl-[120px] rounded-br-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
