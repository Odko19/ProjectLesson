import "../style/login.css";
import React, { useEffect } from "react";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import { userService } from "../services/userService";
import { useUser } from "../contexts/UserContext";

export default function Login() {
  const [user, setUser] = useUser();

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
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="И-мэйл "
                    name="email"
                    className="font1"
                    rules={[
                      {
                        required: true,
                        message: "И-мэйл хаягаа оруулна уу.",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Нууц үг"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Нууц үгээ оруулна уу. ",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      offset: 17,
                      span: 7,
                    }}
                  >
                    Нууц үг мартсан?
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      span: 24,
                    }}
                  >
                    <Button htmlType="submit" className="btnLogin ">
                      Нэвтрэх
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
