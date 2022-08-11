import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable, FlatList, Dimensions, Modal, ToastAndroid } from 'react-native'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ProductContext } from '../ProductContext';

const CartItems = (props) => {
    const {cart} = props;
    const { updateCart} = useContext(ProductContext);

    const renderItem = ({ item }) => {
        const { product, quantity, price, checked} = item;
        return (
            <View style={styles.itemcontainer}>
                
                <View style={styles.imagecontainer}>
                    <Image style={styles.image} resizeMode='cover'
                        source={{ uri: product.images[0] }} />
                </View>
                <View style={styles.in4container}>
                    <View style={styles.name}>
                        <Text>{product.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>{product.price} VNĐ</Text>
                    </View>
                    <View style={styles.quantityAction}>
                        <Text onPress={()=> updateCart(product, quantity - 1 , price, true)} style={styles.removeAction}>-</Text>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Text onPress={()=> updateCart(product, quantity + 1, price, true)} style={styles.addAction}>+</Text>
                        
                    </View>
                </View>
            </View>
        )
    }
    
    return (
        <FlatList
            data={cart}
            renderItem={renderItem}
            style={styles.FlatListContainer}
            keyExtractor={item => Math.random()}
            showsVerticalScrollIndicator={false}
        />
    )
}
const CheckOutModal = (props) => {
    const { isShowModal, setisShowModal } = props;
    const {onSaveCart} = useContext(ProductContext);

    const onCheckout = async () =>{
        await onSaveCart();
        ToastAndroid.show('Thanh toán thành công', ToastAndroid.BOTTOM);
        setisShowModal(false);
    }

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={isShowModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.checkout}>Xác nhận thanh toán</Text>
                    <Pressable onPress={onCheckout} style={styles.checkoutButton}>
                        <Text style={styles.checkoutText}>Đồng ý</Text>
                    </Pressable>
                    <Text onPress={() => setisShowModal(false)} style={styles.checkouthuy}>Hủy bỏ</Text>
                </View>
            </View>
        </Modal>
    )
}
const ShowDeleteModal = (props) => {
    const { setCart }=useContext(ProductContext);
    const { isShowDeleteModal, setisShowDeleteModal} = props;
    const onDeleteCart = () => {
        setisShowDeleteModal(false);
        
    }
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={isShowDeleteModal}>
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={styles.checkout}>Xóa tất cả đơn hàng</Text>
                    <Pressable onPress={onDeleteCart} style={styles.checkoutButton}>
                        <Text style={styles.checkoutText}>Đồng ý</Text>
                    </Pressable>
                    <Text onPress={() => setisShowDeleteModal(false)} style={styles.checkouthuy}>Hủy bỏ</Text>
                </View>
            </View>
        </Modal>
    )
}

const Cart = (props) => {
    const {navigation} = props; 
    const { updateCart, cart} = useContext(ProductContext);
    
    

    const [isShowModal, setisShowModal] = useState(false);
    const [isShowDeleteModal, setisShowDeleteModal] = useState(false);

    const isShowCheck = () => {
        const items = cart.filter(item => item.checked == true) || [];
        let total = 0;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            total += element.quantity * element.price;
        }
        return { isShown: items.length > 0, total: total }
    }
    //console.log('>>>>>', data)

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Giỏ Hàng</Text>
                {/*<FontAwesome onPress={()=> setisShowDeleteModal(true)}
                style={styles.trash} name="trash-o" size={24} color="black" />*/}
            </View>

            <View>
                {
                    cart.length == 0 ?
                        <View style={styles.sisonContainer}>
                            <Text style={styles.sison}>Giỏ hàng của bạn trống</Text>
                        </View> :
                        <CartItems updateCart={updateCart} cart={cart}/>
                }
            </View>
            <View style={styles.thContainer}>
                {
                    isShowCheck().isShown == true ?
                        <>

                            <View style={styles.ttContainer}>
                                <Text style={styles.text}>Tạm tính</Text>
                                <Text>{isShowCheck().total} VNĐ</Text>
                            </View>
                            <Pressable onPress={() => setisShowModal(true)} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Tiến hành thanh toán</Text>
                                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                            </Pressable>
                        </> : <></>
                }
            </View>
            <CheckOutModal isShowModal={isShowModal} setisShowModal={setisShowModal} />
            <ShowDeleteModal isShowDeleteModal={isShowDeleteModal} setisShowDeleteModal={setisShowDeleteModal} />
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    sison:{
        textAlign:'center',
        fontSize: 16,
    },
    checkouthuy:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop: 8,
    },
    checkoutText:{
        color: 'white',
    },
    checkoutButton:{
        backgroundColor: '#007537',
        height: 50,
        borderRadius: 4,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    checkout: {
        color: '#252A31',
        fontSize: 16,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
        height: 200,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    FlatListContainer: {
        maxHeight: Dimensions.get('window').height - 200,
    },
    buttonText: {
        color: 'white',
    },
    buttonContainer: {
        height: 50,
        backgroundColor: '#007537',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: 16,
        width: '100%',
    },
    text: {
        opacity: 0.6,
    },
    ttContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    thContainer: {
        paddingHorizontal: 24,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    deleteAction: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    removeAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 25.5,
        color: 'black',
    },
    addAction: {
        borderRadius: 5,
        borderWidth: 0.5,
        width: 27.5,
        height: 27.5,
        textAlign: 'center',
        lineHeight: 25.5,
        color: 'black',
    },
    quantityAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    name: {
        width: 200,
        overflow: 'hidden',
    },
    price: {
        color: '#007537',
        fontSize: 16,
    },
    in4container: {
        marginLeft: 10,
    },
    image: {
        width: '80%',
        height: '80%',
    },
    imagecontainer: {
        width: 77,
        height: 77,
        borderRadius: 8,
        marginLeft: 10,
    },
    checkedcontainer: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemcontainer: {
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    sisonContainer: {
        marginTop: 32,
    },
    trash: {
        position: 'absolute',
        right: 50,
    },
    title: {
        fontSize: 18,
        textTransform: 'uppercase',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30,
        position: 'relative',
    },
})
