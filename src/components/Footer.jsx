import PropTypes from "prop-types";

const Footer = ({ data }) => {
  const { logo, location, phone, email, nav1, nav2, social } = data[0].footer[0];

  // prettier-ignore
  const List = ({ data }) => data.links.map((el, key) => <li key={key}><a href="#">{el}</a></li>);

  const ContactContainer = ({ className, src, alt, text }) => {
    return (
      <div className={className}>
        <img src={src} alt={alt} />
        <span>{text}</span>
      </div>
    );
  };

  ContactContainer.propTypes = {
    className: PropTypes.any.isRequired,
    src: PropTypes.any.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  const ccProps = {
    location: { className: "location", src: location.icon, alt: location.alt, text: location.text },
    phone: { className: "phone", src: phone.icon, alt: phone.alt, text: phone.text },
    email: { className: "email", src: email.icon, alt: email.alt, text: email.text },
  };

  return (
    <footer>
      <div className="logo-container">
        <img src={logo.img} alt={logo.alt} />
      </div>
      <div className="contact-container">
        <ContactContainer {...ccProps.location} />
        <div className="contact-methods">
          <ContactContainer {...ccProps.phone} />
          <ContactContainer {...ccProps.email} />
        </div>
        <div className="about-us">
          <ul>
            <List data={nav1} />
          </ul>
        </div>
        <div className="legal">
          <ul>
            <List data={nav2} />
          </ul>
        </div>
        <div className="social">
          {social.map((el, key) => {
            const IconComponent = el;
            return (
              <a href="#" key={key}>
                <IconComponent />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = { data: PropTypes.array.isRequired };

export default Footer;
