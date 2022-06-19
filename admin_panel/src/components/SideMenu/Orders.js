import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { List, Row, Col, Divider, Pagination, Select, Checkbox } from "antd";

import { useUser } from "../../contexts/UserContext";
import "../../style/menuStyle/orders.css";
import moment from "moment";

export default function Orders() {
  const [user, setUser] = useUser();
  const [order, setOrder] = useOrder();
  const [pagination, setPagination] = useState();

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

  // select option
  const { Option } = Select;
  const handleChangeSelect = (value) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

  // checkbox

  const onChangeChecked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
            onChange={handleChangeSelect}
          >
            {/* <Option value="Received">Бүгд</Option> */}
            <Option value="Received">Хүлээн авсан</Option>
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
          // <div className="aaa">
          //   <p>Он сар өдөр</p>
          //   <p>Захиалга #</p>
          //   <p>Хэрэглэгч</p>
          //   <p>Захиалга</p>
          //   <p>Нийт дүн</p>
          //   <p>Төлбөр</p>
          //   <p>Утас</p>
          //   <p>Төлөв</p>
          // </div>

          <Row className="head-list">
            <Col span={4}>
              <div className="flx-order">
                <Checkbox onChange={onChangeChecked}></Checkbox>
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
            <Col span={3}>
              <p className="font2">Утас</p>
            </Col>
            <Col span={2}>
              <p className="font2">Төлөв</p>
            </Col>
          </Row>
        }
        footer={
          <div>
            <Pagination defaultCurrent={1} total={50} onChange={handler} />
          </div>
        }
        bordered
        dataSource={order}
        renderItem={(item) => {
          return (
            <Row>
              {/* <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.number}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col> */}

              <Col span={3}>
                {moment(item.created_date).format("YYYY/MM/DD")}
              </Col>
              <Col span={3}>{item.status}</Col>
              <Col span={3}>{item.status}</Col>
              <Col span={3}>{item.status}</Col>
              <Col span={3}>{item.status}</Col>

              <Col span={3}>{item.status}</Col>
              <Col span={3}>{item.status}</Col>
              <Col span={3}>{item.status}</Col>
            </Row>
          );
        }}
      />
    </div>
  );
}
