import React from "react";
import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <h1 className="text-white text-2xl cursor-pointer sm:hidden md:block">
        <Link spy={true} smooth={true} duration={500} offset={-120} to="hero">
          Ignas Navickas
        </Link>
      </h1>
      <h1 className="text-white font-family-special text-4xl font-extrabold cursor-pointer sm:block md:hidden">
        <Link spy={true} smooth={true} duration={500} offset={-120} to="hero">
          I N
        </Link>
      </h1>
    </div>
  );
};

export default NavbarLogo;
