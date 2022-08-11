import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import { ProductContext } from '../ProductContext';

export default Home = (props) => {
    const { navigation } = props;

    const { onGetProductForHomePage } = useContext(ProductContext);
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    useEffect(async () => {
        setIsLoading(true);
        const res = await onGetProductForHomePage();
        setData(res);
        setIsLoading(false);
        return () => {
            res;
        };
    }, []);


    const renderItem = ({ item }) => {
        const { name, products } = item;
        return (
            <View style={styles.containerProduct}>
                <Text style={styles.nameProduct}>{name}</Text>
                <View style={styles.productsContainer}>
                    {
                        products.map(product => {
                            return (
                                <Pressable onPress={() => navigation.navigate('Detail', { id: product._id })} style={styles.product} key={product._id}>
                                    <View style={styles.productsImageContainer} >
                                        <Image style={styles.productImage} resizeMethod='auto'
                                            source={{ uri: product.images[0] }} />
                                    </View>
                                    <View style={styles.productNameContainer}>
                                        <Text numberOfLines={1} style={styles.productName}>{product.name}</Text>
                                    </View>
                                    <View style={styles.productPriceContainer}>
                                        <Text style={styles.productPrice}>{product.price} VNĐ</Text>
                                    </View>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
    const renderHeader = () => {
        return (
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMethod='auto'
                    source={require('../../../assets/image/bgr.png')} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {
                isloading == true ?
                    <Text style={styles.dulieu}>Đang tải dữ liệu</Text> :
                    <FlatList data={data} renderItem={renderItem}
                        keyExtractor={item => item._id}
                        ListHeaderComponent={renderHeader} />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    dulieu:{
        textAlign: 'center',
        paddingTop: 100,
        fontSize: 16,
    },
    nameProduct: {
        fontSize: 24,
        fontWeight: '600',
        color: '#221F1F',
    },
    productPrice: {
        color: '#007537',
        fontSize: 17,
        fontWeight: '600'
    },
    productPriceContainer: {

    },
    productName: {
        fontSize: 16,
        color: '#221F1F',
        fontWeight: '600',
    },
    productNameContainer: {
        marginTop: 4,
    },
    containerProduct: {
        paddingHorizontal: 24,
    },
    productImage: {
        width: 100,
        height: 100,

    },
    productsImageContainer: {
        height: 134,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        justifyContent: 'center'
    },
    product: {
        width: '46%',
        marginTop: 20,
    },
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: '100%',
        height: 205,
    },
    container: {
        width: '100%',
        height: '100%',
        flexGrow: 1,
        backgroundColor: 'white',
    },
})

