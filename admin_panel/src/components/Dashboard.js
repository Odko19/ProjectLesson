import React from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import ControlPanel from "./SideMenu/ControlPanel";
import Orders from "./SideMenu/Orders";
import Invoices from "./SideMenu/Invoices";
import FoodMenu from "./SideMenu/FoodMenu";
import Users from "./SideMenu/Users";
import Deliverymen from "./SideMenu/Deliverymen";
import "antd/dist/antd.css";
import "../style/main.css";
import Login from "../components/Login";
import {
  Layout,
  Menu,
  Button,
  Dropdown,
  Space,
  Drawer,
  Form,
  Input,
} from "antd";
import Icons from "../pictures/icons/icons.js";
import { MENU } from "../util/constants";
import { useState } from "react";
import { userService } from "../services/userService";
import "antd/dist/antd.css";
import { useUser } from "../contexts/UserContext";
import { toast } from "react-toastify";

export default function Dashboard() {
  const { Header, Content, Footer, Sider } = Layout;
  const [user, setUser] = useUser();

  /* Drawer open and close */
  const [visible, setVisible] = useState(false);
  const onClose = () => {
    setVisible(false);
  };
  let navigate = useNavigate();
  const handleMenuClick = (e) => {
    if (e.key === "1") {
      setVisible(true);
    } else {
      window.localStorage.clear();
      navigate(`/`);
    }
  };
  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: "Тохиргоо",
          key: "1",
        },
        {
          label: "Гарах",
          key: "2",
        },
      ]}
    />
  );

  /* Form input value update */
  const onFinish1 = (values) => {
    const value = {
      email: user.data.email,
      password: values.password,
      name: values.name,
      phone: values.phone,
      token: user.token,
    };
    userService
      .editUser(value)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          toast("bollo");
          setUser(res);
        }
      });
  };

  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Layout style={{ margin: "0", height: "100vh" }}>
        <Sider theme="light" className="sider">
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            {/* <div className="logoImg"> */}
            <Menu.Item
              key="10"
              icon={<img src={Icons.logo} />}
              style={{ margin: "20px 0px" }}
            >
              <div className="logo-name">
                <p>Food Delivery</p>
              </div>
            </Menu.Item>

            {MENU.map((e) => {
              return (
                <Menu.Item
                  key={e.id}
                  icon={<img src={Icons[e.page]} />}
                  style={{ margin: "26px 0" }}
                >
                  <p className="font ">{e.name}</p>
                  <Link to={`/${e.page}`} />
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout className="contentLay">
          <Header className="header">
            <div className="flex">
              <img src="../images/logo/admin.svg" alt="" />
              <Dropdown overlay={menu}>
                <Button>
                  <Space>Админ</Space>
                </Button>
              </Dropdown>
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Routes
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<ControlPanel />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/foods" element={<FoodMenu />} />
              <Route path="/users" element={<Users />} />
              <Route path="/deliveryman" element={<Deliverymen />} />
            </Routes>
          </Content>
          <Footer
            style={{
              textAlign: "right",

              bottom: 0,
              float: "right",
            }}
          >
            <span className="fooder">
              Andy Design ©2022 Created by Andy's Code
            </span>
          </Footer>
        </Layout>
      </Layout>

      {/* Drawer form */}
      <Drawer
        title="Тохиргоо"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Form
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish1}
          onFinishFailed={onFinishFailed1}
          autoComplete="off"
        >
          <Form.Item
            label="И-мэйл "
            name="email"
            className="form-drawer"
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
            label="Нэр "
            name="name"
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
            label="Утас"
            name="phone"
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
            wrapperCol={{
              span: 24,
            }}
          >
            <Button htmlType="submit" className="btnLogin ">
              Хадгалах
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
