import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";

const Navbar = ({ data }) => {
  const { links, href } = data[0].nav;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="#">
            <img src={Logo} alt="Fylo Icon" />
          </a>
        </div>
        <ul>
          {links.map((el, key) => (
            <li key={key}>
              <a href={href[key]}>{el}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = { data: PropTypes.array.isRequired };

export default Navbar;
