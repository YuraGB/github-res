import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <article className={styles.layout}>
      <Outlet />
    </article>
  );
};

export default Layout;
