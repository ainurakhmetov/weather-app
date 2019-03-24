import React from 'react';
import styled from 'styled-components';
import ButtonIcon from "../ButtonIcon";

const ComponentWrapper = styled.button`
    border:none;
    outline: inherit;
    display: flex;
    flex-direction: column;
    width: 33.333vw;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Day = styled.span`
    font-size: 12px;
    font-weight: 100;
    color: #fff;
    margin: 0;
     @media (min-width: 481px) {
            font-size: 14px;
      }
`;

const DayButton = ({day, icon, style, btn}) => (
    <ComponentWrapper
        style={style}
        onChange={btn}
    >
        <ButtonIcon
            icon={icon}
        />
        <Day>
            {day}
        </Day>
    </ComponentWrapper>
);

export default DayButton;
