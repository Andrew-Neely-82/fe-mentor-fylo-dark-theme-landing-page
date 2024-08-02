import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const GetStarted = ({ data }) => {
  const { title, p, btn } = data[0].earlyAccessSection[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => console.log(values, "registered");

  return (
    <section className="get-started">
      <div className="get-started-wrapper">
        <span className="title heading-bold">{title}</span>
        <p>{p}</p>
        <div className="sign-up">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="email@example.com" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
            <button className="btn" type="submit">
              {btn}
            </button>
          </form>
          <span className="errors">{errors.email && <span>Please enter a valid email address</span>}</span>
        </div>
      </div>
    </section>
  );
};

GetStarted.propTypes = { data: PropTypes.array.isRequired };

export default GetStarted;
