import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:text-left sm:text-center">
      <div>
        <h2 className="text-violet-900 font-bold text-4xl mb-4">
          Get in touch
        </h2>
        <p className="text-white">
          Feel free to reach out if you’d like to collaborate
          <br />
          you are just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
