import { profile } from "../../data/profile";
import "./Header.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="#home">
        {profile.name}
      </a>
      <nav className="header__nav">
        {links.map((link) => (
          <a key={link.href} className="header__link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
