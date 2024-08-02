import PropTypes from "prop-types";
import ListItems from "./ListItems";

const AboutUs = ({ nav1 }) => {
  return (
    <div className="about-us">
      <ul>
        <ListItems data={nav1} />
      </ul>
    </div>
  );
};

export default AboutUs;

AboutUs.propTypes = {
  nav1: PropTypes.shape({
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
