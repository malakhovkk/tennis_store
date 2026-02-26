import Card from "../../components/ui/card";
import { IRacket } from "@/utils/types.dto";
import { getRackets } from "@/services/get-rackets";

export default async function RacketsPage() {
  const { data, isError } = await getRackets({});
  if (isError) {
    return <div>Ошибка загрузки данных</div>;
  }
  return (
    <main className="main p-4 flex-col">
      <h2 className="text-lg">Ракетки</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {data?.map((racket: IRacket) => {
          return <Card key={racket.id} racketData={racket} />;
        })} */}
      </ul>
    </main>
  );
}
