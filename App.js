import React from 'react';
import {AppRegistry,} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GroupsContainer from './containers/groupsContainer'
import ItemsContainer from './containers/itemsContainer'
import TimerContainer from './containers/timerContainer'

const aptitudetest = StackNavigator({
    GroupsContainer: { screen: GroupsContainer },
    ItemsContainer: { screen: ItemsContainer },
    TimerContainer: { screen: TimerContainer },
});

AppRegistry.registerComponent('aptitudetest', () => aptitudetest);