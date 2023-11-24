import React from "react";

type Props = {
  service: {
    image: string;
    text: string;
  };
};

const OfferCard = (props: Props) => {
  const { service } = props;
  const bgImage = {
    backgroundImage: `url(${service.image})`,
  };
  return (
    <div
      style={bgImage}
      className="max-w-sm 2xl:w-96 bg-cover bg-center h-[576px] w-full"
    >
      <div className="flex w-full h-full items-end">
        <h3 className="text-3xl bg-black/50 text-white p-4 w-full text-center">
          {service.text}
        </h3>
      </div>
    </div>
  );
};

export default OfferCard;
