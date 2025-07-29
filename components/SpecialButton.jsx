import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SpecialButton = () => {
  return (
    <Pressable>
        <Ionicons name='add-circle-outline' size={24} color='black' />
    </Pressable>
  )
}

export default SpecialButton

const styles = StyleSheet.create({
    button:{
        position: 'absolute',
        top:-20,
        left: '50%',
        transform: [{ translateX: -40 }],
        backgroundColor: '#2ec4b6',
        borderRadius: 50,
        padding: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderWidth: 2,
        borderColor: 'white',
    
    }
})