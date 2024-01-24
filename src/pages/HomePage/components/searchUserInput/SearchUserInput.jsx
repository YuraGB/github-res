import { Button, Form, Input } from "antd";
import classes from "./input.module.scss";
import { useInputSearch } from "./useInputSearch.jsx";

const SearchUserInput = () => {
  const { onFinishFailed, onFinish } = useInputSearch();

  return (
    <Form
      layout="vertical"
      className={classes.form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Github login name"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder={"Please, type Github login"} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Get user data
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchUserInput;
