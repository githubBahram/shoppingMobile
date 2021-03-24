import * as React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Header';

const Container = styled.View`
`;
const Row = styled.View`
padding: 0 11px;
align-items:center;
flex-direction:row;
justify-content:space-between
`;
const Text = styled.Text`
`;


const HomeScreen = () => {
    return (
            <Text>Home page </Text>

    );
};


const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" options={{
                headerTitle: props => <Header userImg={require('../../assets/bahram.jpg')} {...props}
                />,
                title: 'خانه', headerStyle: {backgroundColor: '#5899f1'},
            }}
                              component={HomeScreen}/>

        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
