"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  href: string;
  title: string;
  activeClassName?: string;
  className?: string;
}

export default function NavigationLink({
  href,
  title,
  activeClassName = "text-blue-900",
  className = "",
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={isActive ? activeClassName : ""}>
      <Link href={href} className={className}>
        {title}
      </Link>
    </li>
  );
}
