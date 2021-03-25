import React from 'react';
import {Dimensions, Text, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {orderAdded, orderRemoved} from '../redux/feature/orders/ordersSlice';
const {width} = Dimensions.get('window');
import PersianDigit from "./PersianDigit";
const AddComponent = (props) => {

    const {id,name,image, amount} = props;
    const order = useSelector(state => state.orders.find(order => order.id === id));
    let orderCount = 0;
    if (order) {
        orderCount = order.count;
    }
    const persianOrderCount=PersianDigit(orderCount)
    const [count, setCount] = React.useState(orderCount);
    const dispatch = useDispatch();
    if (count === 0) {
        return (
            <TouchableHighlight
                activeOpacity={1}
                underlayColor="#fff"
                onPress={() => {
                    setCount(count + 1);
                    dispatch(orderAdded({id, name,image, amount, count: 1}));
                }
                }>
                <View style={{
                    borderColor: '#43bb6c',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginHorizontal: 40,
                    marginBottom: 10,
                    paddingVertical: 3,
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: 'IRANSansMobile_Bold',
                        fontSize: 12,
                        color: '#43bb6c',
                        width:width/4
                    }}>
                        افزودن
                    </Text>
                </View>
            </TouchableHighlight>
        );
    } else {
        return (
            <View style={{
                marginBottom: 10,
            }}>
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                  >
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#fff"
                        onPress={() => {
                            setCount(count + 1);
                            dispatch(orderAdded(order));
                        }

                        }>
                        <View style={{
                            backgroundColor: '#43bb6c',
                            alignSelf: 'center',
                            borderRadius: 5,
                            borderColor: '#43bb6c',
                            borderWidth: .8,
                        }}>
                            <Icon name="plus" size={12}
                                  style={{padding: 8, color: '#fff', textAlign: 'center', alignSelf: 'center'}}/>
                        </View>
                    </TouchableHighlight>

                    <View style={{
                        alignSelf: 'center',
                        marginHorizontal:10
                    }}>
                        <Text>{persianOrderCount}</Text>
                    </View>

                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#fff"
                        onPress={() => {
                            setCount(count - 1);
                           dispatch( orderRemoved(order));
                        }
                        }>
                        <View style={{
                            alignSelf: 'center',
                            borderColor: '#43bb6c',
                            borderWidth: .8,
                            borderRadius: 5,

                        }}>
                            <Icon name="minus" size={12}
                                  style={{
                                      padding: 8,
                                      color: 'black',
                                      textAlign: 'center',
                                      alignSelf: 'center',

                                  }}/>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
};
export default AddComponent;
