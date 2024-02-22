import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.maintext}>{item.name}</Text>
      <Text style={styles.subtext}>
        {item.muscle} | {item.equipment}{' '}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
