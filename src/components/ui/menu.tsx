import { NavigationLink } from "./navigationLink";

const navLinks = [
  { href: "/", title: "Главная" },
  { href: "/rackets", title: "Ракетки" },
  { href: "/top-10-rackets", title: "Топ-10" },
];

export default function Menu() {
  return (
    <nav>
      <ul className="flex gap-7">
        {navLinks.map(({ href, title }) => {
          return <NavigationLink key={title} href={href} title={title} />;
        })}
      </ul>
    </nav>
  );
}
