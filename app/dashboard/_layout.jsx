import { View, Text, StyleSheet, StatusBar,TextInput, Platform, Alert, Modal, Pressable, Button} from 'react-native'
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
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleOpenAlert = () => {
    //Alert.alert("sadasd")
  }
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
            color={focused ? theme.iconColorFocused : theme.iconColor
            
            }
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
              <Ionicons name='search-outline' size={30} color={theme.iconColor} />
              <TextInput placeholder='Search' style={styles.filterInput}></TextInput>
            </View>
          </View>
          <View style={styles.optionGroup}>

            <Link href="/modal" push asChild style={styles.optionItem} onPress={handleOpenAlert}>
              <Ionicons name='notifications-outline' size={30} color={theme.iconColor} />
            </Link>
            <Link href="/modal" push asChild style={styles.optionItem} onPress={handleOpenAlert}>
              <Ionicons name='person-outline' size={30} color={theme.iconColor} />
            </Link>
            <Pressable push asChild style={{}} onPress={() => setModalVisible(true)}>
              <Ionicons name='notifications-outline' size={35} color={theme.iconColor} />
            </Pressable>
           
            <Link href="/" style={styles.optionItem}>
              <Ionicons name='log-out-outline' size={30} color={theme.iconColor} />
            </Link>
          </View>
        </View>
        <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={() => setModalVisible(false)} />
        <View style={styles.drawer}>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Text style={styles.title}>Drawer Modal</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
       
      </ThemedView>
    </>
  )
}

export default _DashLayout
const styles = StyleSheet.create({
  headerOptions: {
    position: 'absolute',
    top: (Platform.OS === 'android' ? StatusBar.currentHeight : 0),
    width: '100%',
    // backgroundColor: '#fff',
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
    width: '100%',
  },
  filterInput: {
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 15,
    color: '#333',
    height: '100%',
    // paddingTop:9,
    flex:1,
    verticalAlign:"center",
    justifyContent:"center",

  },
  filter: {
    flex: 1,
    marginRight: 10,
    width: '50%',
  },
  optionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },


  overlay: {
    flex: 1,
    justifyContent: 'flex-end', // push to bottom
    backgroundColor: 'rgba(0,0,0,0.1)', // semi-transparent backdrop
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject, // make the backdrop clickable
  },
  drawer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});