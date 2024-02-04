import classes from "./homePage.module.scss";
import SearchUserInput from "./components/searchUserInput/SearchUserInput.jsx";
import { Fragment } from "react";
import Head from "../../components/Head/Head.jsx";

const HomePage = () => {
  return (
    <Fragment>
      <Head
        description={"Home page github resume input"}
        title={"Github Resume Home page"}
      />

      <article className={classes.inputWrapper}>
        <h1 className={classes.title}>Home Page</h1>
        <SearchUserInput />
      </article>
    </Fragment>
  );
};

export default HomePage;
