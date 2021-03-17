import React from 'react';
// import { Button } from 'antd';
import './index.less';

const AutoButton = ({
  title = '按钮'
}) => {
  return (
    <div className='AutoButton'>
      <span className='btn'>{title}</span>
      {/* <Button type='primary'>{title}</Button> */}
    </div>
  )
}

export default AutoButton