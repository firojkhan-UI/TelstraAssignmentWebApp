export const  dataSource = [
    {
        key:'0',
        million: "Accounting Standard",
        "13/12/2021": "IFRC",
        "13/12/2022": "IFRC",
        "13/12/2024": "IFRC",
        variance: "",
        "variance%": "",
    },
    {
        key:'1',
        million: "Audit method",
        "13/12/2021": "IFRS16ADJ",
        "13/12/2022": "IFRS16ADJ",
        "13/12/2024": "IFRS16ADJ",
        variance: "",
        "variance%": "",
    },
    {  key:'2',
        million: "Display Name",
        "13/12/2021": "HKD",
        "13/12/2022": "HKD",
        "13/12/2024": "HKD",
        variance: "",
        "variance%": "",
    },
    {
        key:'3',
        million: "FX Rate",
        "13/12/2021": "0.1286",
        "13/12/2022": "0.1286",
        "13/12/2024": "0.1286",
        variance: "",
        "variance%": "",
    },
    {
        key:'4',
        million: "Revenue",
        "13/12/2021": "",
        "13/12/2022": "",
        "13/12/2024": "",
        variance: "",
        "variance%": "",
    },
    {
        key:'5',
        million: "Passenger",
        "13/12/2021": "4357.00",
        "13/12/2022": "14333.00",
        "13/12/2024": "15213.00",
        variance: "880.0",
        "variance%": "+6.1%",
    },
    {
        key:'6',
        million: "Cargo",
        "13/12/2021": "35814.00",
        "13/12/2022": "30554.00",
        "13/12/2024": "29312.00",
        variance: "-1242.00",
        "variance%": "-4.1",
    },
    {
        key:'7',
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
                "13/12/2022": "6149.00",
                "13/12/2024": "5236.00",
                variance: "-913.00",
                "variance%": "-14.8%",
            },
            {
                million: "",
                "13/12/2021": "",
                "13/12/2022": "",
                "13/12/2024": "",
                variance: "",
                "variance%": "",
            },
        ],
    },
    {
        key:'8',
        million: "Operating expense",
    },
    {
        key:'9',
        million: "Fuel",
        "13/12/2021": "4357.00",
        "13/12/2022": "14333.00",
        "13/12/2024": "",
        variance: "",
        "variance%": "",
    },
    {
        key:'10',
        million: "Labur",
        "13/12/2021": "35814.00",
        "13/12/2022": "30554.00",
        "13/12/2024": "",
        variance: "",
        "variance%": "",
    },
    {
        key:'11',
        million: "Landing fee and route chnage",
        "13/12/2021": "35814.00",
        "13/12/2022": "30554.00",
        "13/12/2024": "",
        variance: "",
        "variance%": "",
    },
    {
        key:'12',
        million: "Maintence, meterials and...",
        "13/12/2021": "35814.00",
        "13/12/2022": "30554.00",
        "13/12/2024": "",
        variance: "",
        "variance%": "",
    },
    {
        key:'13',
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

export const columns = [
    {
        title: "(million)",
        dataIndex: "million",
        // key: "million",
        width: "12%",
        render: (text) => <div style={{ fontSize: '12px' }}>{text}</div>,
        onCell: () => ({
            style: {
              backgroundColor: '#D3D3D3',
            },
          }),
    },
    {
        title: "13/12/2021",
        dataIndex: "13/12/2021",
        // key: "13/12/2021",
        width: "10%",
        editable: true,
        render: (text) => <div style={{ fontSize: '12px',textAlign: 'center' }}>{text}</div>
    },
    {
        title: "13/12/2022",
        dataIndex: "13/12/2022",
        // key: "13/12/2022",
        width: "10%",
        editable: true,
        render: (text) => <div style={{ fontSize: '12px',textAlign: 'center' }}>{text}</div>,
        onCell: () => ({
            style: {
              backgroundColor: '#D3D3D3',
            },
          }),

    },
    {
        title: "13/12/2024",
        dataIndex: "13/12/2024",
        // key: "13/12/2024",
        width: "12%",
        editable: true,
        render: (text) => <div style={{ fontSize: '12px',textAlign: 'center' }}>{text}</div>
    },
    {
        title: "variance",
        dataIndex: "variance",
        // key: "variance",
        width: "10%",
        render: (text) => <div style={{ color: "green", fontSize: '12px', fontWeight: '600',textAlign: 'center' }}>{text}</div>,
        onCell: () => ({
            style: {
              backgroundColor: '#D3D3D3',
            },
          }),
    },
    {
        title: "variance%",
        dataIndex: "variance%",
        // key: "variance%",
        width: "10%",
        render: (text) => <div style={{ color: "red", fontWeight: '600', fontSize: '12px',textAlign: 'center' }}>{text}</div>,
    },
];