import { IRacket } from "@/utils/types.dto";
import { FC } from "react";

type Props = {
  racket: IRacket;
};

export const Racket: FC<Props> = ({ racket }) => {
  const { name, imageUrl, description, brand, price, model } = racket;

  return (
    <section>
      <div>
        <div>{brand.name}</div>
        <div>{name}</div>
        <div>{description}</div>
      </div>
      <img src={imageUrl} alt={name} />
      <div>
        <div>Price: {price}</div>
        <div>Model: {model}</div>
      </div>
    </section>
  );
};
