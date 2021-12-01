import styles from "./Button.module.scss";
import PropTypes from "prop-types";
const types = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
};
const Button = ({ className, text, onClick, variant, type }) => {
  const selectedClassName = types[variant];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${selectedClassName} ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
Button.defaultProps = {
  variant: "primary",
  className: "",
  type: "button",
  onClick: () => {},
};
Button.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};
