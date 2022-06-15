import "../style/login.css";
import React, { useEffect } from "react";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import { userService } from "../services/userService";
import { useUser } from "../contexts/UserContext";

export default function Login() {
  const [user, setUser] = useUser();

  console.log(user);

  const onFinish = (values) => {
    // console.log("Success:", values);
    userService
      .loginUser(values)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setUser(res);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="login-profile"></div>
        </Col>
        <Col span={12}>
          <div className="login-profile">
            <div className="bg1">
              <div className="loginBox">
                <div className="flex">
                  <img src="images/logo/logo.svg" alt="" className="logo" />
                  <p className="font ">MStars Food Delivery</p>
                </div>

                <Form
                  className="loginForm"
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Username"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item> */}

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
