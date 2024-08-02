import PropTypes from "prop-types";

const Reviews = ({ data }) => {
  return (
    <section className="reviews-section">
      <div className="reviews-wrapper">
        {data[0].cardsSection.map((el, key) => (
          <div className="card" key={key}>
            <span className="review">{el.review}</span>
            <div className="user-info">
              <img src={el.img} alt={`${el.user}, ${el.role}`} />
              <div>
                <span className="user heading-normal">{el.user}</span>
                <span className="role">{el.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Reviews.propTypes = { data: PropTypes.array.isRequired };

export default Reviews;
