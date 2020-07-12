import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {Title} from 'react-native-paper';
import MovementTile from 'LiftApp/src/components/MovementTile';
import PropTypes from 'prop-types';
import styles from './styles.js';

const CreateWorkout = ({workoutData}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>{'New workout'}</Title>
      <FlatList
        data={workoutData}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <MovementTile data={item} />}
      />
    </SafeAreaView>
  );
};

CreateWorkout.propTypes = {
  workoutData: PropTypes.array,
};

export default CreateWorkout;
