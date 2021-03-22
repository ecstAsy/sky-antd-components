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
  colProps
}) => (
  <Col {...colProps}>
    <FormItem label={label}>
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
  }
}

FormSpanValue.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  colProps: PropTypes.object
}

export default FormSpanValue