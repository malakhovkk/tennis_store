"use client";
import { rackets } from "@/utils/mock";
import Card from "../../components/ui/card";
import { IRacket } from "@/utils/types.dto";
import { useRef, useState } from "react";
const data: IRacket[] = rackets;

export default function Home() {
  const [cur, setCur] = useState(0);
  const curElement = data.find((el) => el.id === data[cur].id);

  return (
    <main className="main p-4 flex-col">
      <h2 className="text-lg">Ракетки</h2>
      <ul className="flex flex-wrap gap-4 justify-center mt-4">
        <svg
          className="w-10"
          style={{ transform: "rotate(180deg)" }}
          viewBox="0 0 5 9"
          onClick={() => setCur(Math.max(0, cur - 1))}
        >
          <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"></path>
        </svg>
        {<Card key={curElement?.id} racketData={curElement!!} />}
        <svg
          className="w-10"
          viewBox="0 0 5 9"
          onClick={() => setCur(Math.min(data.length - 1, cur + 1))}
        >
          <path d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"></path>
        </svg>

        {/* {data.map((racket: IRacket) => {
          return <Card key={racket.id} racketData={racket} />;
        })} */}
      </ul>
    </main>
  );
}
