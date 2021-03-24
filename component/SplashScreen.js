import React from 'react';
import {
    View, Text, Button, Dimensions, StyleSheet, StatusBar,
} from 'react-native';

const SplashScreen = ({navigation}) => {
    return (
        <View>
            <StatusBar backgroundColor="#49C074" barStyle="light-content"/>
            <Text>hello</Text>
        </View>
    );
};
export default SplashScreen;
const {width, height} = Dimensions.get('screen');
const height_logo = height * 0.28;

