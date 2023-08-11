import {View, Text, Button, Animated} from 'react-native';
import React, {useRef} from 'react';

// opacity 1 -> 0 timing animation
export default function AnimatedComponent() {
  const opacityAnim = useRef(new Animated.Value(1)).current;

  function onButtonPress() {
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <Button title="!!!!!!!" onPress={onButtonPress} />
      <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
        🍎
      </Animated.Text>
    </>
  );
}
