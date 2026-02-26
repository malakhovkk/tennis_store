import { FC } from "react";

import { NavigationLink } from "../ui/navigationLink";
import { IRacket } from "@/utils/types.dto";

type Props = {
  racket: IRacket;
};

export const RacketSelectionItem: FC<Props> = ({ racket }) => {
  const { imageUrl, name, id } = racket;

  return (
    <div>
      <img className={"w-80 h-72"} src={imageUrl} alt={name} />
      <NavigationLink href={`/racket/${id}`} title={name} />
    </div>
  );
};
