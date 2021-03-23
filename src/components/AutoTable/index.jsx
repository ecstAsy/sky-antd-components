import React, { useState } from 'react';
import PropTypes from 'prop-types';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider, Table } from 'antd';

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
    <ConfigProvider locale={zhCN}>
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
    </ConfigProvider>
  )
}

AutoTable.defaultProps = {
  pagination: false,
  bordered: false,
  showRowSelection: false,
  data: {}
}

AutoTable.propTypes = {
  title: PropTypes.string,
  rowKey: PropTypes.string,
  pagination: PropTypes.bool,
  bordered: PropTypes.bool,
  showRowSelection: PropTypes.bool,
  data: PropTypes.object,
  onSelectRow: PropTypes.func,
  onChange: PropTypes.func,
}

export default AutoTable