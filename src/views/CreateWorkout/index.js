import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {
  Surface,
  Title,
  Subheading,
  Paragraph,
  Caption,
  IconButton,
} from 'react-native-paper';
import styles from './styles.js';

const data = [
  {
    id: 1,
    movement: 'Bench press',
    variable: 'Barbell',
    sets: [
      {
        id: 1,
        reps: 10,
        weight: '60kg',
      }, {
        id: 2,
        reps: 8,
        weight: '65kg',
      }, {
        id: 3,
        reps: 7,
        weight: '65kg',
      },
    ],
  }, {
    id: 2,
    movement: 'Flies',
    variable: 'Dumbells',
    sets: [
      {
        id: 1,
        reps: 12,
        weight: '10kg',
      }, {
        id: 2,
        reps: 11,
        weight: '10kg',
      },
    ],
  },
];

const CreateWorkout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>{'New workout'}</Title>
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <>
            <Surface style={styles.listItem}>
              <Subheading>{item.movement}</Subheading>
              <Caption>{item.variable}</Caption>
            </Surface>
            <FlatList
              data={item.sets}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => {
                console.log('set', item);
                return (
                  <Surface style={styles.secondaryItem}>
                    <>
                      <Paragraph style={styles.setNumber}>{item.id}</Paragraph>
                      <IconButton icon="weight-kilogram" />
                      <Paragraph style={styles.setNumber}>{item.weight}</Paragraph>
                      <IconButton icon="counter" />
                      <Paragraph>{item.reps}</Paragraph>
                    </>
                  </Surface>
                );
              }}
            />
            <Surface style={styles.secondaryItem}>
              <IconButton icon="plus" style={styles.addIcon} />
              <Paragraph>{'Add set'}</Paragraph>
            </Surface>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default CreateWorkout;
