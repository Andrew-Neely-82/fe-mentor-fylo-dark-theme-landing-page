import PropTypes from "prop-types";

export const ContactMethod = ({ contactMethods }) => {
  return (
    <div className="contact-methods">
      {contactMethods.icon.map((IconComponent, index) => (
        <div className="contact-method" key={index}>
          <IconComponent />
          <span>{contactMethods.text[index]}</span>
        </div>
      ))}
    </div>
  );
};

ContactMethod.propTypes = { contactMethods: PropTypes.object.isRequired };
