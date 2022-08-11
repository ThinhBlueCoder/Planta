import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import List from '../product/screens/List'
import Detail from '../product/screens/Detail'

const Stack = createNativeStackNavigator();

const ProductNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
        <Stack.Screen name='List' component={List}/>
        <Stack.Screen name='Detail' component={Detail}/>
    </Stack.Navigator>
  )
}

export default ProductNavigation