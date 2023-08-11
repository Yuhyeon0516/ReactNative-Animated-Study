import {View, Text, Button, Animated} from 'react-native';
import React, {useRef} from 'react';

// opacity 1 -> 0 timing animation
// export default function AnimatedComponent() {
//   const opacityAnim = useRef(new Animated.Value(1)).current;

//   function onButtonPress() {
//     Animated.timing(opacityAnim, {
//       toValue: 0,
//       useNativeDriver: true,
//     }).start();
//   }

//   return (
//     <>
//       <Button title="!!!!!!!" onPress={onButtonPress} />
//       <Animated.Text style={{fontSize: 70, opacity: opacityAnim}}>
//         🍎
//       </Animated.Text>
//     </>
//   );
// }

// 왼쪽에서 오른쪽으로 이동하는 X가 변화하는 애니메이션
export default function AnimatedComponent() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  function onButtonPress() {
    Animated.timing(translateXAnim, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <Button title="!!!!!!!" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
        🍎
      </Animated.Text>
    </>
  );
}
