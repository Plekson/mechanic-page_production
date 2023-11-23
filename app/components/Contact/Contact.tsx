import React from "react";
import CTA from "../CTA/CTA";

const Contact = () => {
  return (
    <div className="mx-auto max-w-screen-2xl flex flex-col gap-24 items-center">
      <div className="max-w-screen-xl w-full text-left">
        <h2 className="text-5xl font-bold 2xl:px-0 px-4">
          Skontaktuj się z nami!
        </h2>
      </div>
      <div className="w-full">
        <form className="flex flex-col gap-8 items-center w-3/4 md:w-1/2 mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-purple-700"
              placeholder="name"
              required
            />
            <label
              htmlFor="name"
              className="absolute pointer-events-none left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-purple-700"
            >
              Imię i nazwisko
            </label>
          </div>
          <div className="relative w-full">
            <input
              type="email"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-purple-700"
              placeholder="email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-purple-700"
            >
              E-mail
            </label>
          </div>
          <div className="relative w-full">
            <textarea
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-purple-700 resize-none"
              placeholder="message"
              required
            />
            <label
              htmlFor="message"
              className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-purple-700"
            >
              Wiadomość
            </label>
          </div>
          <CTA link="" text="Wyślij" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
