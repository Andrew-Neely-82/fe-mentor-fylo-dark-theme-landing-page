import PropTypes from "prop-types";

const Social = ({ social }) => {
  return (
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
  );
};

Social.propTypes = { social: PropTypes.array.isRequired };

export default Social;
