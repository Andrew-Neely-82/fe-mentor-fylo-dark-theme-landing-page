import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";

const Navbar = ({ data }) => {
  const { links } = data[0].nav;

  return (
    <div className="navbar">
      <div className="log-container">
        <img src={Logo} alt="Fylo Icon" />
      </div>
      <ul>
        {links.map((el, key) => (
          <li key={key}>
            <a href="#">{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Navbar.propTypes = { data: PropTypes.array.isRequired };

export default Navbar;
