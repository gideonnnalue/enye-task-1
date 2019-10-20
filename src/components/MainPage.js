import React, { Component } from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";

import FormPage from "./FormPage";
import TablePage from "./TablePage";

const { Content } = Layout;

class MainPage extends Component {
  state = {
    users: []
  };

  addUser(data) {
    const users = [...this.state.users];
    users.push(data);
    this.setState({ users: users });
    // console.log("users", this.state)
  }
  render() {
    return (
      <div className="main">
        <Layout className="layout">
          <h1 style={{ fontWeight: "bold", color: "#FFF" }}>USER LIST</h1>
          <Content className="content">
            <Row style={{ width: "100%", height: "100%" }}>
              {/* <Col className="section table__form">
                <FormPage addUser={data => this.addUser(data)} />
              </Col>
              <Col className="section table__content">
                <TablePage users={this.state.users} />
              </Col> */}
              <Col md={24} lg={10} xl={10} className="section table__form">
                <FormPage addUser={data => this.addUser(data)} />
              </Col>
              <Col md={24} lg={14} xl={14} className="section table__content">
                <TablePage users={this.state.users} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default MainPage;
