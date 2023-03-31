import React from 'react'
import {Form, Input, Button, Select} from 'antd'
import { EmployeeRequest } from '../../interface/employee'

import { get } from '../utils/request'
import { GET_EMPLOYEE_URL } from '../../constants/urls'
const { Option } = Select

class QueryForm extends React.Component<{}, EmployeeRequest> {
  state = {
    name: '',
    departmentId: undefined
  }
    
  handleSubmit() {
    this.queryEmployee(this.state)
  }

  componentDidMount(): void {
    this.queryEmployee(this.state)
  }

  queryEmployee(param: EmployeeRequest) {
    get(GET_EMPLOYEE_URL, param).then(res => {
      console.log(res)
    })
  }

  handleChange(e:React.FormEvent<HTMLInputElement>) {
    this.setState({
      name: e.currentTarget.value
    })
  }
  handleDepartmentChange(value: number) {
    this.setState({
      departmentId: value
    })
  }
  render() {
    return (
      <>
        <Form layout='inline'>
          <Form.Item>
            <Input 
            placeholder='姓名' 
            style={{width: 120}} 
            allowClear 
            value={this.state.name}
            onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Select 
            placeholder='部门' 
            style={{width: 120}} 
            allowClear 
            value={this.state.departmentId}
            onChange={this.handleDepartmentChange}
            >
              <Option value={1}>技术部</Option>
              <Option value={2}>设计部</Option>
              <Option value={3}>运维部</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type='primary' onClick={this.handleSubmit} >查询</Button>
          </Form.Item>
        </Form>
      </>
    ) 
  }
}

export default QueryForm
