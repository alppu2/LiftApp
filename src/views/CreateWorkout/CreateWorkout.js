import React, { useState } from 'react';
import {FlatList, SafeAreaView, TouchableHighlight} from 'react-native';
import {Title} from 'react-native-paper';
import {remove, find, map} from 'lodash';
import MovementTile from 'LiftApp/src/components/MovementTile';
import PropTypes from 'prop-types';
import styles from './styles.js';

const CreateWorkout = ({data}) => {
  const [workoutData, setWorkoutData] = useState(data);

  const handleDeleteMovement = (id) => {
    let newId = 0;
    const newData = [...workoutData];
    remove(newData, movement => movement.id === id);
    setWorkoutData([
      ...map(newData, movement => {
        newId += 1;
        return {...movement, id: newId};
      }),
    ]);
  };

  const handleToggleShowSets = (id) => {
    const newData = find(newData, movement => movement.id === id);
    setWorkoutData([
      ...map(workoutData, movement => {
        if (movement.id !== id) return movement;
        return {...movement, showSets: !movement.showSets};
      }),
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title style={styles.title}>{'New workout'}</Title>
      <FlatList
        data={workoutData}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <MovementTile 
            data={item} 
            deleteMovement={(id) => handleDeleteMovement(id)}
            toggleShowSets={(id) => handleToggleShowSets(id)}
          />)
        }
        
      />
    </SafeAreaView>
  );
};

CreateWorkout.propTypes = {
  data: PropTypes.array,
};

export default CreateWorkout;
