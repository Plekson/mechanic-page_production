import React, { useState } from "react";
import AngleTop from "@/public/angle-top.svg";
import AngleBottom from "@/public/angle-bottom.svg";
import Image from "next/image";

type Props = {
  question: {
    title: string;
    text: string;
  };
};

const FAQDropdown = (props: Props) => {
  const { question } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 rounded-md p-4 mb-4 max-w-2xl">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-semibold">{question.title}</h3>
        <span>
          {isOpen ? (
            <Image src={AngleTop} alt={AngleTop} width={32} height={32} />
          ) : (
            <Image src={AngleBottom} alt={AngleBottom} width={32} height={32} />
          )}
        </span>
      </div>
      <div
        className={`mt-2 text-gray-600 overflow-hidden transition-max-h duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div>{question.text}</div>
      </div>
    </div>
  );
};

export default FAQDropdown;
