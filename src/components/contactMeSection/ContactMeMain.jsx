import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto mt-[100px] px-4 md:mt-4 sm:mb-8"
    >
      <h2 className="text-violet-400 text-5xl text-center m-5">Contact Me</h2>
      <div className="flex justify-between gap-10 p-4 mx-8 rounded-2xl bg-violet-500 lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
