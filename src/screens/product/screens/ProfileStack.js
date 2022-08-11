import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Profile from './Profile'; 
import ProfileEdit from './ProfileEdit'; 
import HistoryCart from './HistoryCart'; 


export default ProfileStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            <Stack.Screen name="HistoryCart" component={HistoryCart} />
        </Stack.Navigator>
    )
}

