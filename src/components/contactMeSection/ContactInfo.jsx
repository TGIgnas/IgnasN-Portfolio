import React from "react";
import SingleInfo from "./SingleInfo";
import { LiaPhoneSolid } from "react-icons/lia";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const ContactInfo = () => {
  return (
    <div className="text-white gap-4">
      <SingleInfo Icon={IoMailOutline} text={"ign.navickas@gmail.com"} />
      <SingleInfo Icon={LiaPhoneSolid} text={"+370 608 23314"} />
      <SingleInfo Icon={CiLocationOn} text={"Kaunas"} />
    </div>
  );
};

export default ContactInfo;
