import { StyleSheet, Text, View, Link} from 'react-native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import ThemedText from './ThemedText'
import ThemedButton from './ThemedButton'

const ThemedLink = ({style}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    <View style={styles.biometricsContainer}>
      <ThemedButton style={[styles.biometricsButton, {borderColor:theme.text}]}>
          <Ionicons name="finger-print-outline" size={24} color={theme.text} />
          <ThemedText>Log in with biometrics</ThemedText>
      </ThemedButton> 
    </View>
      
  )
}

export default ThemedLink

const styles = StyleSheet.create({
  biometricsContainer: {
    display: 'flex',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
      
  },
  biometricsButton: {
      backgroundColor: 'transparent',
      padding: 10,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      borderWidth: 2,              // Add border
      borderColor: '#91CBDE',  
  }
})