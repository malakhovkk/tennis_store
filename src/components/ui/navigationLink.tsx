"use client";

import { ComponentProps, FC } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
type Props = ComponentProps<typeof Link>;

interface NavigationLinkProps {
  href: string;
  title: string;
}

export const NavigationLink: FC<Props> = ({ children, ...props }) => {
  const pathname = usePathname();
  const activeClassName = "text-blue-900";
  const isActive = pathname === props.href;

  return (
    <li key={props.key} className={isActive ? activeClassName : ""}>
      <Link href={props.href}>{props.title}</Link>
    </li>
  );
};
