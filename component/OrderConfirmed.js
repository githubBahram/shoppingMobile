import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const {width} = Dimensions.get('window');
const OrderConfirmed = () => {
    const orders = useSelector(state => state.orders);
    var countOrder = 0;

    if (orders && orders.length > 1) {
        orders.forEach(order => countOrder += order.count);
        return (
            <View style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#fff',
                width,

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
                    }}> تکمیل خرید {countOrder}  </Text>
                </View>
            </View>
        );
    }
    return (
        <View></View>
    );

};
export default OrderConfirmed;
