import React from "react";

type Props = {
  link: string;
  text: string;
};

const CTA = (props: Props) => {
  return (
    <a
      href={props.link}
      className="border py-2 px-4 rounded-full hover:bg-purple-600 border-purple-700 duration-200"
    >
      {props.text}
    </a>
  );
};

export default CTA;
