import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native'

const Search = (props) => {
    const { navigation } = props;

    const renderItem = ({ item }) => {
        const { images, name, price, quantity, _id } = item;
        return (
            <Pressable onPress={() => navigation.navigate('Detail', { id: _id })} style={styles.product}>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={{ uri: images[0] }} resizeMethod='auto'></Image>
                </View>
                <View numberOfLines={1}
                    style={styles.productTenContainer}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>{price} VNĐ</Text>
                    <Text style={styles.productQuantity}>Còn {quantity} Sản Phẩm</Text>
                </View>
            </Pressable>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.searchText}>Tìm Sản Phẩm</Text>
            </View>
            <View style={styles.textInputContainer}>
                <TextInput placeholder='Ambrosia' style={styles.textInput}></TextInput>
                <View style={styles.searchTim}>
                    <Image source={require('../../../assets/image/search.png')}></Image>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => item._id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    productQuantity: {
        fontSize: 14,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: '500',
        padding: 5
    },
    productName: {
        fontSize: 16,
        fontWeight: '500',
    },
    productTenContainer: {
        marginLeft: 15,
    },
    productImage: {
        width: '80%',
        height: '80%',
    },
    productContainer: {
        width: 77,
        height: 77,
        borderRadius: 8,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    product: {
        flexDirection: 'row',
        height: 107,
        marginTop: 20,
    },
    searchTim: {
        position: 'absolute',
        right: 0,
        top: 8,
    },
    textInput: {
        width: '100%',
        height: '100%',
        borderBottomColor: '#221F1F',
        borderBottomWidth: 1.5,
        paddingRight: 25,
    },
    textInputContainer: {
        paddingHorizontal: 48,
        height: 33,
        marginTop: 4,
        position: 'relative',
        marginBottom: 20,
    },
    searchText: {
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        flexGrow: 1,
        backgroundColor: 'white',
        paddingTop: 32,
        paddingHorizontal: 48,
    }
})

var data = [
    {
        "sold": 96,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d1",
        "name": "Ambrosia ambrosioides (Cav.) Payne",
        "price": 1,
        "madein": "Indonesia",
        "quantity": 1547072379,
        "category": "61d11c4b86511f0016f490ed",
        "size": "XS",
        "createdAt": "2021-05-20T00:40:04.000Z",
        "updatedAt": "2021-02-15T15:54:50.000Z"
    },
    {
        "sold": 96,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d2",
        "name": "Ambrosia ambrosioides (Cav.) Payne",
        "price": 1,
        "madein": "Indonesia",
        "quantity": 1547072379,
        "category": "61d11c4b86511f0016f490ed",
        "size": "XS",
        "createdAt": "2021-05-20T00:40:04.000Z",
        "updatedAt": "2021-02-15T15:54:50.000Z"
    },
    {
        "sold": 96,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d3",
        "name": "Ambrosia ambrosioides (Cav.) Payne",
        "price": 1,
        "madein": "Indonesia",
        "quantity": 1547072379,
        "category": "61d11c4b86511f0016f490ed",
        "size": "XS",
        "createdAt": "2021-05-20T00:40:04.000Z",
        "updatedAt": "2021-02-15T15:54:50.000Z"
    }, {
        "sold": 96,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d4",
        "name": "Ambrosia ambrosioides (Cav.) Payne",
        "price": 1,
        "madein": "Indonesia",
        "quantity": 1547072379,
        "category": "61d11c4b86511f0016f490ed",
        "size": "XS",
        "createdAt": "2021-05-20T00:40:04.000Z",
        "updatedAt": "2021-02-15T15:54:50.000Z"
    },
    {
        "sold": 96,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d5",
        "name": "Ambrosia ambrosioides (Cav.) Payne",
        "price": 1,
        "madein": "Indonesia",
        "quantity": 1547072379,
        "category": "61d11c4b86511f0016f490ed",
        "size": "XS",
        "createdAt": "2021-05-20T00:40:04.000Z",
        "updatedAt": "2021-02-15T15:54:50.000Z"
    },
    {
        "sold": 96,
        "images": [
            "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
            "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
        ],
        "_id": "61d12f0c555401c8610fb8d6",
        "name": "Ambrosia ambrosioides (Cav.) Payne",
        "price": 1,
        "madein": "Indonesia",
        "quantity": 1547072379,
        "category": "61d11c4b86511f0016f490ed",
        "size": "XS",
        "createdAt": "2021-05-20T00:40:04.000Z",
        "updatedAt": "2021-02-15T15:54:50.000Z"
    }
]