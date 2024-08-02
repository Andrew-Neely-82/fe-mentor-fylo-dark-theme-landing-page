import PropTypes from "prop-types";

const GridSection = ({ data }) => {
  return (
    <section className="feature-section" id="features">
      <div className="feature-wrapper">
        <div className="feature-container">
          {data[0].gridSection.grid.map((el, key) => (
            <div className="feature" key={key}>
              <picture>
                <img src={el.icon} alt={`${el.alt} icon`} />
              </picture>
              <div className="feature-info">
                <span className="title heading-normal">{el.title}</span>
                <span className="description">{el.p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

GridSection.propTypes = { data: PropTypes.array.isRequired };

export default GridSection;
