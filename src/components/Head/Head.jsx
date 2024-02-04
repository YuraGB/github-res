import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

/**
 *  Head
 * @param {string} title
 * @param {string} description
 * @return {JSX.Element}
 * @constructor
 */
const Head = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
