import React from 'react';
import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';
import fetchData from '../../store/actions/fetchData';
import { connect } from "react-redux";
import DayButton from '../../atoms/DayButton';
import DayConverter from "../../molecules/DayConverter";
import Date from '../../atoms/Date';
import DateConverter from '../../molecules/DateConverter';
import MainInfo from '../../organisms/MainInfo';
import styled from 'styled-components';
import './style.css';

const ButtonBackground = {backgroundColor: '#3eb1df',};
const ActiveButtonBackground = {backgroundColor: '#1c9dd1',};
let defaultTabKey = '0';

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    height: 15vh;
`;

class MainPage extends React.Component {
    state = {
        index: '0',
    };
    componentDidMount() {
        this.props.fetchData();
    }
    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };
    tabContent = (key) => (
        <ButtonGroup>
            {this.props.data.list &&
            <DayButton
                icon={this.props.data.list[key].weather[0].main}
                day={DayConverter(this.props.data.list[key].dt)}
                style={key.toString()===this.state.index ? ActiveButtonBackground : ButtonBackground}
            />}
        </ButtonGroup>
    );
    makeTabPane = key => (
        <TabPane tab={this.tabContent(key)} forceRender={false} key={`${key}`}>
            <div>
                {this.props.data.list &&
                <Date
                    date={DateConverter(this.props.data.list[key].dt)}
                    index={key}
                />}
                {this.props.data.list &&
                <MainInfo
                    description={this.props.data.list[key].weather[0].main}
                    weather={(Math.round((this.props.data.list[key].deg-32) * 5 / 9))}
                    location={this.props.data.city.name}
                />}
            </div>
        </TabPane>
    );

    makeMultiTabPane = (count) => {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(this.makeTabPane(i));
        }
        return result;
    };
    render (){
        return(
            <div>
                <div>
                    <Tabs
                        tabBarPosition="bottom"
                        data-extra="tabs"
                        onChange={this.handleChangeIndex}
                        renderTabBar={() =>
                            <SwipeableInkTabBar
                                pageSize={3}
                                speed={5}
                            />
                        }
                        renderTabContent={() => <TabContent animated={true}/>}
                        defaultActiveKey={defaultTabKey}
                    >
                        {this.makeMultiTabPane(3)}
                    </Tabs>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.store.data,
    error: state.store.error,
});

const mapDispatchToProps = dispatch => ({
    fetchData: () => {
        dispatch(fetchData());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
