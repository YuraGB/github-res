import PropTypes from "prop-types";

/**
 * MainLanguage
 * @param language
 * @return {JSX.Element|null}
 * @constructor
 */
const MainLanguage = ({ language }) => {
  return language ? <p>Main language: {language}</p> : null;
};

export default MainLanguage;

MainLanguage.propTypes = {
  language: PropTypes.string,
};
