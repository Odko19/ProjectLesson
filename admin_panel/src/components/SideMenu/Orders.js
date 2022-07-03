import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import {
  List,
  Row,
  Col,
  Pagination,
  Select,
  Checkbox,
  Menu,
  Dropdown,
  Drawer,
} from "antd";

import { useUser } from "../../contexts/UserContext";
import "../../style/menuStyle/orders.css";
import moment from "moment";

export default function Orders() {
  const [user, setUser] = useUser();
  const [order, setOrder] = useOrder();
  const [select, setSelect] = useState();
  const [pagination, setPagination] = useState();

  console.log(select);
  // drawer open, close
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState();

  // service
  useEffect(() => {
    otherServices
      .getAllOrders({ token: user?.token }, pagination)
      .then((e) => e.json())
      .then((e) => setOrder(e.data.docs));
  }, [pagination]);

  // pagination handler
  function handler(e) {
    setPagination(e);
  }

  // checkbox
  const onChangeChecked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  // select option
  const { Option } = Select;
  const handleOnChange = (value, item) => {
    const newArray = new Array(...order);
    const statusModified = newArray.filter((item1) => {
      if (item1.user_id !== item.user_id) {
        return (item.status = value.label);
      } else {
        return item1.status;
      }
    });
    setOrder(statusModified);
  };

  // select option 1
  const selectOption1 = (value) => {
    const newArray = new Array(...order);
    const selected = newArray.filter((item) => {
      return item.status === value.label;
    });

    setSelect(selected);
  };

  // DropDown delete, itemlook
  function handleDelete(data) {
    const newArray = new Array(...order);
    setOrder(newArray.filter((item) => item._id !== data._id));
    localStorage.setItem("order", JSON.stringify(newArray));
  }
  const onClose = () => {
    setVisible(false);
  };
  function handleLook(data) {
    setData(data);
    setVisible(true);
  }

  return (
    <div className="content-padding">
      <div className="flx-order">
        <div className="box"></div>
        <p className="font1">ЗАХИАЛГУУД</p>
      </div>
      <div className="flx-btn">
        <div>
          <Select
            labelInValue
            defaultValue={{
              value: "Бүгд",
              label: "Бүгд",
            }}
            style={{
              width: 120,
            }}
            onSelect={(value) => selectOption1(value)}
          >
            <Option value="all">bugd</Option>
            <Option value="waiting">waiting</Option>
            <Option value="Success">Амжилттай</Option>
            <Option value="Canceled">Цуцлагдсан</Option>
          </Select>
        </div>
        <div>
          <button>Захиалга нэмэх</button>
        </div>
      </div>

      <List
        header={
          <Row className="head-list">
            <Col span={4}>
              <div className="flx-order">
                <Checkbox
                  onChange={onChangeChecked}
                  className="check"
                ></Checkbox>
                <p className="font2"> Он сар өдөр</p>
              </div>
            </Col>
            <Col span={3}>
              <p className="font2">Захиалга #</p>
            </Col>
            <Col span={3}>
              <p className="font2">Хэрэглэгч</p>
            </Col>
            <Col span={3}>
              <p className="font2">Захиалга</p>
            </Col>
            <Col span={3}>
              <p className="font2">Нийт дүн</p>
            </Col>
            <Col span={3}>
              <p className="font2">Төлбөр</p>
            </Col>
            <Col span={2}>
              <p className="font2">Утас</p>
            </Col>
            <Col span={3}>
              <div className="flx-btn">
                <p className="font2">Төлөв</p>
                <div>
                  <img src="/images/logo/point.svg" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        }
        footer={
          <div>
            <Pagination defaultCurrent={1} total={50} onChange={handler} />
          </div>
        }
        bordered
        dataSource={select ? select : order}
        renderItem={(item) => {
          return (
            <Row>
              <Col span={3}>
                <Checkbox
                  onChange={onChangeChecked}
                  className="check"
                ></Checkbox>
                {moment(item.created_date).format("YYYY/MM/DD")}
              </Col>
              <Col span={3}>0001</Col>
              <Col span={3}>Odko</Col>
              <Col span={3}>Броккол......</Col>
              <Col span={3}>{item.total_price}</Col>

              <Col span={3}>{item.payment_type}</Col>
              <Col span={2}>{item.phone}</Col>
              <Col span={4}>
                <div className="flx-state">
                  <Select
                    labelInValue
                    defaultValue={{
                      value: `${item.status}`,
                      label: `${item.status}`,
                    }}
                    style={{
                      width: 120,
                    }}
                    onSelect={(value) => handleOnChange(value, item)}
                  >
                    {/* <Option value="Received">Бүгд</Option> */}
                    <Option value="waiting">waiting</Option>
                    <Option value="Success">Амжилттай</Option>
                    <Option value="Canceled">Цуцлагдсан</Option>
                  </Select>

                  <div>
                    {/* <img src="/images/logo/point.svg" alt="" /> */}
                    <Dropdown
                      overlay={
                        <Menu
                          items={[
                            {
                              label: (
                                <button onClick={() => handleLook(item)}>
                                  "Харах"
                                </button>
                              ),
                              key: "1",
                            },
                            {
                              label: (
                                <button onClick={() => handleDelete(item)}>
                                  "Устах"
                                </button>
                              ),
                              key: "2",
                            },
                          ]}
                        />
                      }
                    >
                      <img src="/images/logo/point.svg" alt="" />
                    </Dropdown>
                  </div>
                </div>
              </Col>
            </Row>
          );
        }}
      />
      <Drawer
        title="#00001"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div>
          <p>Дэлгэрэнгүй</p>
          <div>
            <p>Захиалга</p>
            <p>{data && data.total_price}</p>
          </div>
          <> {data && data._id}</>
        </div>
      </Drawer>
    </div>
  );
}
