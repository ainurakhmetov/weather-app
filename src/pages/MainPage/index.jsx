import React from 'react';
import Date from '../../atoms/Date';
import styled from "styled-components";
import SwipeableViews from 'react-swipeable-views';
import axios from 'axios';
import MainInfo from '../../organisms/MainInfo';
import DayButton from '../../atoms/DayButton';
import DateConverter from '../../molecules/DateConverter';
import DayConverter from '../../molecules/DayConverter';

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    height: 15%;
`;

const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 100vh;
`;

const Slide = styled.div`
    padding: 0,
    minHeight: 100,
`;

const Error = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #21a5da;
    width: 100%;
    height: 100vh;
    color: #fff;
    font-size: 24px;
`;

const Button = styled.button`
  background-color: #fff;
  color: #21a5da;
  border: none;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  margin-top: 10px;
  @media (max-width: 390px) {
    padding: 10px 0;
    width: 75px;
  }
`;

const ButtonBackground = {backgroundColor: '#3eb1df',};
const ActiveButtonBackground = {backgroundColor: '#1c9dd1',};

class MainPage extends React.Component {
    state = {
        index: 0,
        data: [],
        error: false,
    };
    componentDidMount() {
        this.fetch();
    }
    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };
    fetch = () => {
        axios
            .get(`https://gist.githubusercontent.com/anonymous/feb1b31516f3e36a14b29657701f18d2/raw/`)
            .then((response) => {
                this.setState({
                    data: response.data,
                    error: false,
                });
            })
            .catch(() => {
                this.setState({
                    error: true,
                });
            });
    };
    render() {
        const { index, data, error } = this.state;
        return (
            <ComponentWrapper>
                {error &&
                <Error>Error !
                    <Button type="button" onClick={() => this.fetch()}>
                        Try again
                    </Button>
                </Error>}
                {data.list &&
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <Slide>
                        <Date
                            date={DateConverter(data.list[0].dt)}
                            index={index}
                        />
                        <MainInfo
                            description={data.list[0].weather[0].main}
                            weather={(Math.round((data.list[0].deg-32) * 5 / 9))}
                            location={data.city.name}
                        />
                    </Slide>
                    <Slide>
                        <Date
                            date={DateConverter(data.list[1].dt)}
                            index={index}
                        />
                        <MainInfo
                            description={data.list[1].weather[0].main}
                            weather={(Math.round((data.list[1].deg-32) * 5 / 9))}
                            location={data.city.name}
                        />
                    </Slide>
                    <Slide>
                        <Date
                            date={DateConverter(data.list[2].dt)}
                            index={index}
                        />
                        <MainInfo
                            description={data.list[2].weather[0].main}
                            weather={(Math.round((data.list[2].deg-32) * 5 / 9))}
                            location={data.city.name}
                        />
                    </Slide>
                </SwipeableViews>}
                {data.list &&
                <ButtonGroup
                    index={index}
                    data={data}
                >
                    {data.list[0] &&
                    <DayButton
                        icon={data.list[0].weather[0].main}
                        day={DayConverter(data.list[0].dt)}
                        style={index===0 ? ActiveButtonBackground : ButtonBackground}
                    />}
                    <DayButton
                        icon={data.list[1].weather[0].main}
                        day={DayConverter(data.list[1].dt)}
                        style={index===1 ? ActiveButtonBackground : ButtonBackground}
                    />
                    <DayButton
                        icon={data.list[2].weather[0].main}
                        day={DayConverter(data.list[2].dt)}
                        style={index===2 ? ActiveButtonBackground : ButtonBackground}
                    />
                 </ButtonGroup>}
            </ComponentWrapper>
        )
    }
}

export default MainPage;
