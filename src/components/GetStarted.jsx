import PropTypes from "prop-types";

const GetStarted = ({ data }) => {
  const { title, p, btn } = data[0].earlyAccessSection[0];
  return (
    <section className="get-started">
      <span>{title}</span>
      <p>{p}</p>
      <div className="sign-up">
        <input type="text" placeholder="email@example.com" />
        <button type="submit">{btn}</button>
      </div>
    </section>
  );
};

GetStarted.propTypes = { data: PropTypes.array.isRequired };

export default GetStarted;
