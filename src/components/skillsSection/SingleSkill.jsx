import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500 group">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="border-4 border-black flex h-[100px] w-[100px] rounded-full justify-center items-center bg-white text-cyan group-hover:text-violet-400 hover:scale-105 transition-all duration-500 transform text-6xl">
          {imgSvg}
        </div>
        <p className="text-white font-bold transition-all">{text}</p>
      </div>
    </div>
  );
};

export default SingleSkill;
