import { View, Text } from 'react-native'
import React , { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomersScreen from '../screenss/CustomersScreen';
import OrdersScreen from '../screenss/OrdersScreen';
import SettingsScreen from '../screenss/SettingsScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@rneui/themed";

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
    <Tab.Navigator 
    screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Customers') {
            return <Icon name="user" size={size} color={color} />;
          } else if (route.name === 'Orders') {
          } else if (route.name === 'Settings') {
            return <Icon name="settings" size={size} color={color} />;
          }

        },
      })}
    >
 <Tab.Screen name="Customers" component={CustomersScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="menu" size={size} color={color} />
            
          ),
        }}/>
      <Tab.Screen name="Orders" component={OrdersScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}


export default TabNavigator