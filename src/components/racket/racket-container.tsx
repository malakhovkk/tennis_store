import { Selection } from "../selection/selection";
import { RacketSelectionItem } from "../racket-selection-item/racket-selection-item";
import { getRackets } from "@/services/get-rackets";
import { getRacketsTop10 } from "@/services/get-rackets-top10";
export const RacketContainer = async () => {
  const { isError: isError10, data: data10 } = await getRackets({});
  const { isError: isErrorTop10, data: dataTop10 } = await getRacketsTop10({});
  if (isError10 || isErrorTop10) {
    return "error";
  }
  if (!data10 || !dataTop10) {
    return "not found";
  }
  return (
    <>
      <Selection title="Ракетки" hrefToAll="/rackets">
        {data10.map((racket) => (
          <RacketSelectionItem key={racket.id} racket={racket} />
        ))}
      </Selection>
      <Selection title="Топ-10 Ракеток" hrefToAll="/rackets/">
        {dataTop10.map((racket) => (
          <RacketSelectionItem key={racket.id} racket={racket} />
        ))}
      </Selection>
    </>
  );
};
