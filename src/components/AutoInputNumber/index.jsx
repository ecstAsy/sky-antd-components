import React from 'react';
import { Form, InputNumber } from 'antd';
import './index.less';

/**
|--------------------------------------------------
| @AutoInputNumber
| #Component
| 自定义数字输入框
|--------------------------------------------------
*/
const FormItem = Form.Item;

const AutoInputNumber = ({
  label = '',
  name,
  width = '50%',
  unit = 'price',
  rules,
  formLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  },
  disabled = false,
  noStyle,
  min = 0,
  max = 100000
}) => {

  return (
    <FormItem
      {...formLayout}
      label={label}
      name={name}
      noStyle={noStyle}
      rules={[
        { required: rules, message: `请输入${label}！` }
      ]}
    >
      <InputNumber
        style={{ width }}
        disabled={disabled}
        min={min}
        max={max}
        className={`${unit}`}
      />
    </FormItem>
  )
}

export default AutoInputNumber