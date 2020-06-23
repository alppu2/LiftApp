import React from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import styles from './styles.js';

const data = [
  {
    id: 0,
    movement: 'Bench press',
    variable: 'Normal',
    sets: [
      {
        reps: 10,
        weight: '60kg',
      }, {
        reps: 8,
        weight: '65kg',
      }, {
        reps: 7,
        weight: '65kg',
      },
    ],
  }, {
    id: 1,
    movement: 'Flies',
    variable: 'Dumbells',
    sets: [
      {
        reps: 12,
        weight: '10kg',
      }, {
        reps: 11,
        weight: '10kg',
      }, {
        reps: 10,
        weight: '10kg',
      },
    ],
  },
];

const CreateWorkout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text>{item.movement}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CreateWorkout;
