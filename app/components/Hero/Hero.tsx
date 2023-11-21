import React from "react";
import CTA from "../CTA/CTA";

const Hero = () => {
  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed h-screen text-white">
      <div className="bg-black/75 h-full w-full flex justify-center items-center sm:px-0 px-4">
        <div className="max-w-screen-xl h-full w-full flex flex-col gap-8 items-center justify-center">
          <h1 className="sm:text-6xl text-5xl font-bold max-w-4xl text-center">
            Profesjonalny <span className="text-purple-700">serwis</span> dla
            twojego <span className="text-purple-700">samochodu</span>.
          </h1>
          <hr className="w-32 bg-purple-700 border-purple-700" />
          <p className="text-xl max-w-2xl text-center">
            Zaufaj naszemu doświadczeniu i zadedykowanej obsłudze, by Twój
            samochód działał jak nowy.
          </p>
          <CTA link="" text="Kontakt" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
