import {View, SafeAreaView, Button, Animated, Easing} from 'react-native';
import React, {useRef} from 'react';

export default function ProgressBar() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  let clickCount = 0;

  // 수동으로 20%씩 채워 100%까지 채워주는 역할
  function onRunPress() {
    if (clickCount < 5) {
      clickCount += 1;

      Animated.spring(interpolateAnim, {
        toValue: clickCount * 20,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }).start();
    }
  }

  // 자동으로 100%까지 채워주는 역할, 중간에 딜레이 액션도 추가
  function onAutoRunPress() {
    Animated.stagger(150 + 500, [
      Animated.timing(interpolateAnim, {
        toValue: 30,
        easing: Easing.in(Easing.bounce),
        useNativeDriver: false,
      }),
      Animated.timing(interpolateAnim, {
        toValue: 70,
        easing: Easing.in(Easing.bounce),
        useNativeDriver: false,
      }),
      Animated.timing(interpolateAnim, {
        toValue: 100,
        easing: Easing.in(Easing.bounce),
        useNativeDriver: false,
      }),
    ]).start();
  }

  //맨 처음 값으로 되돌아가는 액션
  function onResetPress() {
    clickCount = 0;
    Animated.timing(interpolateAnim, {
      toValue: 0,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  }

  return (
    <SafeAreaView style={{flex: 1, marginTop: 200}}>
      <View style={{padding: 20}}>
        <Button title="Run" onPress={onRunPress} />
      </View>
      <View style={{padding: 20}}>
        <Button title="Auto Run" onPress={onAutoRunPress} />
      </View>
      <View style={{padding: 20}}>
        <Button title="Reset" onPress={onResetPress} />
      </View>
      <View
        style={{position: 'relative', margin: 30, justifyContent: 'center'}}>
        <View style={{backgroundColor: '#222', height: 10, borderRadius: 10}} />
        <Animated.View
          style={{
            backgroundColor: 'blue',
            height: 16,
            position: 'absolute',
            width: interpolateAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
            borderRadius: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
