import { rackets } from "@/utils/mock";
import { IRacket } from "@/utils/types.dto";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return rackets.map((racket) => ({
    id: racket.id.toString(),
  }));
}

export default async function RacketPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const racket = rackets.find((racket) => racket.id === parseInt(id));
  if (!racket) {
    notFound();
  }

  return (
    <main className="main flex flex-row gap-4">
      <div className="">
        {racket.description}
        <hr />
        <span className="block mt-3 font-bold">Цена: {racket.price}$</span>
      </div>

      <div>
        <Image
          className="w-full"
          src={racket.imageUrl}
          alt={racket.name}
          width={200}
          height={250}
          unoptimized={true}
        />
      </div>
    </main>
  );
}
