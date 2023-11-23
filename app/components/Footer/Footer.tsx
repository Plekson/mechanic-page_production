import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black py-24 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col xl:flex-row justify-between items-center gap-8 px-4">
          <div className="mb-4 md:mb-0">
            <img src="logowhite.png" alt="logo" />
            <div className="xl:pl-16">
              <p className="text-lg font-bold">Serwis samochodowy</p>
              <p>Adres: Leśna 3, 83-315 Piotrowo</p>
              <p>Telefon: 537-001-162, 661-100-332</p>
            </div>
          </div>
          <div>
            <ul className="flex gap-4 mb-4 md:mb-0">
              <a
                href="#hero"
                className="hover:text-purple-700 transition duration-200"
              >
                <li>Strona główna</li>
              </a>
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
          </div>
          <div>
            <p className="text-lg font-bold mb-2">Godziny otwarcia</p>
            <p>Poniedziałek - Piątek: 8:00 - 18:00</p>
            <p>Sobota: 9:00 - 15:00</p>
            <p>Niedziela: Zamknięte</p>
          </div>
        </div>
      </footer>
      <div className="flex items-center w-full justify-center bg-black">
        <p className="text-gray-500 text-sm">
          &copy; Piotr Lubecki. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
