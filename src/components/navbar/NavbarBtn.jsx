import React from "react";
import { Link } from "react-scroll";
const NavbarBtn = () => {
  return (
    <button className="border border-violet-200 text-white rounded-full items-center font-bold text-xl px-4 py-2 flex gap-2 bg-gradient-to-r from-violet-400 to-violet-600 hover:border-violet-50 hover:scale-110 transition-all duration-300 hover:shadow-cyanShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
    </button>
  );
};

export default NavbarBtn;
