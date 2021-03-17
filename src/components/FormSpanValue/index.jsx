import React from 'react';
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
  colProps = {
    xl: 8,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24,
  }
}) => (
  <Col {...colProps}>
    <FormItem label={label}>
      {value}
    </FormItem>
  </Col>
)

export default FormSpanValue