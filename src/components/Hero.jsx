import Image from "../assets/illustration-intro.png";
import PropTypes from "prop-types";

const Hero = ({ data }) => {
  const { header, p, btn } = data[0].hero[0];

  return (
    <section className="hero">
      <img src={Image} alt="" />
      <h1>{header}</h1>
      <span>{p}</span>
      <button>{btn}</button>
    </section>
  );
};

Hero.propTypes = { data: PropTypes.array.isRequired };

export default Hero;
