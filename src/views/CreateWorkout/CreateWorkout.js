import React from 'react';
import {FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import {
  Surface,
  Title,
  Subheading,
  Paragraph,
  Caption,
  IconButton,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from './styles.js';

const CreateWorkout = ({workoutData, handleAddSet}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>{'New workout'}</Title>
      <FlatList
        data={workoutData}
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
              renderItem={({item}) => (
                <Surface style={styles.secondaryItem}>
                  <>
                    <Paragraph style={styles.setId}>{item.id}</Paragraph>
                    <IconButton icon="weight-kilogram" />
                    <Paragraph style={styles.setDetails}>{item.weight}</Paragraph>
                    <IconButton icon="counter" />
                    <Paragraph>{item.reps}</Paragraph>
                  </>
                </Surface>
              )}
            />
            <TouchableHighlight
              onPress={() => handleAddSet(item.id)}
              activeOpacity={0.75}
              underlayColor="#fefefe">
              <Surface style={styles.secondaryItem}>
                <IconButton icon="plus" style={styles.addIcon} />
                <Paragraph>{'Add set'}</Paragraph>
              </Surface>
            </TouchableHighlight>
          </>
        )}
      />
    </SafeAreaView>
  );
};

CreateWorkout.propTypes = {
  workoutData: PropTypes.array,
  handleAddSet: PropTypes.func,
};

export default CreateWorkout;
