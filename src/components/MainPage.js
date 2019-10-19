import React, { Component } from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";

import FormPage from "./FormPage";

const { Content } = Layout;

class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <Layout className="layout">
          <Content className="content">
            <Row style={{ width: "100%", height: "100%" }}>
              <Col span={10} className="section">
                <FormPage />
              </Col>
              <Col span={14} className="section table__content">
                col-4
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default MainPage;
