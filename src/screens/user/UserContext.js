import React, { useState, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login, register } from './UserService'
import constants from '../../utils/constans'

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const onLogin = async (email, password) => {
        try {
            const result = await login(email, password);
            if (result && result.token){
                await AsyncStorage.setItem(constants.TOKEN_KEY, result.token);
                setisLoggedIn(true);
                return true;
            }
        } catch (error) {
            console.log('onLogin error: ', error);
        }
        return false;
    }
    const onRegister = async (email, password, confirm_password) =>{
        try {
            const result = await register(email, password,confirm_password);
            return result.status;
        } catch (error) {
            console.log('onRegister error: ', error);
        }
    }
    return (
        <UserContext.Provider
            value={{
                onLogin,onRegister, isLoggedIn,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
