/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Content from 'LiftApp/src/components/Content';

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4f4f4f',
    secondary: '#000000',
  },
};

const App: () => React$Node = () => {
  return (
    <PaperProvider theme={theme}>
      <Content />
    </PaperProvider>
  );
};

export default App;
