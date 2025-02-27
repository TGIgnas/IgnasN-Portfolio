import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handlName = (e) => {
    setName(e.target.value);
  };
  const handlEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent!");
          setTimeout(() => {
            setSuccess("");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-green-400">{success}</p>
      <form
        className=" flex flex-col gap-4 mt-3 lg:w-140"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="border border-violet-300 bg-violet-400 rounded-lg h-12 px-2 text-white"
          value={name}
          onChange={handlName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="border border-violet-300 bg-violet-400 rounded-lg h-12 px-2 text-white"
          value={email}
          onChange={handlEmail}
        />
        <textarea
          name="message"
          type="text"
          rows={5}
          placeholder="Message"
          required
          className="border border-violet-300 bg-violet-400 rounded-lg p-2 resize-none text-white"
          value={message}
          onChange={handlMessage}
        ></textarea>
        <button
          type="submit"
          className="cursor-pointer bg-violet-800 rounded-lg p-2 hover:bg-violet-400 text-white transition-all duration-500 "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
