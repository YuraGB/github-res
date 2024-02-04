import PropTypes from "prop-types";

/**
 *  User name or login
 * @param nicknameOrName
 * @return {JSX.Element}
 * @constructor
 */
const UserName = ({ nicknameOrName }) => {
  return <p>User name or login: {nicknameOrName}</p>;
};

export default UserName;

UserName.propTypes = {
  nicknameOrName: PropTypes.string,
};
