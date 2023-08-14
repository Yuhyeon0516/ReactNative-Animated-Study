import {View, Text, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

export default function SnowAnimation() {
  return (
    <View style={{backgroundColor: '#121723', flex: 1}}>
      {[...Array(100)].map((item, index) => {
        const interpolateAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
          Animated.loop(
            Animated.timing(interpolateAnim, {
              toValue: 1,
              duration: 5000,
              delay: index * 100,
              useNativeDriver: false,
            }),
          ).start();
        }, [index, interpolateAnim]);

        return (
          <Animated.View
            key={index}
            style={{
              position: 'absolute',
              left: `${Math.floor(Math.random() * 100)}%`,
              top: interpolateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['-10%', '110%'],
              }),
            }}>
            <Icon name="snowflake-2" size={16} color={'white'} />
          </Animated.View>
        );
      })}
    </View>
  );
}
