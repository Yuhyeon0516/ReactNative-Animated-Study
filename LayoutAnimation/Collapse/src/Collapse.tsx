import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';
import {collapseData} from './utils/data';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function Collapse() {
  const [expanded, setExpanded] = useState<number | undefined>();
  function onPress(index: number) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(prev => (prev === index ? undefined : index));
  }

  return (
    <SafeAreaView>
      {collapseData.map((item, index) => {
        return (
          <View key={index}>
            <TouchableWithoutFeedback onPress={() => onPress(index)}>
              <View
                style={{
                  backgroundColor: '#006aff',
                  padding: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: '#428df5',
                }}>
                <Text style={{color: 'white', fontSize: 15}}>
                  {index + 1}) {item.q}
                </Text>
              </View>
            </TouchableWithoutFeedback>

            {expanded === index && (
              <View
                style={{
                  backgroundColor: '#f4f4f4',
                  padding: 20,
                  paddingLeft: 40,
                  borderBottomWidth: 1,
                  borderBottomColor: '#ddd',
                }}>
                <Text style={{color: 'black'}}>{item.a}</Text>
              </View>
            )}
          </View>
        );
      })}
    </SafeAreaView>
  );
}
