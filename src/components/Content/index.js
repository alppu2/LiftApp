import React from 'react';
import { View } from 'react-native';
import CreateWorkout from 'LiftApp/src/views/CreateWorkout';

const Content = () => {
  return (
    <View style={{flex: 1,backgroundColor: '#e6e6eb'}}>
      <CreateWorkout />
    </View>
  );
};

export default Content;
