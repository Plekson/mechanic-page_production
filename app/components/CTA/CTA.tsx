import React from "react";

type Props = {
  link: string;
  text: string;
};

const CTA = (props: Props) => {
  return (
    <a
      href={props.link}
      className="py-2 px-4 rounded bg-purple-700 hover:bg-gray-500 duration-200 text-white"
    >
      {props.text}
    </a>
  );
};

export default CTA;
