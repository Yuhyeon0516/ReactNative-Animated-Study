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
// export default function AnimatedComponent() {
//   const translateYAnim = useRef(new Animated.Value(-200)).current;

//   function onButtonPress() {
//     translateYAnim.setValue(-200);
//     Animated.spring(translateYAnim, {
//       toValue: 200,

//       // 아래 경계선을 구분으로 그룹을 지어 사용해야함(타그룹과 같이 사용불가)
//       // -----------------------

//       // bounciness: 8, // 탄력제어
//       // speed: 12, // 속도

//       // -----------------------

//       // friction:7, // 에너지를 소비
//       // tension: 40, // 스프링이 얼마나 많은 에너지를 가졌는가

//       // -----------------------

//       // stiffness: 100, //스프링의 강도
//       // damping: 10, // 마찰력
//       // mass: 1, // 용수철 끝에 메달려있는 물체의 질량

//       velocity: 0,
//       useNativeDriver: true,
//     }).start();
//   }

//   return (
//     <>
//       <Button title="!!!!!!!" onPress={onButtonPress} />
//       <Animated.Text
//         style={{fontSize: 70, transform: [{translateY: translateYAnim}]}}>
//         🍎
//       </Animated.Text>
//     </>
//   );
// }

// x축 -100 -> 100 decay
// export default function AnimatedComponent() {
//   const translateXAnim = useRef(new Animated.Value(-100)).current;

//   function onButtonPress() {
//     Animated.decay(translateXAnim, {
//       velocity: 1,
//       deceleration: 0.995,
//       useNativeDriver: true,
//     }).start();
//   }

//   return (
//     <>
//       <Button title="!!!!!!!" onPress={onButtonPress} />
//       <Animated.Text
//         style={{fontSize: 70, transform: [{translateX: translateXAnim}]}}>
//         🚘
//       </Animated.Text>
//     </>
//   );
// }

// sequence, delay, parallel, stagger

// 1) y -200 -> 0 timing
// 2) x 0 -> 100 timing
export default function AnimatedComponent() {
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(-200)).current;

  function onButtonPress() {
    // sequence는 동기적으로 순차를 지켜 움직임
    // Animated.sequence([
    //   Animated.timing(translateYAnim, {
    //     toValue: 0,
    //     useNativeDriver: true,
    //   }),
    //   // delay 1000ms 후 뒤에 애니메이션을 동작시킴
    //   Animated.delay(1000),
    //   Animated.timing(translateXAnim, {
    //     toValue: 100,
    //     useNativeDriver: true,
    //   }),
    // ]).start();

    // parallel은 기존에 비동기적으로 움직이는것과 다른것은 없으나 묶여있는 애니메이션중 하나라도 멈추면 전부 멈춤
    // setTimeout(() => {
    //   translateXAnim.stopAnimation();
    // }, 500);
    // Animated.parallel([
    //   Animated.timing(translateYAnim, {
    //     toValue: 0,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(translateXAnim, {
    //     toValue: 100,
    //     useNativeDriver: true,
    //   }),
    // ]).start();

    // stagger는 각 animation 사이에 특정 delay를 주고싶을때 사용함.
    Animated.stagger(1000, [
      Animated.timing(translateYAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(translateXAnim, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <>
      <Button title="!!!!!!!" onPress={onButtonPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {translateX: translateXAnim},
            {translateY: translateYAnim},
          ],
        }}>
        🥝
      </Animated.Text>
    </>
  );
}
