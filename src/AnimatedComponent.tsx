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
// export default function AnimatedComponent() {
//   const translateXAnim = useRef(new Animated.Value(-100)).current;

//   function onButtonPress() {
//     Animated.timing(translateXAnim, {
//       toValue: 100,
//       useNativeDriver: true,
//     }).start();
//   }

//   return (
//     <>
//       <Button title="!!!!!!!" onPress={onButtonPress} />
//       <Animated.Text
//         style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
//         🍎
//       </Animated.Text>
//     </>
//   );
// }

// y축 -200 -> 200으로 이동하는 Sping 애니메이션
export default function AnimatedComponent() {
  const translateYAnim = useRef(new Animated.Value(-200)).current;

  function onButtonPress() {
    translateYAnim.setValue(-200);
    Animated.spring(translateYAnim, {
      toValue: 200,

      // 아래 경계선을 구분으로 그룹을 지어 사용해야함(타그룹과 같이 사용불가)
      // -----------------------

      // bounciness: 8, // 탄력제어
      // speed: 12, // 속도

      // -----------------------

      // friction:7, // 에너지를 소비
      // tension: 40, // 스프링이 얼마나 많은 에너지를 가졌는가

      // -----------------------

      // stiffness: 100, //스프링의 강도
      // damping: 10, // 마찰력
      // mass: 1, // 용수철 끝에 메달려있는 물체의 질량

      velocity: 0,
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <Button title="!!!!!!!" onPress={onButtonPress} />
      <Animated.Text
        style={{fontSize: 70, transform: [{translateY: translateYAnim}]}}>
        🍎
      </Animated.Text>
    </>
  );
}
