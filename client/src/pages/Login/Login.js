import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";

const rules = [
  {
    required: true,
    message: "required",
  },
];

const Login = () => {
  const onFinish = (values) => {
    console.log("success", values);
  };
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="bg-third p-5 rounded w-[450px] ">
        <div className="flex items-center justify-center">
          <h1 className="text-primary " id="headline">
            ShopBag
            <span className="text-gray-500"> - LOGIN</span>
          </h1>
        </div>
        <Divider />
        <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={rules}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={rules}>
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button type="primary" className="mt-2" htmlType="submit" block>
            Login
          </Button>
          <div className="mt-5 text-center">
            <span className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-link">
                Register
              </Link>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
