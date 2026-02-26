import { Selection } from "../selection/selection";
import Card from "../ui/card";
import { getRackets } from "@/services/get-rackets";
import { getRacketsTop10 } from "@/services/get-rackets-top10";
export const RacketContainer = async () => {
  const [
    { isError: isError, data: data },
    { isError: isErrorTop10, data: dataTop10 },
  ] = await Promise.all([getRackets({}), getRacketsTop10({})]);
  if (isError || isErrorTop10) {
    return "error";
  }
  if (!data || !dataTop10) {
    return "not found";
  }
  return (
    <>
      <Selection title="Ракетки" hrefToAll="/rackets">
        {data?.map((racket) => (
          <Card key={racket.id} racketData={racket} />
        ))}
      </Selection>
      <Selection title="Топ-10 Ракеток" hrefToAll="/rackets/">
        {dataTop10?.map((racket) => (
          <Card key={racket.id} racketData={racket} />
        ))}
      </Selection>
    </>
  );
};
