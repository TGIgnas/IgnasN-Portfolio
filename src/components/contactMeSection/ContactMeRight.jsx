import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocials from "./ContactSocials";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src="./email-image.png"
        alt="Contact Me"
        className="max-w-[260px] "
      />
      <ContactInfo />
      <ContactSocials />
    </div>
  );
};

export default ContactMeRight;
