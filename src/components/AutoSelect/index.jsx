import React, { useState } from 'react';
import { Form, Select } from 'antd';

/**
|--------------------------------------------------
| @AutoSelect
| #Component
| 自定义下拉选择框
|--------------------------------------------------
*/
const FormItem = Form.Item;
const { Option } = Select;

const AutoSelect = ({
  label, name, dataArray, width = '100%', keyName = 'code', valueName = 'name', VIndex = '', disabled = false,
  rules, formLayoutDefault, mode, noStyle
}) => {

  const [value, setValue] = useState(undefined);

  let isMode = {};
  if (mode) {
    isMode = {
      mode
    }
  }

  return (
    <FormItem
      {...formLayoutDefault}
      label={label}
      name={name}
      noStyle={noStyle}
      rules={[
        { required: rules, message: `请选择${label}！` }
      ]}
    >
      <Select
        showSearch
        value={value}
        onChange={e => setValue(e)}
        placeholder='请选择'
        style={{ width: `${width}` }}
        disabled={disabled}
        allowClear
        {...isMode}
        filterOption={(input, option) => option.children.indexOf(input) >= 0}
      >
        {
          dataArray && dataArray.map(item =>
            <Option key={item[keyName]} value={item[keyName]} disabled={item.disabled}>{VIndex ? `${item[VIndex]}-${item[valueName]}` : item[valueName]}</Option>
          )
        }
      </Select>
    </FormItem>
  )
}

export default AutoSelect