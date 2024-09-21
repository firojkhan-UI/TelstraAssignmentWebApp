import React from 'react';
import { Table } from 'antd';
import { columns, dataSource } from './TableAsset';
import TabComponent from './Components/TabComponent';
import Heading from './Components/Heading';
import ButtonComponent from './Components/ButtonComponent';

const FinancialTable = () => {
  return (
    <>
      <div style={{border: '1px solid grey', padding: '8px'}}>
        <Heading text = "Financical statement" />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <TabComponent />
        <ButtonComponent />
        </div>
        <Table
          size="small"
          bordered={true}
          expandable={{}}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    </>
  );
};

export default FinancialTable;