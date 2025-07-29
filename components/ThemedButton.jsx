import { StyleSheet,Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'


const ThemedButton = ({style, ...props}) => {
    
  return (
    <Pressable
        style={[({ pressed }) => [styles.btn, pressed && styles.pressed], styles.btn , {backgroundColor: Colors.primary},style]}
        {...props}
    />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn:{
        padding: 15,
        backgroundColor: '#6200ee',
        borderRadius: 5,
        // marginVertical: 10,
    },
    pressed: {
        opacity: 0.75,
    },

})