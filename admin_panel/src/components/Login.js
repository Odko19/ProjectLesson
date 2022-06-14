import "../style/login.css";
import React from "react";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
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
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    className="font1"
                    label="И-мэйл"
                    name="gmail"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                  >
                    <br />
                    <br />

                    <Input />
                  </Form.Item>

                  <Form.Item
                    label=" Нууц үг"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    {" "}
                    <br />
                    <Input.Password />
                  </Form.Item>

                  <Form.Item>
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
