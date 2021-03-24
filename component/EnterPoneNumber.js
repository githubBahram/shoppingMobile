import * as React from 'react';
import {Text, StyleSheet, Platform, Dimensions, Image, TouchableOpacity, TextInput} from 'react-native';
import * as  Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {View} from 'react-native-animatable';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>خوش آمدید!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>لطفا شماره همراه خود را وارد نمایید</Text>
                <View style={styles.action}>

                    <TextInput
                        placeholder="شماره همراه"
                        style={styles.textInput}
                        autoCapitalize="none"/>
                    <Feather name="check-circle"
                             color="green"
                             size={2}/>
                </View>

            </View>
        </View>
    );
};

export default SignInScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    }, header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    }, footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    }, text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    }, text_footer: {
        color: '#05375a',
        fontSize: 18,
    }, action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
