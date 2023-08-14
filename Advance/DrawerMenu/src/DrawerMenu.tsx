import {
  View,
  SafeAreaView,
  TouchableHighlight,
  Text,
  TouchableWithoutFeedback,
  Animated,
  useWindowDimensions,
  Easing,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DrawerMenu() {
  const {width} = useWindowDimensions();
  const interpolateAnim = useRef(new Animated.Value(0)).current;

  function onClosePress() {
    Animated.timing(interpolateAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  }

  function onOpenPress() {
    Animated.timing(interpolateAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.in(Easing.circle),
      useNativeDriver: false,
    }).start();
  }

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          width: '90%',
          height: '100%',
          backgroundColor: '#fff',
          zIndex: 10,
          transform: [
            {
              translateX: interpolateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-width * 0.9, 0],
              }),
            },
          ],
        }}>
        <SafeAreaView
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{padding: 10, fontSize: 22}}>Menu</Text>
            <Text style={{padding: 10, fontSize: 22}}>Menu</Text>
            <Text style={{padding: 10, fontSize: 22}}>Menu</Text>
          </View>
          <View>
            <TouchableHighlight
              underlayColor={'#aff10050'}
              onPress={onClosePress}
              style={{borderRadius: 100}}>
              <View style={{padding: 14}}>
                <Icon name="close" size={30} color={'#222'} />
              </View>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Animated.View>

      <TouchableWithoutFeedback onPress={onClosePress}>
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['#00000000', '#00000090'],
            }),
            zIndex: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 5],
            }),
          }}
        />
      </TouchableWithoutFeedback>

      <View style={{backgroundColor: '#aff100', flex: 1}}>
        <SafeAreaView style={{alignItems: 'flex-end'}}>
          <TouchableHighlight
            underlayColor={'#ffffff50'}
            onPress={onOpenPress}
            style={{borderRadius: 100}}>
            <View style={{padding: 14}}>
              <Icon name="menu" size={30} color={'#222'} />
            </View>
          </TouchableHighlight>
        </SafeAreaView>
      </View>
    </>
  );
}
