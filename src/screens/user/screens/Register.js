import { StyleSheet, Text, View, TextInput, Pressable, ToastAndroid } from 'react-native'
import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'

const Register = (props) => {
  const { navigation } = props;
  const { onLogin } = useContext(UserContext);

  const [email, setEmail] = useState('thinh11211@gmail.com');
  const [password, setPassword] = useState('123');
  const [confirm_password, setConfirm_password] = useState('123');

  const register = async () => {
    if (!email || !password || email.trim().length == 0 || password.trim().length == 0
      || !confirm_password || confirm_password.trim().length == 0) {
      ToastAndroid.show('Vui long nhap day du thong tin', ToastAndroid.CENTER);
      return;
    }
    if (password != confirm_password) {
      ToastAndroid.show('Mật khẩu không giống nhau', ToastAndroid.CENTER);
      return;
    }
    const res = await onLogin(email, password);
    if (res == false) {
      ToastAndroid.show('Dang ky thất bại', ToastAndroid.CENTER);
    }
  }

  return (
    <View style={styles.container}>
      <Text >Register</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        style={styles.textInput}
        secureTextEntry
      />
      <TextInput
        value={confirm_password}
        onChangeText={setConfirm_password}
        placeholder='Confirm password'
        style={styles.textInput}
        secureTextEntry
      />
      <Pressable
        style={styles.button}
        onPress={register}
      >
        <Text style={styles.buttonLabel}>Register</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonLabel}>Login</Text>
      </Pressable>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({

  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#ff0000',
    borderRadius: 8,
    marginVertical: 8,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 8,
    padding: 4,
  },
  container: {
    flex: 1,
    padding: 32
  }
})