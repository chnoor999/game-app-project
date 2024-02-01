import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../config/Colors'

export default function GuessedNumber({children}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Colors.yellow500,
        width:80,
    },
    text:{
        color:Colors.yellow500,
        fontSize:28,
        textAlign:"center",
        paddingVertical:5,
        paddingHorizontal:10,
    }
})