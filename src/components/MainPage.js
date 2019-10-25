import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import { Row, Col } from "antd";

import FormPage from "./FormPage";
import TablePage from "./TablePage";

import { LOAD_USERS } from "../actions/types";

const { Content } = Layout;

const MainPage = props => {
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_USERS });
  }, []);

  return (
    <div className="main">
      <Layout className="layout">
        <h1 style={{ fontWeight: "bold", color: "#FFF" }}>USER LIST</h1>
        <Content className="content">
          <Row style={{ width: "100%", height: "100%" }}>
            <Col md={24} lg={10} xl={10} className="section table__form">
              <FormPage isSaving={state.isSaving} userSaved={state.userSaved} />
            </Col>
            <Col md={24} lg={14} xl={14} className="section table__content">
              {state.loadingUsers ? (
                <p
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    color: "blue"
                  }}
                >
                  Loading Users...
                </p>
              ) : null}
              <TablePage users={state.users} />
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default MainPage;
