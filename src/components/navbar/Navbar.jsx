import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 h-16">
      <div className="flex justify-between w-full mx-auto bg-violet-500 items-center p-6 rounded-3xl border border-violet-300">
        <NavbarLogo />
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>
        <div className="md:flex justify-center sm:flex">
          <NavbarBtn />
        </div>
        <button
          className="text-white border border-violet-300 rounded-full p-2 text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-violet-700 p-6 rounded-lg lg:hidden">
          <NavbarLinks setMenuOpen={setMenuOpen} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
