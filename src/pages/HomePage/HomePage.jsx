import classes from "./homePage.module.scss";
import SearchUserInput from "./components/searchUserInput/SearchUserInput.jsx";

const HomePage = () => {
  return (
    <article className={classes.inputWrapper}>
      <h1 className={classes.title}>Home Page</h1>
      <SearchUserInput />
    </article>
  );
};

export default HomePage;
