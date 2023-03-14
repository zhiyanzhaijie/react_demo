import React from 'react'
import { Button, Checkbox } from 'antd'

import './index.css'

class Setting extends React.Component {
  render() {
    return (
      <>
        <Checkbox>新员工入职提醒</Checkbox>
        <div className="button_box">
          <Button type="primary">保存</Button>
        </div>
      </>
    )
  }
}

export default Setting
