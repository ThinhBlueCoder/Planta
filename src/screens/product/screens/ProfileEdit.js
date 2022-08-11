import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const ProfileEdit = (props) => {
  const { navigation } = props;
  const { _id, name, adress, phone, avatar, email, dob } = data;

  const [fullName, setFullName] = useState(name);
  const [location, setLocation] = useState(adress);
  const [mobile, setMobile] = useState(phone);
  const [birthday, setBirthday] = useState(dob);

  const [showDateTimePicker, setshowDateTimePicker] = useState(false);

  const displayTime = (time) => {
    time = new Date(time);
    return time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();
  }

  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    showDateTimePicker(false);
    setBirthday(currentDate);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chỉnh sửa thông tin</Text>
      <Text style={styles.intruction}>Thông tin sẽ được lưu cho lần mua kế tiếp</Text>
      <Text style={styles.intruction}>Bấm vào thông tin chi tiết để chỉnh sửa.</Text>
      <View style={styles.allContainer}>
        <TextInput value={fullName} onChangeText={setFullName} style={styles.textInput}></TextInput>
        <TextInput value={location} onChangeText={setLocation} style={styles.textInput}></TextInput>
        <TextInput value={mobile} onChangeText={setMobile} style={styles.textInput}></TextInput>
        <TextInput value={displayTime(birthday)} onPressIn={() => setshowDateTimePicker(true)} style={styles.textInput}></TextInput>
      </View>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.save}>Lưu thông tin</Text>
      </Pressable>

      {showDateTimePicker && (
        <DateTimePicker
          testID="dateTimepicker"
          value={new Date(birthday)}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onChangeDateTime}
        />
      )}
    </View>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  save: {
    color: 'white',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    backgroundColor: '#007537',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 0.5,
    fontSize: 14,
    color: '#7D7B7B',
  },
  allContainer: {
    marginTop: 50,
    width: '100%',
  },
  intruction: {
    color: '#221F1F',
    fontSize: 12,
    alignSelf: 'flex-start',
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
    paddingHorizontal: 48,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
});
var data = {
  _id: "61e9472b3a08c60016e44982",
  name: "Trương Công Bảo",
  adress: "377 Hà Thị Khiêm, Phường Trung Mỹ Tây, Quận 12, HCM",
  phone: "0344515641",
  avatar: "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
  email: "truongcaobao333@gmail.com",
  createdAt: "2022-01-20T11:27:39.082Z",
  updatedAt: "2022-01-20T11:27:39.082Z",
  createdAt: "2022-02-09T17:40:59.695Z",
  updatedAt: "2022-02-09T17:40:59.695Z"
}
