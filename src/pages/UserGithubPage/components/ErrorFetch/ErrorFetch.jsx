import classes from "./errorFetch.module.scss";

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
