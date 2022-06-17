import React, { useEffect, useState } from "react";
import { otherServices } from "../../services/otherServices";
import { useOrder } from "../../contexts/OrderContext";
import { List, Row, Col, Divider, Pagination } from "antd";
import { useUser } from "../../contexts/UserContext";
import "../../style/menuStyle/orders.css";
import moment from "moment";

export default function Orders() {
  const [user, setUser] = useUser();
  const [order, setOrder] = useOrder();
  const [pagination, setPagination] = useState();
  console.log(order);
  useEffect(() => {
    otherServices
      .getAllOrders({ token: user?.token }, pagination)
      .then((e) => e.json())
      .then((e) => setOrder(e.data.docs));
  }, [pagination]);

  function handler(e) {
    setPagination(e);
  }

  return (
    <div>
      <Divider orientation="left">Захиалгууд</Divider>
      <List
        header={
          <div className="aaa">
            <p>Он сар өдөр</p>
            <p>Захиалга #</p>
            <p>Хэрэглэгч</p>
            <p>Захиалга</p>
            <p>Нийт дүн</p>
            <p>Төлбөр</p>
            <p>Утас</p>
            <p>Төлөв</p>
          </div>
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
            <>
              <List.Item className="listItems">
                <Row className="rowss">
                  {/* <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.number}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col>
                  <Col span={4}>{item.customer}</Col> */}

                  <>
                    <Col>{moment(item.created_date).format("YYYY/MM/DD")}</Col>
                    <Col>{item.status}</Col>
                  </>
                </Row>
              </List.Item>
            </>
          );
        }}
      />
    </div>
  );
}
