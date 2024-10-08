import React, { useContext, useEffect, useRef, useState } from 'react';
import { Table } from 'antd';
// import { columns as defaultColumns, dataSource as data } from './TableAsset';
import TabComponent from './Components/TabComponent';
import Heading from './Components/Heading';
import ButtonComponent from './Components/ButtonComponent';
import { Form, Input } from 'antd';

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
      console.log(record, "record")
      console.log(values, "values")
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
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingInlineEnd: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};


const FinancialTable = () => {
  const handleText = text => {
    if (text === 'Operating expense') return <div style={{ fontWeight: '700' }}>{text}</div>
    else if (text === 'Revenue') return <div style={{ fontWeight: '700' }}>{text}</div>
    else if (text === 'sum') return <div style={{ fontWeight: '700', display: text === 'sum' ? 'none' : null }}>{text}</div>
    return <div>{text}</div>
  }

  const handleSecondColumn = text => {
    return <div>{text}</div>
  }

  const defaultColumns = [
    {
      title: "(million)",
      dataIndex: "million",
      key: "million",
      width: "8%",
      render: (text) => handleText(text),
      onCell: () => ({
        style: {
          backgroundColor: '#D3D3D3',
        },
      }),
    },
    {
      title: "13/12/2021",
      dataIndex: "13/12/2021",
      key: "13/12/2021",
      width: "4%",
      editable: true,
      render: (text) => handleSecondColumn(text),
      onCell: () => ({
        style: {
          backgroundColor: '#D3D3D3',
        },
      }),
    },
    {
      title: "13/12/2022",
      dataIndex: "13/12/2022",
      width: "4%",
      editable: true,
      render: (text) => <div style={{ fontSize: '12px', textAlign: 'center' }}>{text}</div>,
      onCell: () => ({
        style: {
          backgroundColor: '#D3D3D3',
        },
      }),

    },
    {
      title: "13/12/2024",
      dataIndex: "13/12/2024",
      key: "13/12/2024",
      width: "8%",
      editable: true,
      render: (text) => <div style={{ fontSize: '12px', textAlign: 'center' }}>{text}</div>,
      onCell: () => ({
        style: {
          backgroundColor: '#D3D3D3',
        },
      }),
    },
    {
      title: "variance",
      dataIndex: "variance",
      key: "variance",
      width: "4%",
      render: (text) => <div style={{ color: text > 0 ? "green" : 'red', fontSize: '12px', fontWeight: '600', textAlign: 'center' }}>{text}</div>,
      onCell: () => ({
        style: {
          backgroundColor: '#D3D3D3',
        },
      }),
    },
    {
      title: "variance%",
      dataIndex: "variance%",
      key: "variance%",
      width: "8%",
      render: (text) => <div style={{ color: text < 0 ? "red" : "green", fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>{text}</div>
    },
  ];

  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      million: "Accounting Standard",
      "13/12/2021": "IFRC",
      "13/12/2022": "IFRC",
      "13/12/2024": "IFRC",
      variance: "",
      "variance%": "",
    },
    {
      key: '1',
      million: "Audit method",
      "13/12/2021": "IFRS16ADJ",
      "13/12/2022": "IFRS16ADJ",
      "13/12/2024": "IFRS16ADJ",
      variance: "",
      "variance%": "",
    },
    {
      key: '2',
      million: "Display Name",
      "13/12/2021": "HKD",
      "13/12/2022": "HKD",
      "13/12/2024": "HKD",
      variance: "",
      "variance%": "",
    },
    {
      key: '3',
      million: "FX Rate",
      "13/12/2021": "0.1286",
      "13/12/2022": "0.1286",
      "13/12/2024": "0.1286",
      variance: "",
      "variance%": "",
    },
    {
      key: '4',
      million: "Revenue",
      "13/12/2021": "",
      "13/12/2022": "",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
    },
    {
      key: '5',
      million: "Passenger",
      "13/12/2021": "4357.00",
      "13/12/2022": "14333.00",
      "13/12/2024": "15213.00",
      variance: "880.0",
      "variance%": "6.1%",
    },
    {
      key: '6',
      million: "Cargo",
      "13/12/2021": "35814.00",
      "13/12/2022": "30554.00",
      "13/12/2024": "29312.00",
      variance: "-1242.00",
      "variance%": "-4.1",
    },
    {
      key: '7',
      million: "Others",
      "13/12/2021": "",
      "13/12/2022": "",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
      children: [
        {
          key: '8',
          million: "Creating recovering and",
          "13/12/2021": "1212",
          "13/12/2022": "11",
          "13/12/2024": "100",
          variance: "",
          "variance%": "",
        }
      ],
    },
    {
      key: '9',
      million: "sum",
      "13/12/2021": "",
      "13/12/2022": "",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
    },
    {
      key: '10',
      million: "Operating expense",
    },
    {
      key: '11',
      million: "Fuel",
      "13/12/2021": "4357.00",
      "13/12/2022": "14333.00",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
    },
    {
      key: '12',
      million: "Labur",
      "13/12/2021": "35814.00",
      "13/12/2022": "30554.00",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
    },
    {
      key: '13',
      million: "Landing fee and route chnage",
      "13/12/2021": "35814.00",
      "13/12/2022": "30554.00",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
    },
    {
      key: '14',
      million: "Maintence, meterials and...",
      "13/12/2021": "35814.00",
      "13/12/2022": "30554.00",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
    },
    {
      key: '15',
      million: "Others",
      "13/12/2021": "",
      "13/12/2022": "",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
      children: [
        {
          key: "16",
          million: "InFlight and passenger...",
          "13/12/2021": "5416.00",
          "13/12/2022": "6149.00",
          "13/12/2024": "49761.00",
          variance: "-1275.00",
          "variance%": "-2.5%",
        },
        {
          key: "17",
          million: "Restructuring cost",
          "13/12/2021": "385.00",
          "13/12/2022": "0.00",
          "13/12/2024": "0.00",
          variance: "",
          "variance%": "",
        },
      ],
    },
    {
      key: '18',
      million: "",
      "13/12/2021": "",
      "13/12/2022": "",
      "13/12/2024": "",
      variance: "",
      "variance%": "",
    },
  ])
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        editable: col.editable && (record.million !== 'sum' || record.children) && (record.million !== '' || record.children),
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  // const calculateFirstSum = () => {
  //   const years = ["13/12/2021", "13/12/2022", "13/12/2024"];
  //   const newDataSource = [...dataSource];

  //   const calculateYearSum = (startIndex, endIndex, year) => {
  //     let sum = 0;
  //     for (let i = startIndex; i <= endIndex; i++) {
  //       const value = parseFloat(newDataSource[i][year]);
  //       if (!isNaN(value)) {
  //         sum += value;
  //       }
  //     }
  //     const childValue = Number(newDataSource[7]["children"][0][year]);
  //     return sum + childValue;
  //   };

  //   const startIndex = newDataSource.findIndex(item => item.million === "FX Rate");
  //   const endIndex = newDataSource.findIndex(item => item.million === "Cargo");

  //   if (startIndex !== -1 && endIndex !== -1) {
  //     let isDataChanged = false;

  //     years.forEach(year => {
  //       const sum = calculateYearSum(startIndex, endIndex, year);
  //       const sumRowIndex = newDataSource.findIndex(item => item.million === "sum");

  //       if (sumRowIndex !== -1 && newDataSource[sumRowIndex][year] !== sum.toFixed(2)) {
  //         newDataSource[sumRowIndex][year] = sum.toFixed(2);
  //         isDataChanged = true;
  //       }
  //     });

  //     // Calculate variance for the "sum" row
  //     const sumRowIndex = newDataSource.findIndex(item => item.million === "sum");
  //     if (sumRowIndex !== -1) {
  //       const sum2022 = parseFloat(newDataSource[sumRowIndex]["13/12/2022"]);
  //       const sum2024 = parseFloat(newDataSource[sumRowIndex]["13/12/2024"]);

  //       if (!isNaN(sum2022) && !isNaN(sum2024)) {
  //         const variance = (sum2024 - sum2022).toFixed(2);
  //         const variancePercentage = ((variance / sum2022) * 100).toFixed(2);

  //         newDataSource[sumRowIndex].variance = variance;
  //         newDataSource[sumRowIndex]["variance%"] = `${variancePercentage}%`;
  //         isDataChanged = true;
  //       }
  //     }

  //     if (isDataChanged) {
  //       setDataSource(newDataSource);
  //     }
  //   }
  // };

  const calculateFirstSum = () => {
    const years = ["13/12/2021", "13/12/2022", "13/12/2024"];
    const newDataSource = [...dataSource];

    const calculateYearSum = (startIndex, endIndex, year) => {
      let sum = 0;
      for (let i = startIndex; i <= endIndex; i++) {
        const value = parseFloat(newDataSource[i][year]);
        if (!isNaN(value)) {
          sum += value;
        }
      }

      const childValue = Number(newDataSource[7]["children"][0][year]);
      return sum + childValue;
    };

    const startIndex = newDataSource.findIndex(item => item.million === "FX Rate");
    const endIndex = newDataSource.findIndex(item => item.million === "Cargo");

    if (startIndex !== -1 && endIndex !== -1) {
      let isDataChanged = false;

      years.forEach(year => {
        const sum = calculateYearSum(startIndex, endIndex, year);
        const sumRowIndex = newDataSource.findIndex(item => item.million === "sum");

        if (sumRowIndex !== -1 && newDataSource[sumRowIndex][year] !== sum.toFixed(2)) {
          newDataSource[sumRowIndex][year] = sum.toFixed(2);
          isDataChanged = true;
        }
      });

      if (isDataChanged) {
        setDataSource(newDataSource);
      }
    }
  };

  const calculateSecondSum = () => {
    const startLabel = "Fuel";
    const endLabel = "Maintence, meterials and...";
    const years = ["13/12/2021", "13/12/2022", "13/12/2024"];
    const newDataSource = [...dataSource];

    let newChild = newDataSource[14]?.children.reduce((acc, curr) => {
      for (let i = 0; i < years.length - 1; i++) {
        return acc + Number(curr[years[i]])
      }
    }, 0)

    console.log(newChild, "NNNNN")

    const firojRowIndex = newDataSource.findIndex(item => item.million === "");
    const startIndex = newDataSource.findIndex(item => item.million === startLabel);
    const endIndex = newDataSource.findIndex(item => item.million === endLabel);

    if (firojRowIndex !== -1 && startIndex !== -1 && endIndex !== -1) {
      let isDataChanged = false;

      years.forEach(year => {
        let sum = 0;

        for (let i = startIndex; i <= endIndex; i++) {
          const value = parseFloat(newDataSource[i][year]);
          if (!isNaN(value)) {
            sum += value;
          }
        }

        if (newDataSource[firojRowIndex][year] !== sum.toFixed(2)) {
          newDataSource[firojRowIndex][year] = sum.toFixed(2);
          isDataChanged = true;
        }
      });

      if (isDataChanged) {
        setDataSource(newDataSource);
      }
    }
  };

  useEffect(() => {
    calculateFirstSum();
    calculateSecondSum();
  }, [dataSource]);



  const handleSave = (row) => {
    console.log(row, "row:::")
    const newData = [...dataSource];
    // let index; 
    // newData.forEach((item,parentIndex) => {
    //   debugger;
    //   if(item?.children && item?.children?.length > 0) {
    //    for(let i = 0; i < item?.children?.length; i++) {
    //     if(item?.children[i].key === item?.key) {
    //       index = parentIndex;
    //       break
    //     }
    //    }


    //   }
    //   if(row.key === item.key) {
    //     index = parentIndex
    //   }
    // });

    let index;
    let childrenIndex;
    newData.forEach((item, parentIndex) => {
      if (row.key === item.key) {
        index = parentIndex
      }
      if (item?.children && item?.children?.length > 0) {
        for (let i = 0; i < item?.children?.length; i++) {
          if (item?.children[i].key === row?.key) {
            childrenIndex = i;
            index = parentIndex
          }
        }
      }

    });
    console.log(index)
    console.log(childrenIndex)
    if (childrenIndex == undefined || childrenIndex == null) {
      newData[index] = row
    }
    else {
      newData[index]['children'][childrenIndex] = row
    }
    // console.log(newData,"newData:::")

    console.log(index, "index", newData, "editable row")

    // const item = newData[index];
    // newData.splice(index, 1, {
    //   ...item,
    //   ...row,
    // });
    setDataSource([...newData]);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  function getRow(record, index) {
    if (record.million === "sum") {
      return "isFirst";
    }
    if (record.million === "") {
      return "isFirst"
    }
  }

  return (
    <>
      <div style={{ border: '1px solid grey', padding: '8px' }}>
        <Heading text="Financical statement" />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TabComponent />
          <ButtonComponent />
        </div>
        <Table
          rowClassName={getRow}
          components={components}
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
