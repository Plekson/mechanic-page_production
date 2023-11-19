import React from "react";

type Props = {
  testimonial: {
    text: string;
    name: string;
  };
};

const Opinions = (props: Props) => {
  const { testimonial } = props;
  return (
    <div className="pl-8 border-l-2 border-purple-700 flex flex-col gap-8">
      <p className="text-xl">{testimonial.text}</p>
      <p className="text-lg uppercase tracking-wider font-light">
        {testimonial.name}
      </p>
    </div>
  );
};

export default Opinions;
