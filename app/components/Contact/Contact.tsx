"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            setFormValues({
              user_name: "",
              user_email: "",
              message: "",
            });
            alert("Message sent successfully...");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="mx-auto max-w-screen-2xl flex flex-col gap-24 items-center">
      <div className="max-w-screen-xl w-full text-left">
        <h2 className="text-5xl font-bold 2xl:px-0 px-4">
          Skontaktuj się z nami!
        </h2>
      </div>
      <div className="w-full">
        <form
          className="flex flex-col gap-8 items-center w-3/4 md:w-1/2 mx-auto"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          method="POST"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="relative w-full">
            <input
              name="user_name"
              type="text"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-purple-700"
              placeholder="name"
              required
              onChange={handleInputChange}
              value={formValues.user_name}
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
              name="user_email"
              type="email"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-purple-700"
              placeholder="email"
              required
              onChange={handleInputChange}
              value={formValues.user_email}
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
              name="message"
              className="peer w-full border-b text-lg placeholder:text-transparent p-2 focus:outline-purple-700 resize-none"
              placeholder="message"
              required
              onChange={handleInputChange}
              value={formValues.message}
            />
            <label
              htmlFor="message"
              className="absolute left-0 ml-1 -translate-y-3 bg-white px-1 text-sm duration-100 ease-linear peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-1 peer-focus:-translate-y-3 peer-focus:text-sm peer-focus:text-purple-700"
            >
              Wiadomość
            </label>
          </div>
          <input
            type="submit"
            value="Wyślij"
            className="cursor-pointer py-2 px-4 rounded bg-purple-700 hover:bg-gray-500 duration-200 text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
