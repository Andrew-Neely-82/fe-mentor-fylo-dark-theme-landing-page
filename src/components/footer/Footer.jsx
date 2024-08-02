import { ContactMethod } from "./ContactMethod";
import PropTypes from "prop-types";
import Location from "./Location";
import AboutUs from "./AboutUs";
import Social from "./Social";
import Legal from "./Legal";

const Footer = ({ data }) => {
  const { logo, location, nav1, nav2, social, contactMethods } = data[0].footer[0];
  const LogoIcon = logo.img;

  return (
    <footer>
      <div className="footer-wrapper">
        <div className="logo-container">
          <LogoIcon />
        </div>
        <div className="contact-container">
          <Location location={location} />
          <ContactMethod contactMethods={contactMethods} />
          <AboutUs nav1={nav1} />
          <Legal nav2={nav2} />
          <Social social={social} />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = { data: PropTypes.array.isRequired };

export default Footer;
