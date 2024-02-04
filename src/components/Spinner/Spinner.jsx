import { Spin } from "antd";
import classes from "./spinner.module.scss";

/**
 * SpinnerComponent
 * @return {JSX.Element}
 * @constructor
 */
const SpinnerComponent = () => {
  return (
    <div className={classes.spinnerWrapper}>
      <Spin size={"large"} />
    </div>
  );
};

export default SpinnerComponent;
