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
        {console.log("users", this.state)}
        <Layout className="layout">
          <Content className="content">
            <Row style={{ width: "100%", height: "100%" }}>
              <Col lg={10} className="section table__form">
                <FormPage addUser={data => this.addUser(data)} />
              </Col>
              <Col lg={14} className="section table__content">
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
