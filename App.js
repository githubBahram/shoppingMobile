/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import styled from 'styled-components/native';
import {I18nManager, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import './i18n';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Tabs from './component/tabs/Tabs';
import SplashScreen from './component/SplashScreen';
import SignInScreen from './component/SignInScreen';
import EnterPhoneNumber from './component/EnterPoneNumber';
import HomeScreen from './component/HomeScreen';
import Product from './component/Product';
import store from './redux/store';
import {Provider} from 'react-redux';
import Cart from "./component/Cart";

const Container = styled.SafeAreaView`
  flex: 1
`;
const Profile = () => {
    return (
        <Text>Profile page </Text>
    );
};

I18nManager.forceRTL(true);
const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="سوپر مارکت" component={HomeScreen}/>
                        <Stack.Screen name="Products" component={Product}/>
                        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
                        <Stack.Screen name="SignInScreen" component={SignInScreen}/>
                        <Stack.Screen name="EnterPhoneNumber" component={EnterPhoneNumber}/>
                        <Stack.Screen name="Tabs" component={Tabs}/>
                        <Stack.Screen name="Profile" component={Profile}/>
                        <Stack.Screen name="Cart" component={Cart}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};
export default App;
