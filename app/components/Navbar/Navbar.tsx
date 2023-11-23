"use client";

import React, { useEffect, useRef, useState } from "react";
import CTA from "../CTA/CTA";

const Navbar = () => {
  const navigationRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const displayMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const isOutsideClick =
      navigationRef.current &&
      !navigationRef.current.contains(event.target as Node);
    const isHamburgerClick = (event.target as HTMLElement)?.id === "hamburger"; // Sprawdź czy kliknięto w ikonę hamburgera
    if (isOutsideClick && !isHamburgerClick) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-black/60 backdrop-blur-sm fixed w-full text-white z-10 2xl:px-0 px-4">
      <nav className="max-h-16 flex justify-between items-center max-w-screen-xl mx-auto py-4">
        <div className="max-h-[80px]">
          <img src="logowhite.png" />
        </div>
        <img
          src="hamburger.svg"
          alt="menu"
          width={32}
          height={32}
          className="sm:hidden cursor-pointer z-10"
          onClick={displayMenu}
          id="hamburger"
        />

        <div
          className={`gap-8 items-center flex sm:flex-row flex-col absolute sm:static ${
            isOpen ? "top-0" : "-top-80"
          } inset-x-0 bg-black sm:bg-transparent sm:py-0 py-16 duration-200`}
          ref={navigationRef}
        >
          <ul className="flex sm:flex-row flex-col gap-4">
            <a
              href="#about"
              className="hover:text-purple-700 transition duration-200"
            >
              <li onClick={() => setIsOpen(false)}>O nas</li>
            </a>
            <a
              href="#services"
              className="hover:text-purple-700 transition duration-200"
            >
              <li onClick={() => setIsOpen(false)}>Usługi</li>
            </a>
            <a
              href="#testimonials"
              className="hover:text-purple-700 transition duration-200"
            >
              <li onClick={() => setIsOpen(false)}>Opinie</li>
            </a>
          </ul>
          <div onClick={() => setIsOpen(false)}>
            <CTA link="#contact" text="Kontakt" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
