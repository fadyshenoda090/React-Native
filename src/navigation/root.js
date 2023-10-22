import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Users from '../screens/Users'
import Detailes from '../screens/Detailes'
import routes from '../common/routes'

const root = () => {
    const stack = createNativeStackNavigator()
    return (
        <stack.Navigator>
            <stack.Screen name={routes.home} component={Home} options={{header:()=>null}}/>
            <stack.Screen name={routes.users} component={Users} options={{header:()=>null}} />
            <stack.Screen name={routes.detailes} component={Detailes} options={{header:()=>null}} />
        </stack.Navigator>
    )
}

export default root