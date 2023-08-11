/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import SnackBar from './src/SnackBar';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SnackBar />
    </SafeAreaView>
  );
}

export default App;
