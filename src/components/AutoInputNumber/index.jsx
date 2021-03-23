import React from 'react';
import PropTypes from 'prop-types';
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

AutoInputNumber.defaultProps = {
  label: '',
  width: '50%',
  unit: 'price',
  formLayout: {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  },
  disabled: false,
  min: 0,
  max: 100000
}

AutoInputNumber.propTypes = {
  label: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  width: PropTypes.string,
  unit: PropTypes.string,
  rules: PropTypes.bool,
  formLayout: PropTypes.exact({
    labelCol: PropTypes.shape({
      span: PropTypes.number
    }),
    wrapperCol: PropTypes.shape({
      span: PropTypes.number
    })
  }),
  disabled: PropTypes.bool,
  noStyle: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number
}

export default AutoInputNumber