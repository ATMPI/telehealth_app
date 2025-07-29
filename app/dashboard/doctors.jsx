import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedCard from '../../components/ThemedCard'
import ThemedText from '../../components/ThemedText'

const Doctors = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.row}>
          <ThemedCard style={[styles.halfCard]}>
            <ThemedText style={styles.cardTitle}>Doctors</ThemedText>
            <ThemedText style={styles.cardDescription}>
              This section will display a list of doctors available for consultations.
            </ThemedText>
          </ThemedCard>

          <ThemedCard style={[styles.halfCard]}>
            <ThemedText style={styles.cardTitle}>Doctors</ThemedText>
            <ThemedText style={styles.cardDescription}>
              This section will display a list of doctors available for consultations.
            </ThemedText>
          </ThemedCard>
        </View>
      </View>
    </ThemedView>
  )
}

export default Doctors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentWrapper: {
    marginTop: '15%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allows items to stack on small screens
  },
  halfCard: {
    flexBasis: '48%', // Two cards side by side with gap
    marginBottom: 16,
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardDescription: {
    marginTop: 10,
    textAlign: 'center',
  },
});