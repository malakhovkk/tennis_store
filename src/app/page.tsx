import Image from "next/image";
import { Suspense } from "react";
import { RacketContainer } from "@/components/racket/racket-container";
import Loading from "@/components/loading/loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <RacketContainer />
    </Suspense>
  );
}
