import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";

const Navbar = ({ data }) => {
  const { links } = data[0].nav;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
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
    </nav>
  );
};

Navbar.propTypes = { data: PropTypes.array.isRequired };

export default Navbar;
