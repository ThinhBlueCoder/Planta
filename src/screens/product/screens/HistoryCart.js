import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const HistoryCart = (props) => {

  const displayDay = (day) => {
    switch (day) {
      case 0: return 'Thứ hai';
      case 1: return 'Thứ ba';
      case 2: return 'Thứ tư';
      case 3: return 'Thứ năm';
      case 4: return 'Thứ sáu';
      case 5: return 'Thứ bảy';
      case 6: return 'Chủ nhật';
      default: break;
    }
  }

  const displayTime = (time) => {
    time = new Date(time);
    const day = displayDay(time.getDay());
    const date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    const month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
    const year = time.getFullYear();
    return `${day}, ${date}/${month}/${year}`;
  }

  const renderItem = ({ item }) => {
    const { createdAt, total, products, status } = item;
    return (
      <View style={styles.cartContainer}>
        <Text style={styles.date}>{displayTime(createdAt)}</Text>
        <Text style={styles.status}>Trạng thái: {status}</Text>
        <Text style={styles.products}>{products.length} sản phẩm </Text>
        <Text style={styles.total}>Tổng tiền: {total}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch sử giao dịch</Text>
      <FlatList
        data={data}
        keyExtractor={item => Math.random()}
        renderItem={renderItem}>
      </FlatList>
    </View>
  );
};

export default HistoryCart;

const styles = StyleSheet.create({
  total: {
    color: '#000',
    fontSize: 14,
  },
  products: {
    color: '#000',
    fontSize: 14,
  },
  status: {
    color: '#007537',
    fontSize: 16,
  },
  date: {
    color: '#221F1F',
    fontSize: 16,
    borderBottomColor: '#7D7B7B',
    borderBottomWidth: 0.5,
  },
  cartContainer: {
    marginTop: 16,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
    paddingHorizontal: 32,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
});

var data = [
  {
    "_id": "6204b2ac9ee56800161a7547",
    "user": "61dfa74f48d96c0016e696d8",
    "status": "Đang xử lý",
    "total": 13,
    "products": [
      {
        "_id": "6204b2ac9ee56800161a7548",
        "product": "61d12f0c555401c8610fb8d1",
        "quantity": 2,
        "price": 1
      },
      {
        "_id": "6204b2ac9ee56800161a7549",
        "product": "61d12f0c555401c8610fb8d2",
        "quantity": 2,
        "price": 1
      },
      {
        "_id": "6204b2ac9ee56800161a754a",
        "product": "61d12f0c555401c8610fb8d3",
        "quantity": 3,
        "price": 3
      }
    ],
    "createdAt": "2022-02-10T06:37:32.875Z",
    "updatedAt": "2022-02-10T06:37:32.875Z"
  }
]