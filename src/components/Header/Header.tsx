import { useState } from "react";
import { profile } from "../../data/profile";
import { Contact } from "../Contact/Contact";
import menuIcon from "../../assets/icons/menu.svg";
import closeIcon from "../../assets/icons/x-circle.svg";
import "./Header.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <a className="header__brand" href="#home" onClick={closeMenu}>
        {profile.name}
      </a>
      <button
        className="header__menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="header-nav"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        <img
          className="header__menu-icon"
          src={isOpen ? closeIcon : menuIcon}
          alt=""
        />
      </button>
      <nav
        id="header-nav"
        className={`header__nav ${isOpen ? "header__nav_open" : ""}`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            className="header__link"
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <div className="header__contact">
          <Contact />
        </div>
      </nav>
    </header>
  );
}
