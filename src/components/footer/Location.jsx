import PropTypes from "prop-types";

const Location = ({ location }) => {
  const LocationSVG = location.icon;

  return (
    <div className="location">
      <LocationSVG />
      <span>{location.text}</span>
    </div>
  );
};

Location.propTypes = { location: PropTypes.object.isRequired };

export default Location;
