import PropTypes from "prop-types";
import ListItems from "./ListItems";

const Legal = ({ nav2 }) => {
  return (
    <div className="legal">
      <ul>
        <ListItems data={nav2} />
      </ul>
    </div>
  );
};

export default Legal;

Legal.propTypes = {
  nav2: PropTypes.shape({
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
