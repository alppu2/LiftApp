import React, {useState} from 'react';
import CreateWorkoutComponent from './CreateWorkout';
import {find} from 'lodash';

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
  const [workoutData, setWorkoutData] = useState(data);

  const handleAddSet = id => {
    const targetMovement = find(workoutData, movement => movement.id === id);
    const newData = workoutData;
    newData.splice(targetMovement.id - 1, 1, {
      ...targetMovement,
      sets: [
        ...targetMovement.sets,
        {
          id: targetMovement.sets.length + 1,
          reps: null,
          weight: null,
          editing: true,
        },
      ],
    });
    setWorkoutData(newData);
  };

  return (
    <CreateWorkoutComponent
      workoutData={workoutData}
      handleAddSet={id => handleAddSet(id)}
    />
  );
};

export default CreateWorkout;
