import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

/**
|--------------------------------------------------
| @FormSpanValue
| #Component
| 表单展示值
|--------------------------------------------------
*/

const FormItem = Form.Item;

const FormSpanValue = ({
  label,
  value,
  formLayout
}) => (
  <FormItem {...formLayout} label={label}>
    {value}
  </FormItem>
)

FormSpanValue.defaultProps = {
  formLayout: {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  },
}

FormSpanValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  formLayout: PropTypes.exact({
    labelCol: PropTypes.shape({
      span: PropTypes.number
    }),
    wrapperCol: PropTypes.shape({
      span: PropTypes.number
    })
  }),
}

export default FormSpanValue