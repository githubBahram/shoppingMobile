import React from 'react';
import {
    FlatList,
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
} from 'react-native';
import {useSelector} from 'react-redux';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import AddComponent from './AddComponent';
import OrderConfirmed from './OrderConfirmed';

import dayries from '../data/dayries';
import productDetail from '../data/productDetail';

const {width, height} = Dimensions.get('window');

const Header = () => {
    return (
        <View>
            <Text style={{
                textAlign: 'center',
                fontFamily: 'IRANSansMobile',
            }}>لبنیات
            </Text>

        </View>
    );
};

const ProductCategory = ({item}) => {
    return (
        <View>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Pressed!')}>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    paddingHorizontal: 5,
                    marginLeft: 7,
                    marginVertical: 7,
                    borderRadius: 5,
                    elevation: 1,
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        fontFamily: 'IRANSansMobile',
                        fontSize: 12,
                    }}>{item.name}</Text>
                    <Image style={{
                        width: 50,
                        height: 50,
                    }} source={item.image}/>

                </View>
            </TouchableHighlight>
        </View>
    );
};

const ProductDetail = ({item}) => {
    return (
        <View style={{
            flexDirection: 'row',
        }}>
            <View style={{
                justifyContent: 'center',
            }}>

                <View style={{
                    flex: 1,
                    width: width / 2,
                    borderColor: '#e8e8e8',
                    borderWidth: .5,
                }}>
                    <Image source={item.image} style={{
                        width: 80,
                        height: 80,
                        alignSelf: 'center',
                        marginTop: 20,
                    }}/>
                    <Text style={{
                        marginLeft: 10,
                        fontSize: 12,
                        marginBottom: 5,
                        marginTop: 10,
                        fontFamily: 'IRANSansMobile',
                    }}>{item.name}</Text>
                    <Text style={{
                        textAlign: 'center',
                        marginBottom: 10,
                        fontFamily: 'IRANSansMobile_Bold',
                        fontSize: 12,
                    }}>
                        1600تومان
                    </Text>
                    <AddComponent id={item.id} amount={Number(1600)}/>
                </View>

            </View>

        </View>
    );
};

const Product = ({navigation}) => {
    const ordersLength = useSelector(state => state.orders.length);
    const styles = StyleSheet.create({
        headerWrapper: {
            flex: 1,
            marginTop: 1,
            backgroundColor: '#fff',
            paddingVertical: 5,

        },
        headerFiltering: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 5,
            paddingHorizontal: 10,
            elevation: 1,
        },
        searchIconWrapper: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            borderWidth: .2,
            borderRadius: 25,
            flexGrow: 2,
            marginHorizontal: 5,
            paddingLeft: 5,
        },
        searchIcon: {
            alignSelf: 'center',
        },
        searchSortIcon: {
            marginRight: 2,
            alignSelf: 'center',
        },
        headerSort: {
            flexDirection: 'row',
        },
        headerFilter: {
            flexDirection: 'row',
            marginLeft: 10,
        },
        headerLeft: {
            flexDirection: 'row',
            justifyContent: 'space-between',

        },
        searchInput: {
            color: '#b4b4b4',
            fontFamily: 'Montserrat-Semibold',

        },
    });

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: props => <Header/>,
        });
    }, [navigation]);

    return (
        <View style={styles.headerWrapper}>

            <View style={styles.headerFiltering}>
                <View style={styles.searchIconWrapper}>
                    <Icon name="search" size={20} style={styles.searchIcon}/>
                    <TextInput placeholder="جستجو ..." style={styles.searchInput}/>
                </View>
                <View style={styles.headerLeft}>
                    <View style={styles.headerSort}>
                        <Icon name="home" size={15} style={styles.searchSortIcon}/>
                        <Text style={{alignSelf: 'center', fontFamily: 'IRANSansMobile', fontSize: 12}}>مرتب سازی</Text>
                    </View>
                    <View style={styles.headerFilter}>
                        <Icon name="filter" size={15} style={styles.searchSortIcon}/>
                        <Text style={{alignSelf: 'center', fontFamily: 'IRANSansMobile', fontSize: 12}}>فیلتر</Text>
                    </View>
                </View>
            </View>
            <View
                style={{
                    height: 1,
                    backgroundColor: '#e8e8e8',
                }}
            />
            <View style={{
                backgroundColor: '#e8e8e8',
            }}>
                <FlatList
                    data={dayries}
                    renderItem={ProductCategory}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}/>
            </View>
            <View
                style={{
                    flex: 1
                }}>
                <View style={{
                    flex: ordersLength > 1 ? 0.9 : 1
                }}>
                    <FlatList
                        key={'#'}
                        data={productDetail}
                        renderItem={ProductDetail}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />
                </View>
                <View style={{
                    flex: ordersLength > 1 ? 0.1 : 0
                }}>
                    <OrderConfirmed/>
                </View>

            </View>
        </View>
    );

};

export default Product;
