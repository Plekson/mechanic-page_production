import React from "react";

type Props = {
  feature: {
    id: number;
    icon: string;
    title: string;
    description: string;
  };
};

const AboutCard = (props: Props) => {
  const { feature } = props;

  return (
    <div className="max-w-sm flex flex-col gap-8">
      <div className="h-16 flex items-center justify-center">
        <img
          src={feature.icon}
          alt={feature.icon}
          className="h-full max-w-full"
        />
      </div>
      <div className="w-full text-center">
        <h3 className="text-3xl">{feature.title}</h3>
      </div>
      <div>
        <p className="text-xl text-center">{feature.description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
