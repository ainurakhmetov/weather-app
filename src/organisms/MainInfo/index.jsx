import React from 'react';
import styled from 'styled-components';
import WeatherIcon from '../../atoms/WeatherIcon';

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #21a5da;
    width: 100%;
    height: 75vh;
`;

const DescriptionElement = styled.p`
    font-size: 24px;
    font-weight: 300;
    display: flex;
    color: #fff;
`;

const WeatherElement = styled.p`
    margin: 0;
    display: flex;
    color: #fff;
    font-size: 116px;
    font-weight: 100;
`;

const StyledSpan = styled.span`
    font-size: 64px;
    font-weight: 100;
`;

const LocationElement = styled.p`
    font-size: 20px;
    font-weight: 300;
    display: flex;
    color: #fff;
`;

const IconStyle = {
    backgroundColor: '#3fb1df',
    borderRadius: '50%',
    height: '150px',
    width: '150px',
};

const MainInfo = ({ description, weather, location}) => (
    <ComponentWrapper>
        <DescriptionElement>
             {description}
        </DescriptionElement>
        <WeatherIcon
            style={IconStyle}
            icon={description.toLowerCase()}
        />
        <WeatherElement>
            {weather}<StyledSpan>°</StyledSpan>
        </WeatherElement>
        <LocationElement>
            {location}
        </LocationElement>
    </ComponentWrapper>
);

export default MainInfo;
