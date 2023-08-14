import {View, Text, TouchableWithoutFeedback, Animated} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {collapseData} from './utils/data';

export default function Collapse() {
  return (
    <View>
      {collapseData.map((item, index) => {
        const interpolateAnim = useRef(new Animated.Value(0)).current;
        let isOpened = false;

        function onPress() {
          Animated.timing(interpolateAnim, {
            toValue: isOpened ? 0 : 1,
            useNativeDriver: false,
            duration: 200,
          }).start(() => {
            isOpened = !isOpened;
          });
        }

        return (
          <View key={index}>
            <TouchableWithoutFeedback onPress={onPress}>
              <View
                style={{
                  backgroundColor: '#4c5ced',
                  padding: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'yellow',
                    fontWeight: 'bold',
                    fontSize: 16,
                    flexShrink: 1,
                  }}>
                  {item.q}
                </Text>
                <Animated.View
                  style={{
                    flexShrink: 1,
                    marginLeft: 10,
                    transform: [
                      {
                        rotate: interpolateAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '180deg'],
                        }),
                      },
                    ],
                  }}>
                  <Icon name="expand-more" size={24} color={'yellow'} />
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>

            <Animated.View
              style={{
                height: interpolateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
                paddingHorizontal: 40,
                justifyContent: 'center',
                borderBottomColor: '#4c5ced',
                borderBottomWidth: interpolateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              }}>
              <Text style={{fontSize: 14, color: 'black'}}>{item.a}</Text>
            </Animated.View>
          </View>
        );
      })}
    </View>
  );
}
