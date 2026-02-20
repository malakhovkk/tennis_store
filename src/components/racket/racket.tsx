import { IRacket } from "@/utils/types.dto";
import { FC } from "react";

import styles from "./racket.module.css";

type Props = {
  racket: IRacket;
};

export const Racket: FC<Props> = ({ racket }) => {
  const { name, imageUrl, description, brand, price, model } = racket;

  return (
    <section className={""}>
      <div>
        <div className={""}>{brand.name}</div>
        <div className={""}>{name}</div>
        <div>{description}</div>
      </div>
      <img className={""} src={imageUrl} alt={name} />
      <div>
        <div>Price: {price}</div>
        <div>Model: {model}</div>
      </div>
    </section>
  );
};
