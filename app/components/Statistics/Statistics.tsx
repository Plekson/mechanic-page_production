import React from "react";
import CTA from "../CTA/CTA";

const Statistics = () => {
  return (
    <div className="bg-[url('/images/bg3.webp')] bg-cover bg-center md:bg-fixed text-white">
      <div className="bg-black/75 h-full w-full flex justify-center items-center py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-center p-5 shadow-xl border-2 border-purple-700">
              <span className="text-2xl">21</span>
            </div>
            <p className="text-xl text-center">Zadowolonych klientów</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-center p-5 shadow-xl border-2 border-purple-700">
              <span className="text-2xl">53</span>
            </div>
            <p className="text-xl text-center">Wykonane naprawy</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-center p-5 shadow-xl border-2 border-purple-700">
              <span className="text-2xl">95%</span>
            </div>
            <p className="text-xl text-center">Klientów wraca</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-24 h-24 rounded-full flex justify-center items-center text-center p-5 shadow-xl border-2 border-purple-700">
              <span className="text-2xl">2H</span>
            </div>
            <p className="text-xl text-center">Czas odpowiedzi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
