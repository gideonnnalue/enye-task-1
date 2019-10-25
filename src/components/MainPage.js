import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "antd";
import { Row, Col } from "antd";

import FormPage from "./FormPage";
import TablePage from "./TablePage";

const { Content } = Layout;

const MainPage = () => {
  // const [users, setUsers] = useState([]);

  const users = useSelector(state => state.users);

  // const addUser = data => {
  //   const newUsers = [...users];
  //   newUsers.push(data);
  //   setUsers(newUsers);
  // };
  return (
    <div className="main">
      <Layout className="layout">
        <h1 style={{ fontWeight: "bold", color: "#FFF" }}>USER LIST</h1>
        <Content className="content">
          <Row style={{ width: "100%", height: "100%" }}>
            <Col md={24} lg={10} xl={10} className="section table__form">
              <FormPage />
            </Col>
            <Col md={24} lg={14} xl={14} className="section table__content">
              <TablePage users={users} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default MainPage;
