import React, { useState } from 'react';
import { Table } from 'antd';

/**
|--------------------------------------------------
| @AutoTable
| #Component
| antd Table 二次封装
|--------------------------------------------------
*/

const AutoTable = ({
  title,
  rowKey,
  pagination = false,
  bordered = false,
  showRowSelection = false,
  onSelectRow,
  data = {},
  onChange,
  ...rest
}) => {
  const { pageInfo, list } = data;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);


  const handleRowSelectChange = (selectedRowKey, selectedRows) => {
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }
    setSelectedRowKeys(selectedRowKey);
  };

  const Pagination = {
    showTotal: () => `总共 ${pageInfo.total} 条`,
    showQuickJumper: true,
    showSizeChanger: true,
    ...pageInfo,
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: handleRowSelectChange,
  };
  const isRowSelection = showRowSelection ? { rowSelection } : ''

  return (
    <Table
      title={title}
      rowKey={rowKey || 'id'}
      {...isRowSelection}
      pagination={!pagination ? pagination : Pagination}
      dataSource={list}
      bordered={bordered}
      onChange={onChange}
      {...rest}
    />
  )
}

export default AutoTable