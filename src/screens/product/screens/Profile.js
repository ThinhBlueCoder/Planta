import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
const Profile = (props) => {
    const { navigation } = props;
    const { _id, name, adress, phone, avatar, email } = data;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.thongtin}>
                <View style={styles.avatarContainer}>
                    {
                        avatar.trim().length == 0 ?
                            <FontAwesome name="user-circle-o" size={24} color="black" />
                            :
                            <Image source={{ uri: avatar }} resizeMode='cover' style={styles.avatar} />
                    }
                </View>
                <View style={styles.nameContainer}>
                    <Text numberOfLines={1} style={styles.name}>{name}</Text>
                    <Text numberOfLines={1} style={styles.email}>{email}</Text>
                </View>
            </View>
            <View style={styles.actionContainer}>
                <Text style={styles.actionTitle}>Chung</Text>
                <Text onPress={() => navigation.navigate('ProfileEdit')} style={styles.action}>Chỉnh sửa thông tin</Text>
                <Text onPress={() => navigation.navigate('HistoryCart')} style={styles.action}>Lịch sử giao dịch</Text>
                <Text style={styles.actionTitle}>ứng dụng</Text>
                <Text style={[styles.action, styles.dangxuat]}>Đăng xuất</Text>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    dangxuat:{
        color: "#FF0000"
    },
    action: {
        marginTop: 15,
    },
    actionTitle: {
        fontSize: 16,
        color: '#7F7F7F',
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 1,
        marginTop: 16,
    },
    actionContainer: {
        marginTop: 32,
    },
    email: {
        fontSize: 14,
        color: '#7F7F7F',
    },
    name: {
        fontSize: 16,
    },
    nameContainer: {
        marginLeft: 26,
    },
    avatar: {
        width: '80%',
        height: '80%',
        borderRadius: 20,
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 39,
        height: 39,
    },
    thongtin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 32,
        paddingHorizontal: 108,
    },
})

var data = {
    _id: "61e9472b3a08c60016e44982",
    name: "Trương Công Bảo",
    adress: "377 Hà Thị Khiêm, Phường Trung Mỹ Tây, Quận 12, HCM",
    phone: "0344515641",
    avatar: "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
    email: "truongcongbao333@gmail.com",
    createdAt: "2022-01-20T11:27:39.082Z",
    updatedAt: "2022-01-20T11:27:39.082Z",
    createdAt: "2022-02-09T17:40:59.695Z",
    updatedAt: "2022-02-09T17:40:59.695Z"
}
