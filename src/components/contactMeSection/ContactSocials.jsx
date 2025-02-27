import React from "react";
import SingleSocial from "./SingleSocial";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const ContactSocials = () => {
  return (
    <div className="flex gap-6">
      <SingleSocial
        Icon={BsLinkedin}
        link={"https://www.linkedin.com/in/ignas-navickas-759bbb227/"}
      />
      <SingleSocial Icon={FaGithub} link={"https://github.com/TGIgnas"} />
    </div>
  );
};

export default ContactSocials;
