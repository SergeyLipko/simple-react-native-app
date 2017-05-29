import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const renderLink = navigate => link =>
  <TouchableOpacity onPress={() => navigate(link)}>
    <Text>{ link }</Text>
  </TouchableOpacity>;


class Home extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    const link = renderLink(navigate);

    return (
      <View>
        { link('Login') }
        { link('SimpleAnimation') }
      </View>
    )
  }
}

export default Home; 