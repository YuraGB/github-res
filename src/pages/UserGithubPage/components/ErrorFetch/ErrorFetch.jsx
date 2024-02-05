import classes from "./errorFetch.module.scss";
import PropTypes from "prop-types";

/**
 * ErrorFetch
 * @param globalDataError
 * @param reposError
 * @param userName
 * @return {JSX.Element}
 * @constructor
 */
const ErrorFetch = ({ globalDataError, reposError, userName }) => {
  return (
    <div className={classes.noUser}>
      There is an Error with the user nickname: {userName}
      <p className={classes.error}>
        Error is : {globalDataError?.message || reposError?.message}
      </p>
    </div>
  );
};

export default ErrorFetch;

ErrorFetch.propTypes = {
  globalDataError: PropTypes.object,
  reposError: PropTypes.object,
  userName: PropTypes.string,
};
