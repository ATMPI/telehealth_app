import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DoctorDetails = () => {
    const { id } = useLocalSearchParams();
    return (
        <View safe={true} style={{flex:1, justifyContent:"center"}}>
        <Text>DoctorDetails - {id}</Text>
        </View>
    )
}

export default DoctorDetails

const styles = StyleSheet.create({})