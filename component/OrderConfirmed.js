import React from 'react';
import {Dimensions, Text, TouchableHighlight, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import PersianDigit from "./PersianDigit";
import {orderRemoved} from "../redux/feature/orders/ordersSlice";

const {width} = Dimensions.get('window');
const OrderConfirmed = (props) => {
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();
    var countOrder = 0;

    if (orders) {
        orders.forEach(order => countOrder += order.count);
        if (countOrder === 0) {
            return (
                <View></View>
            )
        }
        countOrder = PersianDigit(countOrder)
        var countStr = "(" + countOrder + ")"
        return (

            <View style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#fff',
                width,

            }}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => {
                        var order = orders.find(o => o.id === 0)
                        if (order) {
                            dispatch(orderRemoved(order));
                        }
                        props.navigation.navigate('Cart')
                    }}>
                    <View style={{
                        backgroundColor: '#43bb6c',
                        alignSelf: 'center',
                        width: width - 30,
                        paddingVertical: 10,
                        marginHorizontal: 10,
                        marginVertical: 5,
                        borderRadius: 4,

                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: '#fff',
                            fontFamily: 'IRANSansMobile_Bold',
                            fontSize: 16
                        }}> تکمیل خرید {countStr}  </Text>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
    return (
        <View></View>
    );

};
export default OrderConfirmed;
