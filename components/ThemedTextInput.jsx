import { StyleSheet,TextInput} from 'react-native'
import React from 'react'

const ThemedTextInput = ({style, ...props}) => {
  return (
    <TextInput
        style={styles.textInput}
        {...props}
    />
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10,
    },

})