import React from "react";

const SingleSocial = ({ Icon, link }) => {
  return (
    <div className="flex text-3xl items-center justify-center p-3 text-violet-900 hover:text-violet-200 transition-all duration-500">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleSocial;
