import { useUserGithub } from "./useChartBlock.js";
import classes from "./charts.module.scss";
import PropTypes from "prop-types";
import ErrorComponent from "../../../../components/ErrorComponent/ErrorComponent.jsx";
import SpinnerComponent from "../../../../components/Spinner/Spinner.jsx";

/**
 *  ChartBlock
 * @param repoName
 * @return {JSX.Element}
 * @constructor
 */
const ChartBlock = ({ repoName }) => {
  const { error, languages, isLoading } = useUserGithub(repoName);

  if (isLoading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <ErrorComponent message={error.message} />;
  }
  return (
    <section>
      <h4 className={classes.title}>Languages: </h4>

      {languages
        ? /**
           *
           * @param {string} name
           * @param {string} value
           */
          languages.map(([name, value]) => {
            return (
              <div key={name + value} className={classes.list}>
                <p>{name}</p>
                <p>{Math.round(value) + "%"}</p>
              </div>
            );
          })
        : null}
    </section>
  );
};

export default ChartBlock;

ChartBlock.propTypes = {
  repoName: PropTypes.string.isRequired,
};
