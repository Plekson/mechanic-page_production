"use client";

import React from "react";
import FAQDropdown from "../FAQDropdown/FAQDropdown";

const questions = [
  {
    id: 1,
    title: "Jakie rodzaje napraw oferujecie?",
    text: "Nasze usługi obejmują szeroki zakres napraw mechanicznych i konserwacyjnych, w tym diagnostykę silnika, naprawy układu hamulcowego, wymianę oleju, serwis klimatyzacji, oraz wiele innych.",
  },
  {
    id: 2,
    title: "Jak długo trwa typowa naprawa?",
    text: "Czas trwania naprawy zależy od rodzaju usługi. Prosimy o kontakt, aby uzyskać dokładne informacje dotyczące czasu trwania konkretnych napraw. Staramy się wykonać prace szybko, nie rezygnując przy tym z jakości.",
  },
  {
    id: 3,
    title: "Gdzie można was znaleźć?",
    text: "Znajdziesz nas pod adresem [adres warsztatu]. Możesz także skontaktować się telefonicznie: [numer telefonu].",
  },
];

const FAQ = () => {
  return (
    <div className="mx-auto max-h-screen max-w-screen-2xl flex flex-col gap-24 items-center">
      <div className="max-w-screen-xl w-full text-left">
        <h2 className="text-5xl font-bold">Często zadawane pytania</h2>
      </div>
      <div>
        {questions.map((question) => (
          <FAQDropdown key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
