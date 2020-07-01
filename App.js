/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Content from 'LiftApp/src/components/Content';

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <Content />
    </PaperProvider>
  );
};

export default App;
