import PropTypes from "prop-types";

const SeeHow = ({ data }) => {
  const { image, alt, title, paragraph, a, svg } = data[0].seeHow[0];

  return (
    <section className="see-how-section">
      <picture>
        <img src={image} alt={alt} />
      </picture>
      <div className="text-container">
        <span className="title">{title}</span>
        {paragraph.map((el, key) => (
          <span key={key}>{el.p}</span>
        ))}
        <a href="#">
          {a}
          <img src={svg} alt="" />
        </a>
      </div>
    </section>
  );
};

SeeHow.propTypes = { data: PropTypes.array.isRequired };

export default SeeHow;
