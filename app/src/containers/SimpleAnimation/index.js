import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

class SimpleAnimation extends React.Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(100);
  }
  
  componentDidMount() {
      Animated.timing(this.animatedValue, {
        toValue: 300,
        duration: 1000,
        easing: Easing.elastic(1.5)
      }).start();
  }

  render() {
    const animatedStyle = { width: this.animatedValue };

    return (
      <View style={s.scene}>
        <Animated.View style={[s.element, animatedStyle]}/>
      </View>
    )
  }
}

const s = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  element: {
    height: 100,
    backgroundColor: '#333'
  },
});

export default SimpleAnimation;