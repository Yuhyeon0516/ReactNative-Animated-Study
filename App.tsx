/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AnimatedComponent from './src/AnimatedComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <AnimatedComponent />
    </SafeAreaView>
  );
}

export default App;
