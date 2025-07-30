import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
const AuthLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    <Tabs initialRouteName="login" screenOptions={{headerShown:false , tabBarStyle:{
            backgroundColor:theme.navBackground,
            paddingTop: 10,
            height:90
        },
        tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor,
    }}>
        <Tabs.Screen 
            name='login' 
            badgeCount={2}
            options={{
                title:'Login', 
                tabBarIcon: ({focused}) => (
                    <Ionicons 
                        size={28} 
                        name={focused ? "log-in" : "log-in-outline"} 
                        color={focused ? theme.iconColorFocused : theme.iconColor}
                    />
                ),
               // Example badge count
            }}
           
        />
        <Tabs.Screen 
            name='register' 
            options={{title:'Register', tabBarIcon: ({focused}) => (
                <Ionicons 
                    size={28} 
                    name={focused ? "person-add" : "person-add-outline"} 
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />
            ),tabBarItemStyle: ({focused}) => (
               {
                   borderWidth: focused ? 2 : 0,
                   borderColor: focused ? theme.iconColorFocused : 'transparent',
                   borderTo
               }
            )
        
        }}
        />
        <Tabs.Screen 
            name='services' 
            options={{title:'Other Services', tabBarIcon: ({focused}) => (
                <Ionicons 
                    size={28} 
                    name={focused ? "apps" : "apps-outline"} 
                    color={focused ? theme.iconColorFocused : theme.iconColor}
                />
            )}}
        />
        <Tabs.Screen
            name='forgotPassword' 
            options={{href:null}}
        />
        </Tabs>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})