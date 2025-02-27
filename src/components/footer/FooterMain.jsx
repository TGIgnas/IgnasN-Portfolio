import React from "react";
import { Link } from "react-scroll";

const links = [
  {
    link: "About Me",
    section: "about",
  },
  {
    link: "Skills",
    section: "skills",
  },
  {
    link: "Experience",
    section: "experience",
  },
  {
    link: "Projects",
    section: "projects",
  },
  {
    link: "Contact",
    section: "contact",
  },
];

const FooterMain = () => {
  return (
    <div className="px-4 mb-2">
      <div className="w-full h-[1px] bg-violet-200 mt-20"></div>
      <div className="max-w-[1200px] md:flex sm:hidden justify-between mt-5 mx-auto">
        <p className="text-3xl text-violet-200">Ignas Navickas</p>
        <ul className="flex gap-4 text-violet-200 text-xl">
          {links.map((link, id) => {
            return (
              <li key={id}>
                <Link
                  to={link.section}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-130}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {link.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-violet-200 text-right max-w-[1200px] mx-auto mt-2 mb-5 md:hidden sm:block text-sm">
        © 2025 All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
