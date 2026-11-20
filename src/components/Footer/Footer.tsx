import { Contact } from "../Contact/Contact";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <h2 className="footer__title">Get in Touch</h2>
      <p className="footer__text">
        Have a project in mind, an open position, or just want to chat about
        development? Drop me a line or reach out using the links below.
      </p>
      <Contact />
    </footer>
  );
}
