import React, { useContext, useEffect, useRef, useState } from 'react';
import { Table, Form, Input } from 'antd';
import { dataSource as initialData } from './TableAsset';
import TabComponent from './Components/TabComponent';
import Heading from './Components/Heading';
import ButtonComponent from './Components/ButtonComponent';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form?.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form?.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[{ required: true, message: `${title} is required.` }]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingInlineEnd: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const FinancialTable = () => {
  const [dataSource, setDataSource] = useState(initialData);
  const [count, setCount] = useState(initialData.length);

  const handleAdd = (index) => {
    console.log(index,"ind:::::", count,"count:::::")
    const newData = {
      key: count.toString(),
      million: 'New Row',
      '13/12/2021': '',
      '13/12/2022': '',
      '13/12/2024': '',
      variance: '',
      editable: true,
      'variance%': '',
    };
    const newDataSource = [...dataSource];
    newDataSource.splice(index + 1, 0, newData);
    setDataSource(newDataSource);
    setCount(count + 1);
  };

  const defaultColumns = [
    {
      title: "(million)",
      dataIndex: "million",
      key: "million",
      width: "8%",
      render: (text, record, index) => {
        console.log(record,"rec:::::")
        if (text === 'Others') {
          return (
            <div style={{ fontWeight: '700', cursor: 'pointer' }} onClick={() => handleAdd(index)}>
              Others+
            </div>
          );
        }
        return text;
      },
    },
    {
      title: "13/12/2021",
      dataIndex: "13/12/2021",
      key: "13/12/2021",
      width: "4%",
      editable: true,
    },
    {
      title: "13/12/2022",
      dataIndex: "13/12/2022",
      key: "13/12/2022",
      width: "4%",
      editable: true,
    },
    {
      title: "13/12/2024",
      dataIndex: "13/12/2024",
      key: "13/12/2024",
      width: "4%",
      editable: true,
    },
    {
      title: "variance",
      dataIndex: "variance",
      key: "variance",
      width: "4%",
    },
    {
      title: "variance%",
      dataIndex: "variance%",
      key: "variance%",
      width: "4%",
    },
  ];

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  return (
    <div style={{ border: '1px solid grey', padding: '8px' }}>
      <Heading text="Financial statement" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TabComponent />
        <ButtonComponent />
      </div>
      <Table
        components={components}
        size="small"
        bordered
        expandable={{}}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </div>
  );
};

export default FinancialTable;
