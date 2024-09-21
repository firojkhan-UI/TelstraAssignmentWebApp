import React from "react";
import styled from "styled-components";
const Text = styled.div`
    display: flex;
    font-size: 24px;
    font-weight: 600;
    line-height: 0.123px;
    padding-top: 18px;
    color: #4e4c4c;
`
const Heading = ({ text }) => <Text>{text}</Text>
export default Heading