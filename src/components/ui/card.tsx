import { IRacket } from "@/utils/types.dto";
import Link from "next/link";

interface CardProps {
  racketData: IRacket;
}

export default function Card({ racketData }: CardProps) {
  const url = `/racket/${racketData.id}`;
  return (
    <Link href={url}>
      <div className="flex-col">
        <img
          className="border border-gray-500 p-4 box-border"
          src={racketData.imageUrl}
          width={200}
          height={250}
          alt={racketData.name ? racketData.name : "изображение ракетки"}
        />
        <span className="text-gray-500">{racketData.name}</span>
      </div>
    </Link>
  );
}
