import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ setMenuOpen }) => {
  const handleLinkClick = () => {
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <ul className="flex text-white gap-4 py-4 text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[16%] sm:left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-violet-500/30 backdrop-blur-lg lg:bg-violet-500 sm:w-full">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              onClick={handleLinkClick}
              to={link.section}
              smooth={true}
              spy={true}
              duration={500}
              offset={-130}
              className=" text-white cursor-pointer hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="bg-violet-50 mx-auto w-0 group-hover:w-full h-[1px] transition-all duration-500 "></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
