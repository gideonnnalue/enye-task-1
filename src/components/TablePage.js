import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "User Id",
    dataIndex: "userid",
    key: "userid"
  },
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname"
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname"
  },
  {
    title: "Date of Birth",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Hobby",
    dataIndex: "hobby",
    key: "hobby"
  }
];

const TablePage = ({ users }) => {
  return (
    <div>
      <Table columns={columns} dataSource={users} />
    </div>
  );
};

export default TablePage;
