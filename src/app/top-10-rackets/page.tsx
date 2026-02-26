import Card from "../../components/ui/card";
import { IRacket } from "@/utils/types.dto";
import { getRacketsTop10 } from "@/services/get-rackets-top10";
// const data: IRacket[] = rackets;

export default async function RacketsTop10Page() {
  const { data, isError } = await getRacketsTop10({});
  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }
  return (
    <main className="main p-4flex-col">
      <h2 className="text-lg">Ракетки</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {data?.map((racket: IRacket) => {
          return <Card key={racket.id} racketData={racket} />;
        })}
      </ul>
    </main>
  );
}
