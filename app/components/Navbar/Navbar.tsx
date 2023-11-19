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
          <ul className="flex gap-8">
            <li className="hover:text-purple-700 cursor-pointer duration-200">
              O nas
            </li>
            <li className="hover:text-purple-700 cursor-pointer duration-200">
              Usługi
            </li>
            <li className="hover:text-purple-700 cursor-pointer duration-200">
              Opinie
            </li>
          </ul>

          <CTA link="" text="Kontakt" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
