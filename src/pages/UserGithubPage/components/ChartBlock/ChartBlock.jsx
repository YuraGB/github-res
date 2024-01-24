import { useUserGithub } from "./useChartBlock.js";
import classes from "./charts.module.scss";
import PropTypes from "prop-types";

/**
 *  ChartBlock
 * @param repoName
 * @return {JSX.Element}
 * @constructor
 */
const ChartBlock = ({ repoName }) => {
  const { error, languages, isLoading } = useUserGithub(repoName);

  return (
    <section>
      <h4 className={classes.title}>Languages: </h4>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>{error.message}</p> : null}
      {languages
        ? languages.map(([name, value]) => {
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
