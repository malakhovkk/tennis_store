import { rackets } from "@/utils/mock";
import Card from "../../components/ui/card";
import { IRacket } from "@/utils/types.dto";

const data: IRacket[] = rackets;

export default function Home() {
  return (
    <main className="main p-4flex-col">
      <h2 className="text-lg">Ракетки</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        {data.map((racket: IRacket) => {
          return <Card key={racket.id} racketData={racket} />;
        })}
      </ul>
    </main>
  );
}
