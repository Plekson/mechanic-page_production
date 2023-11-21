import React from "react";
import CTA from "../CTA/CTA";

const Profile = () => {
  return (
    <div className="bg-[url('/bg2.jpg')] bg-cover bg-center bg-fixed text-white">
      <div className="bg-black/75 h-full w-full flex flex-col gap-8 justify-center items-center py-24">
        <h2 className="text-5xl font-bold">Kim jesteśmy?</h2>
        <hr className="w-32 bg-purple-700 border-purple-700" />
        <p className="max-w-4xl text-center text-xl sm:px-0 px-4">
          Jesteśmy nowym warsztatem samochodowym, gotowym do zapewnienia
          kompleksowej obsługi Twojego pojazdu. Nasze podejście opiera się na
          profesjonalizmie, pasji do motoryzacji i trosce o potrzeby naszych
          klientów. Zaufaj nam, a dołożymy wszelkich starań, aby Twój samochód
          działał sprawnie i bezpiecznie na drogach.
        </p>
        <CTA link="" text="Kontakt" />
      </div>
    </div>
  );
};

export default Profile;
