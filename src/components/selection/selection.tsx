import { FC, PropsWithChildren } from "react";
import { Link } from "@/components/link/link";

type Props = PropsWithChildren & {
  title: string;
  hrefToAll?: string;
};

export const Selection: FC<Props> = ({ children, hrefToAll, title }) => {
  return (
    <section>
      <div>
        <div>{title}</div>
        {hrefToAll && <Link href={hrefToAll}>Все</Link>}
      </div>
      <div className={"w-200"}>{children}</div>
    </section>
  );
};
