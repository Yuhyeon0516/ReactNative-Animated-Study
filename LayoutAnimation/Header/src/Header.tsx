import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Header() {
  const [expanded, setExpanded] = useState(true);

  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const y = e.nativeEvent.contentOffset.y;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (y > 10) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        onScroll={e => onScroll(e)}
        scrollEventThrottle={1}
        contentContainerStyle={{height: 1000}}>
        {expanded ? (
          <View style={{backgroundColor: '#333'}}>
            <SafeAreaView style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#222',
                  marginLeft: 20,
                  marginRight: 16,
                  marginBottom: -10,
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="person" size={30} color={'#555'} />
              </View>
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginTop: 8,
                    marginBottom: 2,
                  }}>
                  김유현
                </Text>
                <Text style={{color: 'white', fontSize: 13}}>
                  힘들다고 투정부리지마!!
                </Text>
              </View>
            </SafeAreaView>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#333',
              height: 300,
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                position: 'absolute',
                bottom: -100,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#222',
                  width: 160,
                  height: 160,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="person" size={100} color={'#555'} />
              </View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginTop: 20,
                  fontWeight: 'bold',
                }}>
                김유현
              </Text>
              <Text style={{color: 'black', fontSize: 16, marginTop: 10}}>
                힘들다고 투정부리지마!!
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
}
