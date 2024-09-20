import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    million: "Accounting Standard",
    "13/12/2021": "IFRC",
    "13/12/2022": "IFRC",
    "13/12/2024": "IFRC",
    variance: "",
    "variance%": "",
  },
  {
    million: "Audit method",
    "13/12/2021": "IFRS16ADJ",
    "13/12/2022": "IFRS16ADJ",
    "13/12/2024": "IFRS16ADJ",
    variance: "",
    "variance%": "",
  },
  {
    million: "Display Name",
    "13/12/2021": "HKD",
    "13/12/2022": "HKD",
    "13/12/2024": "HKD",
    variance: "",
    "variance%": "",
  },
  {
    million: "FX Rate",
    "13/12/2021": "0.1286",
    "13/12/2022": "0.1286",
    "13/12/2024": "0.1286",
    variance: "",
    "variance%": "",
  },
  {
    million: "Revenue",
    "13/12/2021": "",
    "13/12/2022": "",
    "13/12/2024": "",
    variance: "",
    "variance%": "",
  },
  {
    million: "Passenger",
    "13/12/2021": "4357.00",
    "13/12/2022": "1433.00",
    "13/12/2024": "15213.00",
    variance: "880.0",
    "variance%": "+6.1%",
  },
  {
    million: "Cargo",
    "13/12/2021": "35814.00",
    "13/12/2022": "30554.00",
    "13/12/2024": "29312.00",
    variance: "-1242.00",
    "variance%": "-4.1",
  },
  {
    million: "Others",
    "13/12/2021": "",
    "13/12/2022": "",
    "13/12/2024": "",
    variance: "",
    "variance%": "",
    children: [
      {
        million: "Creating recovering and",
        "13/12/2021": "5416.00",
        "13/12/2022": "51036.00",
        "13/12/2024": "49761.00",
        variance: "-1275.00",
        "variance%": "-2.5%",
      },
    ],
  },
  {
    million: "Operating expense",
  },
  {
    million: "Fuel",
    "13/12/2021": "4357.00",
    "13/12/2022": "14333.00",
    "13/12/2024": "",
    variance: "",
    "variance%": "",
  },
  {
    million: "Labur",
    "13/12/2021": "35814.00",
    "13/12/2022": "30554.00",
    "13/12/2024": "",
    variance: "",
    "variance%": "",
  },
  {
    million: "Landing fee and route chnage",
    "13/12/2021": "35814.00",
    "13/12/2022": "30554.00",
    "13/12/2024": "",
    variance: "",
    "variance%": "",
  },
  {
    million: "Maintence, meterials and...",
    "13/12/2021": "35814.00",
    "13/12/2022": "30554.00",
    "13/12/2024": "",
    variance: "",
    "variance%": "",
  },
  {
    million: "Others",
    "13/12/2021": "",
    "13/12/2022": "",
    "13/12/2024": "",
    variance: "",
    "variance%": "",
    children: [
      {
        million: "InFlight and passenger...",
        "13/12/2021": "5416.00",
        "13/12/2022": "6149.00",
        "13/12/2024": "49761.00",
        variance: "-1275.00",
        "variance%": "-2.5%",
      },
      {
        million: "Restructuring cost",
        "13/12/2021": "385.00",
        "13/12/2022": "",
        "13/12/2024": "",
        variance: "",
        "variance%": "",
      },
    ],
  },


];

const columns = [
  {
    title: "million",
    dataIndex: "million",
    key: "million",
  },
  {
    title: "13/12/2021",
    dataIndex: "13/12/2021",
    key: "13/12/2021",
  },
  {
    title: "13/12/2022",
    dataIndex: "13/12/2022",
    key: "13/12/2022",
  },
  {
    title: "13/12/2024",
    dataIndex: "13/12/2024",
    key: "13/12/2024",
  },
  {
    title: "variance",
    dataIndex: "variance",
    key: "variance",
  },
  {
    title: "variance%",
    dataIndex: "variance%",
    key: "variance%",
    render: (text) => <div style={{ color: "red" }}>{text}</div>,
  },
];

const FinancialTable = () => {
  return (
    <>
      <Table
        bordered={true}
        expandable={{}}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default FinancialTable;
