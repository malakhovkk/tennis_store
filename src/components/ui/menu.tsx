import { NavigationLink } from "./navigationLink";

const navLinks = [
  { href: "/", title: "Главная", activeClassName: "text-blue-900" },
  { href: "/rackets", title: "Ракетки", activeClassName: "text-blue-900" },
];

export default function Menu() {
  return (
    <nav>
      <ul className="flex gap-7">
        {navLinks.map(({ href, title, activeClassName }) => {
          return <NavigationLink key={title} href={href} title={title} />;
        })}
      </ul>
    </nav>
  );
}
