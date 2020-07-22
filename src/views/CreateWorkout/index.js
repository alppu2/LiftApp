import React from 'react';
import CreateWorkoutComponent from './CreateWorkout';

const data = [
  {
    id: 1,
    movement: 'Bench press',
    variable: 'Barbell',
    sets: [
      {
        id: 1,
        reps: 10,
        weight: 60,
      },
      {
        id: 2,
        reps: 8,
        weight: 65,
      },
      {
        id: 3,
        reps: 7,
        weight: 65,
      },
    ],
  },
  {
    id: 2,
    movement: 'Flies',
    variable: 'Dumbells',
    sets: [
      {
        id: 1,
        reps: 12,
        weight: 10,
      },
      {
        id: 2,
        reps: 11,
        weight: 10,
      },
    ],
  },
  {
    id: 3,
    movement: 'test',
    variable: 'test',
    sets: [
      {
        id: 1,
        reps: 12,
        weight: 10,
      },
      {
        id: 2,
        reps: 11,
        weight: 10,
      },
    ],
  },
];

const CreateWorkout = () => {
  return <CreateWorkoutComponent data={data} />;
};

export default CreateWorkout;
