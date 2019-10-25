import React, { useState } from "react";
import uuidv5 from "uuid/v5";
import { useDispatch } from "react-redux";
import { Form, Icon, Input, Button, Alert, DatePicker } from "antd";
import moment from "moment";
import { ADD_USER } from "../actions/types";

const FormPage = props => {
  const [type, setType] = useState("error");
  const [showMsg, setShowMsg] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    date: moment().format("YYYY-MM-DD"),
    age: "",
    hobby: ""
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const user = { ...formData };
    const APP_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    user.userid = uuidv5(Date.now().toString(), APP_NAMESPACE);
    user.key = user.userid;

    let err = false;
    Object.keys(user).forEach((key, i) => {
      if (user[key] === "") {
        err = true;
      }
    });
    if (!err) {
      dispatch({ type: ADD_USER, payload: user });

      setFormData({
        firstname: "",
        lastname: "",
        date: moment().format("YYYY-MM-DD"),
        age: "",
        hobby: ""
      });
    } else {
      // setType("error");
      setShowMsg(true);
      clearAlert();
    }
  };

  const clearAlert = () => {
    setTimeout(() => {
      setShowMsg(false);
    }, 1500);
  };

  const onChange = e => {
    const current = { ...formData };
    current[e.target.name] = e.target.value;
    setFormData(current);
  };

  const onDateChanged = (date, dateString) => {
    const current = { ...formData };
    current["date"] = dateString;
    setFormData(current);
  };

  return (
    <div className="form-section">
      {props.isSaving ? (
        <Alert
          message="saving user..."
          type="info"
          style={{ marginBottom: "15px" }}
        />
      ) : null}
      {props.userSaved ? (
        <Alert
          message="User saved successfully"
          type="success"
          style={{ marginBottom: "15px" }}
        />
      ) : null}
      {showMsg ? (
        <Alert
          message="Please fill in all fields"
          type="error"
          style={{ marginBottom: "15px" }}
        />
      ) : null}
      <h2>Fill in the data</h2>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item label="First Name">
          <Input
            placeholder="First Name"
            value={formData.firstname}
            onChange={e => onChange(e)}
            name="firstname"
            className="login-input"
          />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input
            placeholder="Last Name"
            value={formData.lastname}
            onChange={e => onChange(e)}
            name="lastname"
            className="login-input"
          />
        </Form.Item>
        <Form.Item label="Date of Birth">
          <DatePicker
            defaultValue={moment("1999-01-01", "YYYY-MM-DD")}
            placeholder="Select date"
            value={moment(formData.date)}
            onChange={onDateChanged.bind(this)}
            name="date"
            className="login-input"
          />
        </Form.Item>
        <Form.Item label="Age">
          <Input
            placeholder="Age"
            value={formData.age}
            onChange={e => onChange(e)}
            name="age"
            type="number"
            className="login-input"
          />
        </Form.Item>
        <Form.Item label="Hobby">
          <Input
            placeholder="Hobby"
            value={formData.hobby}
            onChange={e => onChange(e)}
            name="hobby"
            className="login-input"
          />
        </Form.Item>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >
        <Button
          type="primary"
          shape="round"
          size={"large"}
          className="submit-button"
          htmlType="submit"
          onClick={handleSubmit}
          disabled={props.isSaving}
        >
          save
          <Icon type="right" />
        </Button>
      </div>
    </div>
  );
};

export default FormPage;
