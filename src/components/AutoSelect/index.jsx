import React from 'react';
import { Button } from 'antd';

const AutoSelect = ({
  title = '选择'
}) => {
  return <Button type='primary'>{title}</Button>
}

export default AutoSelect