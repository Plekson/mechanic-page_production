import React from "react";
import Opinions from "../Opinions/Opinions";

const opinions = [
  {
    id: 1,
    text: "Profesjonalna obsługa i rzetelna naprawa. Jestem bardzo zadowolony z efektów!",
    name: "Kamil Wróbel",
  },
  {
    id: 2,
    text: "Bardzo polecam ten warsztat! Fachowa pomoc i szybka diagnoza problemu.",
    name: "Magda Lewandowska",
  },
  {
    id: 3,
    text: "Naprawa wykonana perfekcyjnie, a obsługa klienta na najwyższym poziomie!",
    name: "Adam Nowakowski",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-200 py-24 sm:px-0 px-4">
      <div className="mx-auto max-h-screen max-w-screen-2xl flex flex-col gap-24 items-center">
        <div className="max-w-screen-xl w-full text-left">
          <h2 className="text-5xl font-bold">Co mówią o nas klienci?</h2>
        </div>
        <div className="flex sm:flex-row flex-col gap-8">
          {opinions.map((opinion) => (
            <Opinions key={opinion.id} testimonial={opinion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
