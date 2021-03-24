import * as React from 'react';
import styled from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import HomeStackScreen from './Home';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Container = styled.View`
width:100%;
height:25px;
background-color:blue
`;



const Setting = () => {
    return (
        <Container>

        </Container>
    );
};
const Tab = createBottomTabNavigator();
const Tabs = ({navigation}) => {
    return (

            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#5899f1',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Settings" component={Setting} />
            </Tab.Navigator>

    );
};

export default Tabs;
