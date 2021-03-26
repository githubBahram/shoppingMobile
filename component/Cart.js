import React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, TouchableHighlight, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import highlights from "../data/banner";
import AddComponent from "./AddComponent";

import PersianDigit from "./PersianDigit";

const {width, height} = Dimensions.get('window');


const Header = () => {
    return (
        <View>
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansMobile',
            }}>سبد خرید
            </Text>

        </View>
    );
};

const CartDetail = (props) => {
    const {id, name, image, count} = props.item
    const amount = PersianDigit(props.item.amount)
    return (
        <View style={styles.cart}>
            <View style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#fff',
                width: width,
                height: 120,
                borderRadius: 10,
                overflow: 'hidden'
            }}/>
            <View style={styles.cartTitleWrapper}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Image style={styles.cartImage} source={image}/>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        marginTop: 15
                    }}>
                        <Text style={styles.cartTitle}>{name} </Text>
                        <Text style={styles.cartAmount}> {amount}تومان </Text>
                    </View>
                </View>
                <View style={styles.addButton}>
                    <AddComponent id={id} name={name} image={image} amount={amount}/>
                </View>
            </View>
        </View>
    )
}

const footer = () => {
    const orders = useSelector(state => state.orders);
    let ordersCount = 0
    let sumAmount = 0;

    orders.forEach(item => {
        sumAmount += (item.amount * item.count)
        ordersCount += item.count
    })

    const sumAmountPersian = PersianDigit(sumAmount)
    const percentAmount = 0
    const percentAmountPer = PersianDigit(0)
    const sumTotalAmount = PersianDigit(sumAmount - percentAmount)
    const orderCountPer=PersianDigit(ordersCount)


    return (
        <View style={styles.footer}>
            <View style={[styles.footerItemStyle, styles.footerHeadTitleWrapper]}>
                <Text style={styles.footerHeadTitle}>جزئیات سبد</Text>
                <Text style={styles.footerHeadSubtitle}> {orderCountPer} کالا</Text>
            </View>
            <View style={styles.footerItemStyle}>
                <Text style={styles.footerBodyTitle}>قیمت کالاها</Text>
                <Text style={styles.footerBodySubTitle}>{sumAmountPersian}تومان</Text>
            </View>
            <View style={styles.footerItemStyle}>
                <Text style={styles.footerBodyTitle}>تخفیف کالاها</Text>
                <Text style={[styles.footerBodySubTitle, styles.footerPercent]}>{percentAmountPer}تومان</Text>
            </View>
            <View style={styles.footerItemStyle}>
                <Text style={styles.footerBodyTitle}>جمع سبد خرید</Text>
                <Text style={styles.footerBodySubTitle}>{sumTotalAmount}تومان</Text>
            </View>
            <View style={styles.footerItemStyle}></View>

        </View>
    )
}
const Cart = ({navigation}) => {
    const orders = useSelector(state => state.orders);
    let sumAmount = 0;
    orders.forEach(item => sumAmount += (item.amount * item.count))
    const sumAmountPersian = PersianDigit(sumAmount)
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: props => <Header/>,
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.cartWrapper}>
                <View style={styles.cartDetailWrapper}>
                    <FlatList
                        data={orders}
                        renderItem={({item}) => <CartDetail item={item}/>}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListFooterComponent={footer}
                    />
                </View>

            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 25,
                backgroundColor: '#fff',
                width,
                height: height / 12,
                position: 'absolute',
                bottom: 0,
                borderTop: 1

            }}>
                <View
                    style={{
                        alignSelf: 'center',
                        backgroundColor: '#43bb6c',
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderRadius: 5,

                    }}>
                    <Text style={{
                        color: '#fff',
                        fontFamily: 'IRANSansMobile_Bold',
                        fontSize: 12,
                    }}>ادامه فرآیند خرید</Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Text style={{
                        fontFamily: 'IRANSansMobile_Light',
                        fontSize: 12,
                    }}>مجموع</Text>
                    <Text style={{
                        fontFamily: 'IRANSansMobile_Bold',
                        fontSize: 12,
                    }}>
                        {sumAmountPersian}</Text>
                </View>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 10
    },
    footerItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 5
    },
    footerHeadTitleWrapper: {
        marginBottom: 15
    },
    footerHeadTitle: {
        fontFamily: 'IRANSansMobile_Bold',
        fontSize: 12,
    },
    footerHeadSubtitle: {
        fontFamily: 'IRANSansMobile',
        fontSize: 12,
    },
    footerBodyTitle: {
        fontFamily: 'IRANSansMobile',
        fontSize: 12,
    },
    footerBodySubTitle: {
        fontFamily: 'IRANSansMobile_Bold',
        fontSize: 12,
    },
    footerPercent: {
        color: '#43bb6c'
    },
    container: {
        flex: 1,
    },
    cartDetailWrapper: {
        paddingHorizontal: 20,
        marginTop: 5,

    },
    cartWrapper: {
        flex: 0.9
    },
    cartTitle: {

        fontFamily: 'IRANSansMobile_Bold',
        fontSize: 14
    },
    cartAmount: {
        fontFamily: 'IRANSansMobile_Bold',
        fontSize: 12,
        bottom: 0
    },
    cart: {
        marginBottom: 10
    },
    cartTitleWrapper: {
        flex: 1,
        borderRadius: 10,
        width,
        paddingHorizontal: 15

    },
    cartImage: {
        width: 100,
        height: 100,
    },
    addButton: {
        marginHorizontal: 10
    }
})

export default Cart;
