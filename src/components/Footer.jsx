import { footerLinks, socialMediaLinks } from "../data";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {footerLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.pageName}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="footer-icons">
        {socialMediaLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours
        <span id="date">{new Date().getFullYear()}</span> | all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
