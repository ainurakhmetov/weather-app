import React from 'react';
import styled from 'styled-components';
import Overcast from '../../icons/overcast_btn.svg';
import Rain from '../../icons/Rain_btn.svg';
import Sunny from '../../icons/sunny_btn.svg';
import Tornado from '../../icons/Tornado_btn.svg';

const ImgStyled = styled.img`
    display: flex;
        @media (max-width: 399px) {
            width: 53%;
      }
        @media (min-width: 400px) {
            width: 50%;
      }
        @media (min-width: 460px) {
            width: 45%;
      }
        @media (min-width: 560px) {
            width: 40%;
      }
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
