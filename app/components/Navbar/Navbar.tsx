import React from "react";
import CTA from "../CTA/CTA";

const Navbar = () => {
  return (
    <header className="bg-black/60 backdrop-blur-sm fixed w-full text-white">
      <nav className="max-h-16 flex justify-between items-center max-w-screen-xl mx-auto py-4">
        <div className="max-h-[80px]">
          <img src="logowhite.png" />
        </div>
        <div className="flex gap-8 items-center">
          <ul className="gap-4 sm:flex hidden">
            <a
              href="#about"
              className="hover:text-purple-700 transition duration-200"
            >
              <li>O nas</li>
            </a>
            <a
              href="#services"
              className="hover:text-purple-700 transition duration-200"
            >
              <li>Usługi</li>
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-700 transition duration-200"
            >
              <li>Opinie</li>
            </a>
          </ul>
          <div className="sm:block hidden">
            <CTA link="" text="Kontakt" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
