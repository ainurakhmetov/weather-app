import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
    font-size: 16px;
    font-weight: 100;
    display: flex;
    width: 100%;
    background-color: #3eb1df;
    justify-content: center;
    height: 10vh;
`;

const DateElement = styled.p`
    color: #fff;
    margin: auto 0;
`;

const Date = ({ date, index }) => (
    <ComponentWrapper>
        <DateElement>
            {index===0 ? `Today, ${date}` : index===1 ? `Tomorrow, ${date}` : `${date}`}
        </DateElement>
    </ComponentWrapper>
);

export default Date;
