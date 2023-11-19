import React from "react";
import AboutCard from "../AboutCard/AboutCard";

const data = [
  {
    id: 1,
    icon: "price-tag.svg",
    title: "Niskie ceny",
    description:
      "Nasza filozofia to zapewnienie wysokiej jakości usług bez obciążania Twojego portfela. Oferujemy konkurencyjne ceny, nie rezygnując przy tym z profesjonalizmu.",
  },

  {
    id: 2,
    icon: "person.svg",
    title: "Indywidualne podejście",
    description:
      "Jako nowy warsztat cenimy relacje z klientami. Zapewniamy indywidualne podejście, angażując się w każdą naprawę, by sprostać Twoim oczekiwaniom.",
  },

  {
    id: 3,
    icon: "rewind.svg",
    title: "Szybka obsługa",
    description:
      "Doceniamy Twój czas. Dzięki efektywnej organizacji i zaangażowaniu naszego zespołu, zapewniamy szybką i sprawną obsługę każdej naprawy.",
  },

  {
    id: 4,
    icon: "shield-check.svg",
    title: "Gwarancja satysfakcji",
    description:
      "Jesteśmy pewni jakości naszych usług. Oferujemy gwarancję satysfakcji, zapewniając najwyższą staranność i dbałość o detale przy każdej naprawie.",
  },
];

const About = () => {
  return (
    <div className="mx-auto max-h-screen max-w-screen-2xl flex flex-col gap-24 items-center">
      <div className="max-w-screen-xl w-full text-left">
        <h2 className="text-5xl font-bold">Dlaczego warto nas wybrać?</h2>
      </div>

      <div className="flex gap-8">
        {data.map((feature) => (
          <AboutCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default About;
