import { profile } from "../../data/profile";
import mailIcon from "../../assets/icons/mail.svg";
import mapPinIcon from "../../assets/icons/map-pin.svg";
import fileIcon from "../../assets/icons/file-text.svg";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import "./Contact.css";

const socialLinks = [
  { label: "GitHub", href: profile.githubUrl, icon: githubIcon },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: linkedinIcon },
];

export function Contact() {
  return (
    <nav className="contact" aria-label="Contact">
      <ul className="contact__list">
        <li>
          <a
            className="contact__link contact__link_type_email"
            href={`mailto:${profile.email}`}
          >
            <img className="contact__icon" src={mailIcon} alt="" />
            {profile.email}
          </a>
        </li>
        <li>
          <a
            className="contact__link contact__link_type_location"
            href={profile.locationUrl}
            target="_blank"
            rel="noreferrer"
          >
            <img className="contact__icon" src={mapPinIcon} alt="" />
            {profile.locationText}
          </a>
        </li>
        <li>
          <a
            className="contact__link contact__link_type_resume"
            href={profile.resume}
            download
          >
            <img className="contact__icon" src={fileIcon} alt="" />
            Download my resume
          </a>
        </li>
      </ul>
      <ul className="contact__social-list">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              className="contact__social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              <img className="contact__social-icon" src={link.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
