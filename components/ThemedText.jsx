import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
const ThemedText = ({style, link= false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light // Fallback to light theme if colorScheme is undefined
  return (
    <Text style={[{ color: (link) ? theme.link : theme.text, fontSize: 16, fontFamily: 'Arial' },style]}
    {...props}
    />

  )
}

export default ThemedText

const styles = StyleSheet.create({})