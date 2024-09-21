import React from "react";
import styled from "styled-components";

const WrapperTab = styled.div`
    display: flex;
    padding: 36px 0 16px;
    height: 28px;
`
const ListStyle = styled.li`
    list-style: none;
    font-size: 14px;
    border: ${ props => props?.isOpen ? '1px solid red' : '0.1px solid #dddada'} ;
    color: ${ props => props?.isOpen ? 'red' : '#444648'};
    min-width: 60px;
    font-weight: 500;
    padding: 2px 6px;
`

const data = [
    {
        id: 0,
        label: "Profit & Loss",
        isOpen: true,
    },
    {
        id: 1,
        label: "Balance sheet",
        isOpen: false,
    },
    {
        id: 2,
        label: "Cashflow",
        isOpen: false,
    },
    {
        id: 3,
        label: "Ratio",
        isOpen: false
    }
]

const TabComponent = () => <WrapperTab>{data?.map((item, id) => <ListStyle isOpen = {item?.isOpen}>{item.label}</ListStyle>)}</WrapperTab>
export default TabComponent;