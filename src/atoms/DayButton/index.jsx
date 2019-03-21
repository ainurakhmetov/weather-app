import React from 'react';
import styled from 'styled-components';
import WeatherIcon from "../WeatherIcon";

const ComponentWrapper = styled.button`
    border:none;
    outline: inherit;
    display: flex;
    flex-direction: column;
    width: 100%;
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
            font-size: 16px;
      }
`;

const DayButton = ({day, icon, style, btn}) => (
    <ComponentWrapper
        style={style}
        onChange={btn}
    >
        <WeatherIcon
            icon={icon}
        />
        <Day>
            {day}
        </Day>
    </ComponentWrapper>
);

export default DayButton;
