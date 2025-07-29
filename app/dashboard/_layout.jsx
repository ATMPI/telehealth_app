import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const _DashLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;
  return (
    <>
    
    <Tabs initialRouteName="doctors" screenOptions={{headerShown:false , 
      tabBarStyle:{
        backgroundColor:theme.navBackground,
        paddingTop: 10,
        height:90
      },
      tabBarActiveTintColor: theme.iconColorFocused,
      tabBarInactiveTintColor: theme.iconColor,
    }}>
      <Tabs.Screen
        name='doctors' 
        options={{title:'Doctors', tabBarIcon: ({focused}) => (
          <Ionicons
            size={28} 
            name={focused ? "medkit" : "medkit-outline"} 
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )}}
      />
      <Tabs.Screen
        name='appointments' 
        options={{title:'Appointments', tabBarIcon: ({focused}) => (
          <Ionicons
            size={28} 
            name={focused ? "calendar" : "calendar-outline"} 
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )}}
      />
      <Tabs.Screen
        name='connections' 
        options={{title:'Connections', tabBarIcon: ({focused}) => (
          <Ionicons
            size={28} 
            name={focused ? "people" : "people-outline"} 
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )}}
      />
      <Tabs.Screen
        name='consultations' 
        options={{title:'Consultations', tabBarIcon: ({focused}) => (
          <Ionicons
            size={28} 
            name={focused ? "tv" : "tv-outline"} 
            color={focused ? theme.iconColorFocused : theme.iconColor}
          />
        )}}
      />
      
      </Tabs>
      <View style={[styles.headerOptions, styles.row]}>
        <Link href="/" style={styles.optionItem}>
          <Ionicons name='notifications-outline' size={30} color={theme.iconColor} />
        </Link>
        <Link href="/" style={styles.optionItem}>
          <Ionicons name='log-out-outline' size={30} color={theme.iconColor} />
        </Link>
      </View>
    </>
  )
}

export default _DashLayout
const styles = StyleSheet.create({

  headerOptions:{
    position: 'absolute',
    top: "5%",
    right: 10,
    borderRadius: 20,
    padding: 10,
  }
  ,row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    
  },
  optionItem: {
    marginHorizontal: 5,

  },


})