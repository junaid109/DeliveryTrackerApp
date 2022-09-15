import { View, Text } from 'react-native'
import React , { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screenss/CustomersScreen';
import OrdersScreen from '../screenss/OrdersScreen';
import SettingsScreen from '../screenss/SettingsScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@renui/themed";

export type TabStackParamList = {
    Customers: undefined;
    Orders: undefined;
    Settings: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();


const TabNavigator = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
        }, [navigation]);

         
  return (
    <Tab.Navigator screenOptions={({ route }) => (
        
    )}>
    <Tab.Screen name="Customers" component={CustomersScreen} />
    <Tab.Screen name="Orders" component={OrdersScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />

</Tab.Navigator>
  )
}

export default TabNavigator