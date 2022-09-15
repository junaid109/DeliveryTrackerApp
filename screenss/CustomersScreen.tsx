import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import useTailwind from './../node_modules/tailwind-rn/dist/use-tailwind.d';

const CustomersScreen = () => {

  const tw = useTailwind();

  return (
    <SafeAreaView style={tw("text-red-500")}>
      <Text>CustomerScreen</Text>
      
    </SafeAreaView>
  )
}

export default CustomersScreen