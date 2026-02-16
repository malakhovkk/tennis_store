import { IRacket } from "@/utils/types.dto";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  racketData: IRacket;
}

export default function Card({ racketData }: CardProps) {
  const url = `/racket/${racketData.id}`;
  return (
    <Link href={url}>
      <li className="flex-col">
        <Image
          className="border border-gray-500 p-4"
          src={racketData.imageUrl}
          width={200}
          height={250}
          alt={racketData.name ? racketData.name : "изображение ракетки"}
          unoptimized={true}
        />
        <span className="text-gray-500">{racketData.name}</span>
      </li>
    </Link>
  );
}
