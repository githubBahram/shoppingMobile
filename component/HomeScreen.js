import React from 'react';
import {
    FlatList,
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
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import highlights from '../data/banner';
import categories from '../data/categories';
import OrderConfirmed from './OrderConfirmed';

const {width, height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f8fffa',
            fontFamily:'IRANSansMobile',

        },
        header: {
            backgroundColor: '#43bb6c',
            borderBottomRightRadius: 40,
            borderBottomLeftRadius: 40,
        },
        headerWrapper: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            paddingBottom: 50,
        },
        headerImage: {
            height: 50,
            width: 50,
            borderRadius: 50,
            borderColor: '#fff',
            borderWidth: 2,
        },
        headerDetails: {
            flexDirection: 'row',
        },
        mapIconWrapper: {
            alignSelf: 'center',
        },
        mapIcon: {
            color: '#346473',
            marginRight: 10,
        },
        headerTitle: {
            color: '#fff',
            fontFamily: 'Montserrat-Semibold',
            fontSize: 16,
        },
        headerSubtitle: {
            color: '#fff',
            fontSize: 16,
            textDecorationLine: 'underline',
        },

        search: {
            marginHorizontal: 20,
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 10,
            marginTop: -25,
            shadowColor: '#000',
            shadowOffset: {
                height: 3,
                width: 0,
            },
            shadowRadius: 4,
            shadowOpacity: 0.1,
            elevation: 1,
        },
        searchWrapper: {
            flexDirection: 'row',

        },
        searchIcon: {
            color: '#b0b0b0',
            marginRight: 10,
            alignSelf: 'center',
        },
        searchInput: {
            color: '#b4b4b4',
            fontFamily: 'Montserrat-Semibold',
            alignSelf: 'center',
            textAlign: 'center',
            height: 34,
        },
        highlightWrapper: {
            marginTop: 20,
        },
        highlight: {
            marginLeft: 20,
            marginRight: 10,
            paddingLeft: 20,
            paddingBottom: 20,
            borderRadius: 10,
        },
        highlightItem: {
            flexDirection: 'row',

            alignItems: 'flex-end',
            marginBottom: 10,

        },
        chipsContainer: {
            backgroundColor: '#ff6a14',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            marginRight: 30,
        },
        chips: {
            color: '#fff',
            textTransform: 'uppercase',
            fontFamily:'IRANSansMobile_Bold',
            fontSize:14
        },
        highlightImage: {
            height: 100,
            width: 100,
        },
        highlightTitle: {
            fontFamily:'IRANSansMobile',
            fontSize: 14,
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: 5,
        },
        highlightSubtitle: {
            fontFamily:'IRANSansMobile',
            fontSize: 12,
            color: '#fff',
        },
        categoryWrapper: {
            paddingHorizontal: 20,
            marginTop: 20,
            flex: 1,
        },
        category: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        categoryTitle: {
            fontFamily:'IRANSansMobile_Bold',
            fontSize: 14,
            color: '#00312d',

        },
        categorySubtitle: {
            fontFamily:'IRANSansMobile',
            fontSize: 12,
            color: '#4f7985',
            textDecorationLine: 'underline',
        },
        footerIcon: {
            color: '#6d8f9a',
        },
    });
    const Highlight = ({item}) => {
        return (
            <View style={[styles.highlight, {backgroundColor: item.backgroundColor}]}>
                <View style={styles.highlightItem}>
                    <View style={styles.chipsContainer}>
                        <Text style={styles.chips}>{item.chips}</Text>
                    </View>
                    <Image source={item.image} style={styles.highlightImage}/>
                </View>
                <View>
                    <Text style={styles.highlightTitle}>{item.title}</Text>
                    <Text style={styles.highlightSubtitle}>{item.subtitle}</Text>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.header}>
                <View style={styles.headerWrapper}>
                    <View style={styles.headerDetails}>
                        <View style={styles.mapIconWrapper}>
                            <Icon name="map-pin" size={25} style={styles.mapIcon}/>
                        </View>
                        <View>
                            <Text style={styles.headerTitle}>مکان فعلی</Text>
                            <Text style={styles.headerSubtitle}>خمین</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../assets/profile.png')} style={styles.headerImage}/>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.search}>
                <View style={styles.searchWrapper}>
                    <Icon name="search" size={20} style={styles.searchIcon}/>
                    <TextInput placeholder="جستجو ..." style={styles.searchInput}/>
                </View>
            </View>
            <View style={styles.highlightWrapper}>
                <FlatList
                    data={highlights}
                    renderItem={Highlight}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}/>
            </View>
            <View style={styles.categoryWrapper}>
                <View style={styles.category}>
                    <View>
                        <Text style={styles.categoryTitle}>دسته بندی محصولات</Text>
                    </View>
                    <View>
                        <Text style={styles.categorySubtitle}>بازید همه</Text>
                    </View>
                </View>
                <ScrollView style={{
                    marginTop: 10,
                }}>
                    {
                        categories.map((chunk, index) => {
                            return (
                                <View key={index} style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 10,
                                }}>
                                    {
                                        chunk.map(category => {
                                            return (
                                                <TouchableHighlight
                                                    activeOpacity={0.6}
                                                    key={category.id}
                                                    underlayColor="#DDDDDD"
                                                    onPress={() => navigation.navigate('Products')}>
                                                    <View key={category.id} style={{
                                                        width: width / 3 - 30,
                                                        marginHorizontal: 10,
                                                        justifyContent: 'center',
                                                        marginBottom: 20,
                                                    }}>
                                                        <View
                                                            style={{
                                                                position: 'absolute',
                                                                top: 0,
                                                                backgroundColor: '#def6e6',
                                                                borderRadius: 10,
                                                                width: width / 3 - 30,
                                                                height: width / 3 - 55,
                                                            }}
                                                        />
                                                        <View>
                                                            <Image source={category.image} style={{
                                                                width: width / 3 - 30,
                                                                height: width / 3 - 30,
                                                            }}/>
                                                            <Text style={{
                                                                textAlign: 'center',
                                                                fontFamily:'IRANSansMobile',
                                                                fontSize:12
                                                            }}>{category.title}</Text>
                                                        </View>
                                                    </View>
                                                </TouchableHighlight>
                                            );
                                        })
                                    }
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
            <OrderConfirmed/>

        </View>
    );
};
export default HomeScreen;
