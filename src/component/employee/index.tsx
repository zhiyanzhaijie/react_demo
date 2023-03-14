import React from 'react'
import { Table } from 'antd'
import QueryForm from './QueryForm'

import './index.css'

const employeeColumns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "部门",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "入职时间",
    dataIndex: "hiredate",
    key: "hiredate",
  },
  {
    title: "职级",
    dataIndex: "level",
    key: "level",
  },
];


class Employee extends React.Component {
  render() {
    return (
      <>
        <QueryForm></QueryForm>
        <Table columns={employeeColumns} className='table'></Table>
      </>
    )
  }
}
export default Employee
