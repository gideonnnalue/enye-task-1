import React, { Component } from "react";
import { Form, Icon, Input, Button, Alert, DatePicker } from "antd";
import moment from "moment";

class FormPage extends Component {
  state = {
    firstname: "",
    lastname: "",
    date: "1999-01-01",
    age: "",
    hobby: "",
    type: "error",
    showMsg: false
  };
  handleSubmit = e => {
    e.preventDefault();
    const user = { ...this.state };
    user.key = Date.now();
    delete user.type;
    delete user.showMsg;
    console.log(user);

    let err = false;
    Object.keys(user).forEach((key, i) => {
      if (this.state[key] === "") {
        err = true;
      }
    });
    if (!err) {
      this.setState({ type: "success", showMsg: true });
      this.clearAlert();
      this.props.addUser(user);
      Object.keys(this.state).forEach((key, i) => {
        if (key !== "date") {
          this.setState({ [key]: "" });
        }
      });
    } else {
      this.setState({ type: "error", showMsg: true });
      this.clearAlert();
    }
  };

  clearAlert() {
    setTimeout(() => {
      this.setState({ showMsg: false });
    }, 1500);
  }

  componentDidMount() {
    // console.log(moment().format('YYYY-MM-DD'))
    this.setState({ date: moment().format("YYYY-MM-DD") });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onDateChanged(date, dateString) {
    this.setState({ date: dateString });
  }
  render() {
    return (
      <div className="form-section">
        {this.state.showMsg ? (
          <Alert
            message={
              this.state.type === "success"
                ? "User added successfully"
                : "Please fill in all fields..."
            }
            type={this.state.type}
            style={{ marginBottom: "15px" }}
          />
        ) : null}
        <h2>Fill in the data</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item label="First Name">
            <Input
              placeholder="First Name"
              value={this.state.firstname}
              onChange={e => this.onChange(e)}
              name="firstname"
              className="login-input"
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={e => this.onChange(e)}
              name="lastname"
              className="login-input"
            />
          </Form.Item>
          <Form.Item label="Date of Birth">
            <DatePicker
              defaultValue={moment("1999-01-01", "YYYY-MM-DD")}
              placeholder="Select date"
              value={moment(this.state.date)}
              onChange={this.onDateChanged.bind(this)}
              name="date"
              className="login-input"
            />
          </Form.Item>
          <Form.Item label="Age">
            <Input
              placeholder="Age"
              value={this.state.age}
              onChange={e => this.onChange(e)}
              name="age"
              type="number"
              className="login-input"
            />
          </Form.Item>
          <Form.Item label="Hobby">
            <Input
              placeholder="Hobby"
              value={this.state.hobby}
              onChange={e => this.onChange(e)}
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
            onClick={this.handleSubmit}
          >
            save
            <Icon type="right" />
          </Button>
        </div>
      </div>
    );
  }
}

export default FormPage;
