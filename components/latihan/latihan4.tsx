import React from 'react'
import { View, Text, TouchableOpacity, } from 'react-native'

export default function Latihan4() {
  return (
    <View>
        <Text>latihan 4</Text>

        <TouchableOpacity style={{backgroundColor: "blue", margin: 20, padding: 10, alignItems: "center"}}>
            <Text style={{color: "white", fontSize: 24}}>
                Press Here
            </Text>
        </TouchableOpacity>
    </View>
  )
}
