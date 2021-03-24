import * as React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Container = styled.View`
flex:1;
background-color:orange
`;


const Notification = ({route, navigation}) => {
    return (
        <Container></Container>
    );
};

export default Notification;
