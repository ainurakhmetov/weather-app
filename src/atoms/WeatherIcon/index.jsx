import React from 'react';
import styled from 'styled-components';
import Overcast from '../../icons/overcast.svg';
import Rain from '../../icons/Rain.svg';
import Sunny from '../../icons/sunny.svg';
import Tornado from '../../icons/Tornado.svg';

const ImgStyled = styled.img`
    display: flex;
      @media (max-width: 399px) {
            width: 53%;
      }
       @media (min-width: 400px) {
            width: 50%;
      }
       @media (min-width: 460px) {
            width: 40%;
      }
       @media (min-width: 560px) {
            width: 35%;
      }
       @media (min-width: 640px) {
            width: 30%;
      }
        @media (min-width: 760px) {
            width: 25%;
      }
        @media (min-width: 880px) {
            width: 20%;
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
