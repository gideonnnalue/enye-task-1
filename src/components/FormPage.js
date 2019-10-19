import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, DatePicker } from "antd";
import moment from "moment";

class FormPage extends Component {
  state = {
    firstname: "",
    lastname: "",
    date: "",
    age: "",
    hobby: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log('submitting')
    this.props.addUser(this.state)
    // Object.keys(this.state).forEach((cur, i) => {
    //   if(cur === 'date') {
    //   } else {
    //     this.setState({cur: ""})

    //   }
    // })
  };

  componentDidMount() {
    // console.log(moment().format('YYYY-MM-DD'))
    this.setState({ date: moment().format('YYYY-MM-DD')})
  }

  onChange(e) {
    this.setState({ [e.target.name]: [e.target.value[0]] });
  }

  onDateChanged(date, dateString) {
    this.setState({ date: dateString });
  }
  render() {
    return (
      <div className="form-section">
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
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
        <Button type="primary" shape="round"  size={'large'} className="submit-button" htmlType="submit" onClick={this.handleSubmit}>
          save
          <Icon type="right" />
        </Button>
        </div>
      </div>
    );
  }
}

export default FormPage;
