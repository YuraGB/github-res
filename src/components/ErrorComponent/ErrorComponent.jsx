import classes from "./errorComponent.module.scss";
import PropTypes from "prop-types";

/**
 *
 * @param message
 * @return {JSX.Element}
 * @constructor
 */
const ErrorComponent = (message) => {
  let messageText = message ? message : "Something went wrong";

  return <div className={classes.noData}>{messageText}</div>;
};

export default ErrorComponent;

ErrorComponent.propTypes = {
  message: PropTypes.string,
};
