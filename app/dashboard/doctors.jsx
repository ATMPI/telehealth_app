import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  useColorScheme,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ThemedView from '../../components/ThemedView';
import ThemedCard from '../../components/ThemedCard';
import ThemedText from '../../components/ThemedText';
import { DoctorList } from '../../constants/Doctors';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

const screenWidth = Dimensions.get('window').width;

const Doctors = () => {
  const route = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const doctorElement = DoctorList.map((doctor, index) => {
    return (
      <View key={index} style={styles.cardContainer}>
          
        <ThemedCard style={[styles.card, { borderColor: theme.border }]}>
          <TouchableOpacity onPress={() => route.push(`../doctor/${doctor.id}`)}>
            <Image
              source={{ uri: doctor.avatar }}
              style={[styles.avatar, { borderColor: theme.uiBackground }]}
            />
            <ThemedText style={styles.cardTitle}>{doctor.name}</ThemedText>
            <ThemedText style={styles.cardDescription}>
              If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your HomeScreen component (shown above).
            </ThemedText>
          </TouchableOpacity>
        </ThemedCard>
      </View>
    );
  });

  return (
    <ThemedView safe={true} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {doctorElement}
      </ScrollView>
    </ThemedView>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop:Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 50,
    height:"100%"
  },
  scrollView: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 30,
    alignItems: 'center',
    paddingBottom: 100,
  },
  cardContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: -4,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 0, // Leave space for avatar
    marginLeft:"auto"

  },
  cardDescription: {
    marginTop: 12,
    fontSize: 14,
    textAlign: 'center',
  },
  avatar: {
    position: 'absolute',
    top: -35,
    left: 20,
    width: 70,
    height: 70,
    borderWidth: 5,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: -4,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    // elevation: 2,
    backgroundColor: '#fff',
  },
});
