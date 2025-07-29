import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors' // Adjust the path as necessary
const ThemedCard = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light // Fallback to light theme if colorScheme is undefined
  return (
    <View style={[styles.card,style,{backgroundColor: theme.uiBackground}]} // Use the theme's background color
    {...props}
    />
      
  )
}

export default ThemedCard

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})