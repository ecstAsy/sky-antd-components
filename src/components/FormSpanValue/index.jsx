import React from 'react';
import PropTypes from 'prop-types';
import { Col, Form } from 'antd';

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
  formLayout,
  colProps
}) => (
  <Col {...colProps}>
    <FormItem {...formLayout} label={label}>
      {value}
    </FormItem>
  </Col>
)

FormSpanValue.defaultProps = {
  colProps: {
    xl: 8,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24,
  },
  formLayout: {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  },
}

FormSpanValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  colProps: PropTypes.object,
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