import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import Light from '../assets/images/logoTelehealth.png'; // Adjust the path as necessary
import Dark from '../assets/images/logoTelehealth-dark.png'; // Adjust the path as necessary
const ThemedLogo = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? Dark : Light; // Choose logo based on color scheme
  return (
    <Image source={logo} style={[style]}/>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({})