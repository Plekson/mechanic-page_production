import React from "react";
import OfferCard from "../OfferCard/OfferCard";

const services = [
  {
    id: 1,
    image: "diagnostyka.jpg",
    text: "Diagnostyka",
  },
  {
    id: 2,
    image: "olej.jpg",
    text: "Wymiana oleju i filtrów",
  },
  {
    id: 3,
    image: "hamulce.jpg",
    text: "Naprawa hamulców",
  },
  {
    id: 4,
    image: "silnik.jpg",
    text: "Naprawa silnika",
  },
];

const Offer = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl flex flex-col gap-24 items-center">
      <div className="max-w-screen-xl w-full text-left">
        <h2 className="text-5xl font-bold sm:px-0 px-4">Nasza oferta</h2>
      </div>
      <div className="flex sm:flex-row flex-col gap-8">
        {services.map((service) => (
          <OfferCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
