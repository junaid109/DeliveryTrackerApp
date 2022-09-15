import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
    Main: undefined;
    MyMode: {userId: string; name: string}
    Order: { order: any}
}

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Main" component={TabNavigator}>
                    {() => (
                        <View>
                            <Text>CustomerScreen</Text>
                        </View>
                    )}
                </RootStack.Screen>

            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default RootNavigator