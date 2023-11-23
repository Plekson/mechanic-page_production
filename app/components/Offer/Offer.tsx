import React from "react";
import OfferCard from "../OfferCard/OfferCard";

const services = [
  {
    id: 1,
    image: "images/diagnostyka.webp",
    text: "Diagnostyka",
  },
  {
    id: 2,
    image: "images/olej.webp",
    text: "Wymiana oleju i filtrów",
  },
  {
    id: 3,
    image: "images/hamulce.webp",
    text: "Naprawa hamulców",
  },
  {
    id: 4,
    image: "images/silnik.webp",
    text: "Naprawa silnika",
  },
];

const Offer = () => {
  return (
    <div className="mx-auto max-w-screen-2xl flex flex-col gap-24 items-center">
      <div className="max-w-screen-xl w-full text-left">
        <h2 className="text-5xl font-bold 2xl:px-0 px-4">Nasza oferta</h2>
      </div>
      <div className="flex xl:flex-row flex-col gap-8 items-center">
        {services.map((service) => (
          <OfferCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Offer;
