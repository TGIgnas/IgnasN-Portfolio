import React from "react";

const SingleInfo = ({ Icon, text }) => {
  return (
    <div className="flex justify-start items-center gap-4 py-2">
      <Icon className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;
