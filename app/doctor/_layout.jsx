import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors'

const DoctorLayout = () => {
   const colorScheme = useColorScheme();
   const theme = Colors[colorScheme] ?? Colors.light;
  return (
   <Tabs initialRouteName="[id]" screenOptions={{headerShown:false , 
      tabBarStyle:{
        backgroundColor:theme.navBackground,
        paddingTop: 10,
        height:90
      },
      tabBarActiveTintColor: theme.iconColorFocused,
      tabBarInactiveTintColor: theme.iconColor,
    }}>

    </Tabs>
  )
}

export default DoctorLayout

const styles = StyleSheet.create({})