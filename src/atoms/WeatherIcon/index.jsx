import React from 'react';
import styled from 'styled-components';
import Overcast from '../../icons/overcast.svg';
import Rain from '../../icons/Rain.svg';
import Sunny from '../../icons/sunny.svg';
import Tornado from '../../icons/Tornado.svg';

const ImgStyled = styled.img`
    display: flex;
`;

const WeatherIcon = ({icon, style}) => {
    switch (icon.toLowerCase()) {
        case 'clear':
            return <ImgStyled style={style} src={Sunny} />;
        case 'clouds':
            return <ImgStyled style={style} src={Overcast} />;
        case 'rain':
            return <ImgStyled style={style} src={Rain} />;
        default: return <ImgStyled style={style} src={Tornado} />;
    }
};

export default WeatherIcon;
