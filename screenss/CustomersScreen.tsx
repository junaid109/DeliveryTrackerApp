import { View, Text, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image } from '@rneui/themed/dist/Image';
import { Input } from '@rneui/themed';

export type CustomersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const tailWind = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Customers', 
      headerTitleStyle: tailWind('text-white'),
      headerStyle: tailWind('bg-blue-500'),
    }); 
  }, [navigation]);
  

  return (
    <ScrollView style={{backgroundColor: #59c1cc}} >
     
      <Image 
      source={{uri: 'https://links.papareact.com/3jc'}}  
      containerStyle={tailWind("w-full h-64")}
      PlaceholderContent={<ActivityIndicator />}
      />

      <Input 
      placeholder="Search by Customer"
      value={input}
      onChangeText={setInput}
      containerStyle={tailWind('bg-white pt-5 pb-0 px-10')}/>

    </ScrollView>
  );
};

export default CustomersScreen