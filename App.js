import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import excercises from './assets/data/exercises.json'

export default function App() {
  console.log(excercises[0])
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.maintext}>{excercises[0].name}</Text>
        <Text style={styles.subtext}>
          {excercises[0].muscle} | {excercises[0].equipment}{' '}
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    gap: 2,
  },
  maintext: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: '500',
  },
  subtext: {
    color: 'dimgray',
    textTransform: 'capitalize',
  },
})
