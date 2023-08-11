import {View, Text, SafeAreaView, Animated, Button, Easing} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SnackBar() {
  const translateYAnim = useRef(new Animated.Value(100)).current;

  function onPressButton() {
    Animated.sequence([
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.circle),
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(translateYAnim, {
        toValue: 100,
        duration: 400,
        easing: Easing.in(Easing.circle),
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button title="Show SnackBar" onPress={onPressButton} />
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          transform: [{translateY: translateYAnim}],
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#222',
            paddingHorizontal: 20,
            paddingVertical: 14,
            margin: 14,
            borderRadius: 4,
            alignItems: 'center',
          }}>
          <Icon name="checkmark-circle" color={'white'} size={24} />
          <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>
            오류가 발견되었습니다!
          </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
