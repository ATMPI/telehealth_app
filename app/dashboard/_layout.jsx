import { View, Text, StyleSheet, StatusBar,TextInput, Platform } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import ThemedView from '../../components/ThemedView'


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
      <ThemedView style={styles.headerOptions}>

        <View style={[styles.row]}>
          <View style={styles.filter}>
            <View style={styles.filterGroup}>
              <TextInput placeholder='Search' style={styles.filterInput}></TextInput>
              <Ionicons name='filter-outline' size={35} color={theme.iconColor} />
            </View>
          </View>
          <View style={styles.optionGroup}>

            <Link href="/" style={styles.optionItem}>
              <Ionicons name='notifications-outline' size={35} color={theme.iconColor} />
            </Link>
            <Link href="/" style={styles.optionItem}>
              <Ionicons name='log-out-outline' size={34} color={theme.iconColor} />
            </Link>
          </View>
        </View>

      </ThemedView>
    </>
  )
}

export default _DashLayout
const styles = StyleSheet.create({
  headerOptions: {
    position: 'absolute',
    top: (Platform.OS === 'android' ? StatusBar.currentHeight : 0) + 10,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    zIndex: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  optionItem: {
    marginHorizontal: 5,
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    flex: 1,
    height: 35,
    width: '70%',
  },
  filterInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 15,
  },
  filter: {
    flex: 1,
    marginRight: 10,
  },
  optionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});