import PropTypes from "prop-types";

const SeeHow = ({ data }) => {
  const { image, alt, title, paragraph, a, SVG } = data[0].seeHow[0];

  return (
    <section className="see-how-section">
      <div className="see-how-wrapper">
        <picture>
          <img src={image} alt={alt} />
        </picture>
        <div className="text-container">
          <span className="title heading-bold">{title}</span>
          {paragraph.map((el, key) => (
            <span key={key}>{el.p}</span>
          ))}
          <a href="#">
            {a}
            <SVG />
          </a>
        </div>
      </div>
    </section>
  );
};

SeeHow.propTypes = { data: PropTypes.array.isRequired };

export default SeeHow;
